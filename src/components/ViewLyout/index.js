import React from "react";
import T from "prop-types";

const ViewLyout = {
  count: 3,
  ViewBox: (props) => {
    const { children, count = 3 } = props;
    ViewLyout.count = count;
    return <div>{children}</div>;
  },
  ViewLabelItem: (props) => {
    let { title, children } = props;
    let { count } = ViewLyout;
    let width = (1 / count) * 100;
    return (
      <div
        style={{
          display: "inline-block",
          width: `${width}%`,
          paddingRight: "20px",
          paddingLeft: "12px",
          lineHeight: "36px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: "3px" }}>{title}</div>
          <div style={{ paddingTop: "8px", flex: 1, lineHeight: "20px" }}>
            {children}
          </div>
        </div>
      </div>
    );
  },
};

ViewLyout.propTypes = {
  count: T.number,
};

ViewLyout.defaultProps = {
  count: 3,
};

ViewLyout.ViewBox.propTypes = {
  count: T.number,
};

ViewLyout.ViewBox.defaultProps = {
  count: 3,
};

ViewLyout.ViewLabelItem.propTypes = {
  title: T.string,
};

ViewLyout.ViewLabelItem.defaultProps = {
  title: "",
};

export default ViewLyout;
