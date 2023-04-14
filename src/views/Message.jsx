import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Message = () => {
  const { messageId } = useParams();
  const [message, setMessage] = useState(null);

  const loadMessage = () => {
    const baseURL =
      import.meta.env.VITE_APP_SERVER_URL || "http://localhost:5005";
    axios
      .get(baseURL + "/api/messages/" + messageId)
      .then((response) => {
        console.log("response: ", response);
        setMessage(response.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    loadMessage();
  }, [messageId]);

  const renderMessage = () => {
    return <article>Message: {message.encryptedContent}</article>;
  };

  return <div>{message ? renderMessage() : <Spinner />}</div>;
};

export default Message;
