import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TypedSpinner from "../components/TypedSpinner";
import PWDialog from "../components/PWDialog";
import Header from "../components/Header";
import fetchMessage from "../utils/fetchMessage";

import Typed from "typed.js";
import Alert from "../components/Alert";

const ReadMessage = () => {
  const { messageId } = useParams();
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const typedOutput = useRef(null);

  useEffect(() => {
    const fragment = window.location.hash;
    if (fragment) {
      setPassword(fragment.slice(1));
    }
  }, []);

  const toggleDialog = () => {
    setShowDialog((prevState) => !prevState);
  };
  // console.log("Password:", password);

  const renderMessage = (message) => {
    const typed = new Typed(typedOutput.current, {
      strings: [message],
      typeSpeed: 30,
      contentType: null,
      startDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  };

  const getMessage = async () => {
    try {
      // console.log("Lets get the message");
      const messageFromDb = await fetchMessage(messageId, password);
      // console.log(messageFromDb);

      setMessage(messageFromDb);
      renderMessage(messageFromDb);
    } catch (error) {
      <Alert message="We could not fetch your message from the server, maybe it was deleted or your link is wrong" />;
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(null);
    getMessage();
    toggleDialog();
  };

  return (
    <>
      <section className="ReadMessage relative">
        <Header title="cyrano has sent you a message" />
        <article className="relative overflow-auto">
          {!message && <TypedSpinner context="decrypt" />}
          <span ref={typedOutput} />
          {!message && <span className="typed-cursor" />}
        </article>
      </section>
      <PWDialog
        open={showDialog}
        toggle={toggleDialog}
        title="enter password"
        onSubmit={handleSubmit}
        password={password}
        onChange={setPassword}
        onReset={setPassword}
      />
    </>
  );
};

export default ReadMessage;
