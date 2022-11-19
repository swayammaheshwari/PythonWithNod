import numpy as np
import pandas as pd
import sys
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

heart_data = pd.read_csv('heart.csv')


heart_data['target'].value_counts()

X = heart_data.drop(columns='target', axis=1)
Y = heart_data['target']
# print(X)
# print(Y)
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)
# print(X.shape, X_train.shape, X_test.shape)
model = LogisticRegression()

model.fit(X_train, Y_train)


X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
# print('Accuracy on Training data : ', training_data_accuracy)
# print('Accuracy on Test data : ', training_data_accuracy)

# input_data = (63,0,3,145,354,0,1,187,0,3.5,2,0,2)
# input_data = [3,0,3,15,354,0,1,15,0,3.5,2,0,2]
# input_data = "3,0,3,15,354,0,1,15,0,3.5,2,0,2"
input_data =[int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]),int(sys.argv[4]),int(sys.argv[5]),int(sys.argv[6]),int(sys.argv[7]),int(sys.argv[8]),int(sys.argv[9]),float(sys.argv[10]),int(sys.argv[11]),int(sys.argv[12]),int(sys.argv[13])]
# input_data = sys.argv[1]
# data = input_data.split()
# print((input_data))



input_data_as_numpy_array= np.asarray(input_data)

input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = model.predict(input_data_reshaped)


# print(prediction)

if (prediction[0]== 0):
  print('The Person does not have a Heart Disease')
else:
  print('The Person has Heart Disease')