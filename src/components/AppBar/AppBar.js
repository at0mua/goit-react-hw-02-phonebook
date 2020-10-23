import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import s from "./AppBar.module.scss";

const AppBar = ({ title }) => {
  return (
    <CSSTransition in={true} appear timeout={500} classNames={s} unmountOnExit>
      {(stage) => {
        return (
          <div className={s.wrapper}>
            <CSSTransition
              in={stage === "entered"}
              timeout={500}
              classNames={s}
              unmountOnExit
            >
              <h1 className={s.title}>{title}</h1>
            </CSSTransition>
          </div>
        );
      }}
    </CSSTransition>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBar;
