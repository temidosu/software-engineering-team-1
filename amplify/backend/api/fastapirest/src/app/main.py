# main.py

from typing import Optional
from fastapi import FastAPI
import boto3

client = boto3.client('dynamodb')
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/tables")
def read_root():
    response = client.list_tables()
    print(response)
    return response


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}