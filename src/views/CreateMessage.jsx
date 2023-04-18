import { useEffect, useState } from "react";
import postMessage from "../utils/postMessage";
import generatePassword from "../utils/generatePassword";
import MessageForm from "../components/MessageForm";
import Outputfield from "../components/Outputfield";
import Header from "../components/Header";
import Button from "../components/Button";

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

  return (
    <>
      <section className="CreateMessage xxl:w-1/3 relative lg:w-2/3">
        <Header title="Create a Message" />
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
            <div className="my-6 rounded-lg border border-gray-400 p-4">
              <h3 className="mb-2 text-lg italic">
                🎉 success, your message was encrypted and created
              </h3>
              <p>
                now you can copy the links and share your message with the
                world!
              </p>
            </div>
            <Outputfield
              type="link"
              label="Link to view message"
              value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/${
                postedMessage.messageId
              }`}
            />
            <Outputfield
              type="link"
              label="Share Link with Password"
              value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/${
                postedMessage.messageId
              }#${postedMessage.messagePassword}`}
            />
            <Outputfield
              type="link"
              label="Edit Link"
              value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/edit/${
                postedMessage.editId
              }`}
            />
            <div className="grid justify-end">
              <Button
                onClick={() => {
                  setMessage("");
                  setPostedMessage(null);
                  setPassword(generatePassword());
                }}
                primary
              >
                new message
              </Button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default CreateMessage;
