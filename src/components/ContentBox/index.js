import React from "react";
import T from "prop-types";
import { Spin } from "antd";
import styles from "./index.css";

const ContentBox = (props) => {
  const { children, loading, style, extend } = props;
  return (
    <div className={styles["content-box"]} style={style}>
      <Spin tip="数据加载中..." spinning={loading}>
        {children}
      </Spin>
      {extend || ""}
    </div>
  );
};

ContentBox.propTypes = {
  loading: T.bool,
  style: T.object,
};

ContentBox.defaultProps = {
  loading: false,
  style: {},
};

export default ContentBox;
