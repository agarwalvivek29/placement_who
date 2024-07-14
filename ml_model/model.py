# from fastapi import FastAPI
# from pydantic import BaseModel
# import pickle

# app = FastAPI()

# # Load your ML model
# with open('model.pkl', 'rb') as f:
#     model = pickle.load(f)

# class PredictionRequest(BaseModel):
#     data: list  # Adjust according to your input data structure

# @app.post('/predict')
# def predict(request: PredictionRequest):
#     prediction = model.predict(request.data)
#     return {"prediction": prediction.tolist()}  # Adjust response format as needed




from fastapi import FastAPI
from pydantic import BaseModel
import pickle

app = FastAPI()

# Load your ML model
with open('scaler.pkl', 'rb') as f:
    model = pickle.load(f)

class PredictionRequest(BaseModel):
    data: list  # Adjust according to your input data structure

@app.post('/predict')
def predict(request: PredictionRequest):
    prediction = model.predict([request.data])  # Ensure input shape matches your model
    return {"prediction": prediction.tolist()}  # Adjust response format as needed
