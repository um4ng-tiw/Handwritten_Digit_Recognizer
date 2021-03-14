# Handwritten_Digit_Recognizer


### About the project

![screenshot1]

The Handwritten Digit Recognizer is a web application which identifies the digits drawn by the user on a canvas provided in the app. The Python code of the CNN model used in classification of the digits in this web application can be found here: [MNIST_Handwritten_CNN](https://github.com/um4ng-tiw/MNIST_Handwritten_CNN)

### Built With
![react-shield] ![node-shield] ![tensorflow-shield] ![python-shield] ![keras-shield]

* The frontend of the application was built using React
* The chart library used for plotting the bar chart is Chart.js
* The original model was built and trained on Python using the Keras API
* The model was converted and used in React with the help of Tensorflow.js
* The Node.js acts as a local server to host the files of the saved model

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your system to run this project.

### Execution guide

#### Server side first
1. Download the contents of the repository
2. Locate to the server directory
3. Type the following command inside the server directory on your terminal
  ```sh
  npm install
  ```
4. After the required dependencies have finished the installation execute
  ```sh
  node index.js
  ```
#### Client side
1. Locate to the frontend directory
2. Type the following command inside the frontend directory on your terminal
 ```sh
  npm install
  ```
3. After the required dependencies have finished the installation execute
  ```sh
  npm run start
  ```
## Usage
![demo]

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- Links -->
[screenshot1]: ./Screenshot1.png
[react-shield]: https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
[node-shield]:https://img.shields.io/badge/-Nodejs-green?logo=node.js&logoColor=white&style=for-the-badge
[tensorflow-shield]:https://img.shields.io/badge/-Tensorflow.js-orange?logo=tensorflow&logoColor=white&style=for-the-badge
[python-shield]:https://img.shields.io/badge/-Python-blue?logo=python&logoColor=white&style=for-the-badge
[keras-shield]:https://img.shields.io/badge/-Keras-red?logo=keras&logoColor=white&style=for-the-badge
[demo]: ./demo.gif
