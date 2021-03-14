import { useState, useEffect } from "react";
import Canvas from "./component/Canvas";
import * as tf from "@tensorflow/tfjs";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { HorizontalBar } from "react-chartjs-2";

function App() {
  const url = {
    model: "http://localhost:8080/model.json",
  };

  const [model, setModel] = useState();
  const [predictionResult, setResult] = useState([]);
  useEffect(() => {
    tf.ready().then(() => {
      loadModel(url);
    });
  }, []);

  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
      console.log("Model Load success");
    } catch (err) {
      console.log(err);
    }
  }

  const preprocessImage = async (image) => {
    let tensor = tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([28, 28])
      .mean(2)
      .expandDims(2)
      .expandDims()
      .toFloat();

    tensor.div(255);
    console.log(tensor);
    let predictions = await model.predict(tensor).data();

    let results = Array.from(predictions);
    console.log(results);
    setResult(results);
  };

  const clearResultState = () => {
    setResult([]);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#30312F",
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography component={"span"}>
            <h2>Digit Recognizer</h2>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="app-child">
        <div>
          <Canvas getImage={preprocessImage} clearResult={clearResultState} />
        </div>
        <div className="chart-container">
          <HorizontalBar
            data={{
              labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
              datasets: [
                {
                  label: "Prediction probability",
                  data: predictionResult,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(66, 245, 164, 0.5)",
                    "rgba(132, 255, 82, 0.5)",
                    "rgba(255, 20, 146, 0.5)",
                    "rgba(255, 126, 20, 0.5)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(66, 245, 164, 1)",
                    "rgba(132, 255, 82, 1)",
                    "rgba(255, 20, 146, 1)",
                    "rgba(255, 126, 20, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            height={380}
            width={760}
          />
        </div>
      </div>
      <p className="Footer">Made with ⚛️ by Umang Tiwari</p>
    </div>
  );
}

export default App;
