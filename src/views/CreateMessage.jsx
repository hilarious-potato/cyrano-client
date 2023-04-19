import { useEffect, useState } from "react";
import postMessage from "../utils/postMessage";
import generatePassword from "../utils/generatePassword";
import MessageForm from "../components/MessageForm";
import Header from "../components/Header";
import LinkOutlet from "../components/LinkOutlet";

const CreateMessage = () => {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [postedMessage, setPostedMessage] = useState(null);

  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  const submitMessage = (event) => {
    event.preventDefault();
    const submit = async () => {
      try {
        const newMessage = await postMessage(message, password);
        setPostedMessage(newMessage);
        console.log("newMessage: ", newMessage);
      } catch (error) {
        console.error(error);
      }
    };
    submit();
  };

  const resetMessage = () => {
    setMessage("");
    setPostedMessage(null);
    setPassword(generatePassword());
  };

  return (
    <section className="CreateMessage relative w-4/5 ">
      <Header title="Create a Message" />
      {!postedMessage && (
        <MessageForm
          password={password}
          setPassword={setPassword}
          message={message}
          setMessage={setMessage}
          submitMessage={submitMessage}
          onReset={setMessage}
        />
      )}
      {postedMessage && (
        <LinkOutlet
          newMessage={resetMessage}
          postedMessage={postedMessage}
          title="🎉 success, your message was encrypted and created"
          subTitle="now you can copy the links and share your message with the world!"
        />
      )}
    </section>
  );
};

export default CreateMessage;
