# import json
from pymongo import MongoClient, ReturnDocument
from bson.objectid import ObjectId

# mongo_uri = 'mongodb+srv://koimilgaya:koimilgaya321@cluster0.v8panrh.mongodb.net/placement_who'
# client = MongoClient(mongo_uri)

# def store_json_to_mongodb(json_file: str, clerk_id: str, collection_name: str, request_id: str):
#     try:
#         # Read the JSON data from the file
#         with open(json_file, "r") as file:
#             json_data = json.load(file)

#         # Create the document to be inserted
#         document = {
#             "clerkId": clerk_id,
#             "data": json_data
#         }

#         db = client['placement_who']
#         collection = db[collection_name]

#         # Insert the document into the collection
#         result = collection.insert_one(document)
        
#         print(f"Document inserted with _id: {result.inserted_id}")
#         update_document_by_id('requests', request_id, result.inserted_id)
#         return result.inserted_id

#     except Exception as e:
#         print(f"An error occurred: {str(e)}")
#         return

# # Function to update document by _id
# def update_document_by_id(collection_name, doc_id, output_id):
#     try:
#         db = client.get_database()  # Replace with your database name
#         collection = db.get_collection(collection_name)

#         # Convert string _id to ObjectId if needed
#         if not isinstance(doc_id, ObjectId):
#             doc_id = ObjectId(doc_id)

#         # Update the document and return the updated document
#         updated_document = collection.find_one_and_update(
#             {"_id": doc_id},
#             {"$set": {
#                 outputId : ObjectId(output_id)
#             }},
#             return_document=ReturnDocument.AFTER  # Return the updated document
#         )

#         return updated_document

#     except Exception as e:
#         print(f"An error occurred: {str(e)}")
#         return

import json
from motor.motor_asyncio import AsyncIOMotorClient
from bson.objectid import ObjectId
import aiofiles

mongo_uri = 'mongodb+srv://koimilgaya:koimilgaya321@cluster0.v8panrh.mongodb.net/placement_who'
client = AsyncIOMotorClient(mongo_uri)
print('Connected to mogoDb')

async def store_json_to_mongodb(json_file: str, clerk_id: str, collection_name: str, request_id: str):
    try:
        print("Creating O/p Doc")
        # Read the JSON data from the file
        async with aiofiles.open(json_file, "r") as file:
            json_data = await file.read()
            json_data = json.loads(json_data)

        # Create the document to be inserted
        document = {
            "clerkId": clerk_id,
            "data": json_data
        }

        db = client['placement_who']
        collection = db[collection_name]

        # Insert the document into the collection
        result = await collection.insert_one(document)
        
        print(f"Document inserted with _id: {result.inserted_id}")
        await update_document_by_id('requests', request_id, result.inserted_id)
        return result.inserted_id

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return

# Function to update document by _id
async def update_document_by_id(collection_name, doc_id, output_id):
    try:
        print('Update request doc')
        db = client.get_database()  # Replace with your database name
        collection = db.get_collection(collection_name)

        # Convert string _id to ObjectId if needed
        if not isinstance(doc_id, ObjectId):
            doc_id = ObjectId(doc_id)

        # Update the document and return the updated document
        updated_document = await collection.find_one_and_update(
            {"_id": doc_id},
            {"$set": {
                "outputId": ObjectId(output_id)
            }},
            return_document=ReturnDocument.AFTER  # Return the updated document
        )

        return updated_document

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return
