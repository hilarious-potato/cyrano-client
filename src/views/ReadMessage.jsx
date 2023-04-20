import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import PWDialog from "../components/PWDialog";
import Header from "../components/Header";
import fetchMessage from "../utils/fetchMessage";

import Typed from "typed.js";

const ReadMessage = () => {
  console.log("WE Are in the read message comp");
  const { messageId } = useParams();
  console.log(messageId);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const typedOutput = useRef(null);

  useEffect(() => {
    const fragment = window.location.hash;
    if (fragment) {
      setPassword(fragment.slice(1));
      // console.log("extracted pw");
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

  const getMessage = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      // console.log("Lets get the message");
      const messageFromDb = await fetchMessage(messageId, password);
      // console.log(messageFromDb);
      setMessage(messageFromDb);
      toggleDialog();
      renderMessage(messageFromDb);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="ReadMessage xxl:w-1/3 relative lg:w-2/3">
        <Header title="cyrano has sent you a message" />
        <article className="relative overflow-auto">
          {!message && <Spinner context="decrypt" />}
          <span ref={typedOutput} />
          {!message && <span className="typed-cursor" />}
        </article>
      </section>
      <PWDialog
        open={showDialog}
        toggle={toggleDialog}
        title="enter password"
        onSubmit={getMessage}
        password={password}
        onChange={setPassword}
        onReset={setPassword}
      />
    </>
  );
};

export default ReadMessage;
