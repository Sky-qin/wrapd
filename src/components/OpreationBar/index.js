import React from "react";
import { Button } from "antd";
import T from "prop-types";
import styles from "./index.css";

const OpreationBar = (props) => {
  const { buttonList, linkList, total = 0, custom, onClick } = props;
  return (
    <div>
      <div className={styles["opreation-bar-inner"]}>
        <div className={styles["opreation-bar-left"]}>
          {custom || null}
          {buttonList.map((item, index) => {
            return (
              <Button
                key={index}
                type="primary"
                className={styles["button-item"]}
                icon={item.icon || null}
                onClick={() => onClick(item.key, item)}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
        <div className={styles["opreation-bar-right"]}>
          {linkList.map((item, index) => {
            const { key, url = "", params = {} } = item;
            let aParams = {};
            if (key === "export") {
              aParams = {
                component: "a",
                href: `${url}?${Object.entries(params)
                  .map((item) => item.join("="))
                  .join("&")}`,
              };
            }
            return (
              <Button
                key={index}
                type="link"
                icon={item.icon || null}
                className={styles["link-item"]}
                // onClick={() => this.handleClickBtn(item)}
                {...aParams}
              >
                {item.label}
              </Button>
            );
          })}
          {total !== false && (
            <Button type="link" className={styles["link-item"]}>
              共 {total} 条
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

OpreationBar.propTypes = {
  buttonList: T.array,
  linkList: T.array,
  total: T.bool,
  onClick: T.func,
};

OpreationBar.defaultProps = {
  buttonList: [],
  linkList: [],
  total: 0,
  onClick: () => console.log("key"),
};

export default OpreationBar;
