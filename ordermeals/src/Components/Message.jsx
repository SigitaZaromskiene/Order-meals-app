import { useEffect, useContext } from "react";
import { Global } from "./Global";

function Message() {
  const { setErrMessage, errMessage } = useContext(Global);

  useEffect(() => {
    setTimeout(() => {
      setErrMessage(null);
    }, 3000);
  }, [setErrMessage]);

  return (
    <>
      {errMessage ? (
        <div className="message-container">
          <div className="message-container__text">
            <p>{errMessage}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Message;
