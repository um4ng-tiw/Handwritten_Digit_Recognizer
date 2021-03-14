import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [myImage, setMyImage] = useState("");

  //   var myImage;
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 380;
    canvas.height = 380;
    canvas.style.width = `${380}px`;
    canvas.style.height = `${380}px`;

    const context = canvas.getContext("2d");
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "white";
    context.lineWidth = 15;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    const canvas = canvasRef.current;
    const myImageURL = canvas.toDataURL("image/png");
    setMyImage(myImageURL);
    setIsDrawing(false);
    props.getImage(canvas);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    setMyImage("");
    props.clearResult();
  };

  return (
    <div className="container">
      <div className="draw-area">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        ></canvas>
      </div>

      <p className="draw-area-text">Drawing Area</p>

      <div className="clear-button-container">
        <Button
          variant="contained"
          color="primary"
          className="clear-button"
          onClick={clearCanvas}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Canvas;
