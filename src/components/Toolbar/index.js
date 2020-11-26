import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.css";

const Toolbar = ({ children, inline, compact, ...restProps }) => {
  const classes = classNames({
    [styles.toolbarInline]: inline,
    [styles.toolbar]: !inline,
    [styles.compact]: compact,
  });

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Toolbar.propTypes = {
  inline: PropTypes.bool.isRequired,
  compact: PropTypes.bool.isRequired,
};

Toolbar.defaultProps = {
  inline: false,
  compact: false,
};

const Group = ({ children }) => {
  return <span className={styles.group}>{children}</span>;
};

const Tool = ({ children }) => {
  return <span className={styles.tool}>{children}</span>;
};

Toolbar.Group = Group;
Toolbar.Tool = Tool;

export default Toolbar;
