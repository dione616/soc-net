import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Messages from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = props => {
  let dialogsElements = props.dPage.dialogs.map(d => {
    const { id, name } = d; /*destructuring object d*/

    return <DialogItem name={name} id={id} />;
  }); /*using map with destructuring object*/

  let messagesElements = props.dPage.messages.map(m => {
    return <Messages message={m.message} />;
  }); /*using map*/

  let textRef = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  };

  let onMessageChange = () => {
    let textMessage = textRef.current.value;
    props.dispatch(updateNewMessageTextActionCreator(textMessage));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.singleItem}>{dialogsElements}</div>
      </div>
      <div className={style.messages}>
        {messagesElements}
        <div className={style.addMessage}>
          <textarea
            value={props.dPage.newMessageText}
            name=""
            id=""
            cols="30"
            rows="5"
            ref={textRef}
            onChange={onMessageChange}
          />
          <br />
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
