import React from "react";
import styles from "./index.css";

class CancelIcon extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas = () => {
    const { width = 20, unkey } = this.props;

    let cwidth = (width / 100) * 65;

    const ctx = document.getElementById(unkey).getContext("2d");

    ctx.moveTo(0, 0);
    ctx.lineTo(cwidth, cwidth);
    ctx.moveTo(0, cwidth);
    ctx.lineTo(cwidth, 0);
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  render() {
    const { width = 20, style = {}, unkey, onClick } = this.props;
    let cwidth = (width / 100) * 65;
    return (
      <span
        style={{ width, height: width, ...style }}
        className={styles["cancel-icon"]}
        onClick={onClick}
      >
        <canvas
          style={{ cursor: "pointer" }}
          id={unkey}
          width={cwidth}
          height={cwidth}
        />
      </span>
    );
  }
}

export default CancelIcon;
