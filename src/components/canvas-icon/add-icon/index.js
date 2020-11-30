import React from "react";
import styles from "./index.css";
// import "./index.scss";

class AddIcon extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas = () => {
    const { width = 24, unkey } = this.props;

    const ctx = document.getElementById(unkey).getContext("2d");

    ctx.beginPath();
    ctx.arc(12, 12, (width - 4) / 2, 0, 2 * Math.PI);

    ctx.moveTo(6, width / 2);
    ctx.lineTo(width - 6, width / 2);

    ctx.moveTo(width / 2, 6);
    ctx.lineTo(width / 2, width - 6);

    ctx.lineWidth = 2;

    ctx.stroke();
  };

  render() {
    const { width = 24, style = {}, unkey, onClick } = this.props;
    return (
      <span
        style={{
          ...style,
          display: "inline-block",
          width,
          height: width,
        }}
        className={styles["add-icon"]}
        onClick={onClick}
      >
        <canvas
          style={{ cursor: "pointer" }}
          id={unkey}
          width={width}
          height={width}
        />
      </span>
    );
  }
}

export default AddIcon;
