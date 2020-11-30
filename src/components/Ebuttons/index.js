import React from "react";
import CancelIcon from "../canvas-icon/cancel-icon";
import AddIcon from "../canvas-icon/add-icon";
import { message } from "antd";
import classNames from "classnames";
import styles from "./index.css";

class Ebttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null,
      data: this.props.data || [],
    };
  }

  componentDidMount() {}

  handleChange = (value, index) => {
    const { data, onChange } = this.props;
    data[index] = value;
    this.setState({ data });
    onChange && typeof onChange === "function" && onChange(data);
  };

  handleAdd = () => {
    const { data, onChange } = this.props;
    let canAdd = true;
    data.map((item) => {
      if (!item) {
        canAdd = false;
        message.warning("请在输入框输入值后再添加！");
      }
      return null;
    });
    if (canAdd) {
      data.push("");
      this.setState({
        activeKey: data.length - 1,
        data,
      });
      onChange && typeof onChange === "function" && onChange(data);
    }
  };

  handleDelete = (index) => {
    const { data, onChange } = this.props;
    data.splice(index, 1);
    this.setState({
      activeKey: null,
      data,
    });
    onChange && typeof onChange === "function" && onChange(data);
  };

  render() {
    const { canAdd = true, canDelete = true } = this.props;
    const { activeKey, data } = this.state;
    return (
      <div className={styles["wrap-edit-btn"]}>
        {(data || []).map((item, index) => {
          return (
            <span
              className={classNames({
                [styles["edit-button"]]: true,
                [styles["edit-button-active"]]: activeKey === index,
              })}
              key={index}
            >
              {activeKey === index || item === "" ? (
                <input
                  bordered="false"
                  className={styles["edit-input"]}
                  placeholder="请输入"
                  defaultValue={item || ""}
                  onBlur={() => {
                    this.setState({ activeKey: null });
                  }}
                  onFocus={() => {
                    this.setState({ activeKey: index });
                  }}
                  onChange={(e) => this.handleChange(e.target.value, index)}
                />
              ) : (
                <span
                  style={{
                    display: "inline-block",
                    height: "32px",
                    paddingRight: "10px",
                  }}
                  onClick={() => this.setState({ activeKey: index })}
                >
                  {item || ""}
                </span>
              )}
              {canDelete && (
                <CancelIcon
                  unkey={`close-${index}`}
                  onClick={() => this.handleDelete(index)}
                />
              )}
            </span>
          );
        })}
        {canAdd && <AddIcon unkey="test02" onClick={() => this.handleAdd()} />}
      </div>
    );
  }
}

export default Ebttons;
