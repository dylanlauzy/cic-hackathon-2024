from email.quoprimime import body_check
from os import read
from pathlib import Path
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException, Body
from typing import List

from langchain.chains import LLMChain
from langchain.llms.bedrock import Bedrock
from langchain.prompts import PromptTemplate
import boto3


PROMPT_TXT = Path('prompt_template.txt')
with open(PROMPT_TXT, 'r') as f:
    PROMPT_TEMPLATE = f.read()

app = FastAPI()

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
    "ISTJ", "ISFJ", "INFJ", "INTJ",
    "ISTP", "ISFP", "INFP", "INTP",
    "ESTP", "ESFP", "ENFP", "ENTP",
    "ESTJ", "ESFJ", "ENFJ", "ENTJ"
]

chats = {}

def get_chat_response(mbti: str, question: str):
    conversation_history = chats.get(mbti, "")
    
    
    prompt = PromptTemplate(
        input_variables=["mbti", "conversation_history", "question"],
        template=PROMPT_TEMPLATE
    )
    
    bedrock_chain = LLMChain(llm=llm, prompt=prompt)
    
    response = bedrock_chain({'mbti': mbti, 'conversation_history': conversation_history, 'question': question})
    
    processed_response = response['text'].split('</response>')[0].strip()
    
    chats[mbti] = f"{conversation_history}\nUser: {question}\nConsul: {processed_response}"
    
    return processed_response

@app.post("/chat")
async def chatbot_endpoint(mbti: str, question: str = Body(...)):
    try:
        response = get_chat_response(mbti, question)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def main():
    return {"message": "Chat server is running"}