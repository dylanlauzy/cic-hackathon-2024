from collections import defaultdict
from email.quoprimime import body_check
from os import read
from pathlib import Path
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from langchain.chains import LLMChain
from langchain.llms.bedrock import Bedrock
from langchain.prompts import PromptTemplate
import boto3


PROMPT_TXT = Path('prompt_template.txt')
with open(PROMPT_TXT, 'r') as f:
    PROMPT_TEMPLATE = f.read()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

bedrock_client = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-west-2"
)

modelID = "anthropic.claude-v2"

llm = Bedrock(
    model_id=modelID,
    client=bedrock_client,
    model_kwargs={"max_tokens_to_sample": 2000, "temperature": 0.4}
)

mbtis = [
    "ISTJ",
]

chat_histories = {}
chats = defaultdict(list)

def get_chat_response(mbti: str, question: str):
    conversation_history = chat_histories.get(mbti, "")
    
    
    prompt = PromptTemplate(
        input_variables=["mbti", "conversation_history", "question"],
        template=PROMPT_TEMPLATE
    )
    
    bedrock_chain = LLMChain(llm=llm, prompt=prompt)
    
    response = bedrock_chain({'mbti': mbti, 'conversation_history': conversation_history, 'question': question})
    
    processed_response = response['text'].split('</response>')[0].strip()
    
    chat_histories[mbti] = f"{conversation_history}\nUser: {question}\nConsul: {processed_response}"
    
    return processed_response

@app.get("/chat")
async def get_chat(mbti: str):
    return chats[mbti]

@app.post("/question")
async def question(question: str = Body(...)):
    for mbti in mbtis:
        response = get_chat_response(mbti, question)
        chats[mbti].append(("user", question))
        chats[mbti].append(("agent", response))
    
    return chats

@app.post("/message")
async def chatbot_endpoint(mbti: str, question: str = Body(...)):
    try:
        response = get_chat_response(mbti, question)
        chats[mbti].append(("user", question))
        chats[mbti].append(("agent", response))
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.get("/")
async def main():
    return {"message": "Chat server is running"}