import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import fetchMessage from "../utils/fetchMessage";
import updateMessage from "../utils/updateMessage";

import PWDialog from "../components/PWDialog";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import MessageForm from "../components/MessageForm";

export default function EditMessage(props) {
  const { editId } = useParams();
  console.log("editId: ", editId);

  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const [postedMessage, setPostedMessage] = useState(null);

  useEffect(() => {
    const fragment = window.location.hash;
    if (fragment) {
      setPassword(fragment.slice(1));
      console.log("extracted pw");
    }
  }, []);

  const toggleDialog = () => {
    setShowDialog((prevState) => !prevState);
  };

  const getMessage = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      // console.log("Lets get the message");
      const messageFromDb = await fetchMessage(editId, password, true);
      // console.log(messageFromDb);
      setMessage(messageFromDb);
      toggleDialog();
    } catch (error) {
      console.error(error);
    }
  };

  const pushUpdate = (event) => {
    event.preventDefault();
    const push = async () => {
      try {
        const newMessage = await updateMessage(message, editId, password);
        console.log("new message: ", newMessage);
        setPostedMessage(newMessage);
      } catch (error) {
        console.error(error);
      }
    };
    push();
  };

  return (
    <>
      <section className="EditMessage xxl:w-1/3 relative lg:w-2/3">
        <Header title="edit this a message" />
        <article className="relative overflow-auto">
          {!message && <Spinner />}

          {message && (
            <MessageForm
              password={password}
              setPassword={setPassword}
              message={message}
              setMessage={setMessage}
              submitMessage={pushUpdate}
              onReset={setMessage}
            />
          )}
        </article>
        {!postedMessage && postedMessage}
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
}
