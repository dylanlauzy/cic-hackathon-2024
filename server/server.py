from langchain.chains import LLMChain
from langchain.llms.bedrock import Bedrock
from langchain.prompts import PromptTemplate
import boto3
import os
import streamlit as st
from mbti import INTJ, INTP, INFJ, INFP, ENFJ, ESTJ, ESFJ 

# os.environ["AWS_PROFILE"] = "alex"

# Creates the bedrock client
bedrock_client = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-west-2"
)

# Used for the bedrock instance 
modelID = "anthropic.claude-v2:1"

# Creates the bedrock instance 
llm = Bedrock(
    model_id=modelID,
    client=bedrock_client,
    model_kwargs={"max_tokens_to_sample": 2000,"temperature":0.9}
)

# Initialize or update session state for conversation histories of two chats
if 'conversation_history_1' not in st.session_state:
    st.session_state.conversation_history_1 = INTJ
if 'conversation_history_2' not in st.session_state:
    st.session_state.conversation_history_2 = INTP
if 'conversation_history_2' not in st.session_state:
    st.session_state.conversation_history_2 = INFJ
if 'conversation_history_2' not in st.session_state:
    st.session_state.conversation_history_2 = INFP
if 'conversation_history_2' not in st.session_state:
    st.session_state.conversation_history_2 = ENFJ
if 'conversation_history_2' not in st.session_state:
    st.session_state.conversation_history_2 = ESTJ
if 'conversation_history_2' not in st.session_state:
    st.session_state.conversation_history_2 = ESFJ


# Initilaizes chats with pre entered prompts 
def my_chatbot_with_memory(chat_id, language, freeform_text):
    # Use the session state to store and update the conversation history
    conversation_history_key = f'conversation_history_{chat_id}'
    conversation_history = st.session_state[conversation_history_key]
    prompt_text = f"You are a chatbot. You are in {language}.\n\n{conversation_history}{freeform_text}"
    
    prompt = PromptTemplate(
        input_variables=["language", "freeform_text", "conversation_history"],
        template=prompt_text
    )

    bedrock_chain = LLMChain(llm=llm, prompt=prompt)

    response = bedrock_chain({'language': language, 'freeform_text': freeform_text, 'conversation_history': conversation_history})
    
    # Update the session state with the new conversation history
    st.session_state[conversation_history_key] += f"\n{language}:\n{freeform_text}\nChatbot:\n{response['text']}\n"
    
    return response['text']

# Function to check if word limit is exceeded and provide feedback
def check_word_limit(text, word_limit):
    words = text.split()
    if len(words) > word_limit:
        st.warning(f"Word limit exceeded. Please limit your input to {word_limit} words.")
        return False
    return True
    
def process_chat_input(chat_id):
    language = st.sidebar.selectbox(f"Language {chat_id}", ["english", "spanish"], key=f'lang{chat_id}')
    freeform_text = st.sidebar.text_area(f"What is your question? {chat_id}", max_chars=2000, key=f'text{chat_id}')

    if st.sidebar.button('Send', key=f'send{chat_id}'):
        if language and freeform_text:
            response_text = my_chatbot_with_memory(chat_id, language, freeform_text)
            st.write(response_text)
        else:
            st.write("Please enter a question.")

    # Optionally, add a button to clear the conversation history for the chat instance
    if st.sidebar.button(f'Clear Conversation {chat_id}', key=f'clear{chat_id}'):
        st.session_state[f'conversation_history_{chat_id}'] = ""

# UI for Chat 1
st.title("Bedrock Chatbot 1")
process_chat_input(1)

# This creates some space between the two chat UIs
st.write("---")

# UI for Chat 2
st.title("Bedrock Chatbot 2")
process_chat_input(2)

# UI for Chat 1
st.title("Bedrock Chatbot 1")
process_chat_input(3)

# This creates some space between the two chat UIs
st.write("---")
# UI for Chat 1
st.title("Bedrock Chatbot 1")
process_chat_input(4)

# This creates some space between the two chat UIs
st.write("---")
# UI for Chat 1
st.title("Bedrock Chatbot 1")
process_chat_input(5)

# This creates some space between the two chat UIs
st.write("---")
# UI for Chat 1
st.title("Bedrock Chatbot 1")
process_chat_input(6)

# This creates some space between the two chat UIs
st.write("---")
# UI for Chat 1
st.title("Bedrock Chatbot 1")
process_chat_input(7)

# This creates some space between the two chat UIs
st.write("---")
# UI for Chat 1
st.title("Bedrock Chatbot 1")
process_chat_input(8)

# This creates some space between the two chat UIs
st.write("---")

