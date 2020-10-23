import React from "react";

import s from "./Message.module.scss";

const Message = () => {
  return (
    <div className={s.Notification}>
      <p className={s.text}>Contact alredy exist!</p>
    </div>
  );
};

export default Message;
