import { useEffect, useState } from "react";
import postMessage from "../utils/postMessage";
import generatePassword from "../utils/generatePassword";
import MessageForm from "../components/MessageForm";
import OutputField from "../components/Outputfield";

function CreateMessage() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [postedMessage, setPostedMessage] = useState(null);
  useEffect(() => {
    setPassword(generatePassword());
  }, []);
  const submitMessage = (event) => {
    event.preventDefault();
    const submitMessage = async () => {
      try {
        const newMessage = await postMessage(message, password);
        setPostedMessage(newMessage);
      } catch (error) {
        console.error(error);
      }
    };
    submitMessage();
  };

  // useEffect(() => {
  //   console.log("use Effect triggered");
  //   const getMessage = async () => {
  //     try {
  //       const messageFromDb = await fetchMessage(
  //         postedMessage.messageId,
  //         password
  //       );
  //       setFetchedMessage(messageFromDb);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   if (postedMessage) {
  //     console.log("fetching Message");
  //     getMessage();
  //   }
  // }, [postedMessage]);
  return (
    <>
      <section className="CreateMessage relative">
        <header>
          <h2 className="font-heading font-bold text-secondary">
            Create a Message
          </h2>
        </header>
        {!postedMessage && (
          <MessageForm
            password={password}
            setPassword={setPassword}
            message={message}
            setMessage={setMessage}
            submitMessage={submitMessage}
          />
        )}
        {postedMessage && (
          <>
            <h2>Success</h2>
            <p>Your message was encrypted and created</p>
            <OutputField
              label="Link to view message"
              value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/${
                postedMessage.messageId
              }`}
            />
            <OutputField
              label="Share Link with Password"
              value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/${
                postedMessage.messageId
              }#${postedMessage.messagePassword}`}
            />
            <OutputField
              label="Edit Link"
              value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/edit/${
                postedMessage.editId
              }`}
            />
          </>
        )}
      </section>
    </>
  );
}

export default CreateMessage;
