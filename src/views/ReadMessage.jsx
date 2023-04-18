import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import CustomForm from "../components/CustomForm";
import Inputfield from "../components/Inputfield";
import fetchMessage from "../utils/fetchMessage";

const ReadMessage = () => {
  console.log("WE Are in the read message comp");
  const { messageId } = useParams();
  console.log(messageId);
  const [message, setMessage] = useState("Enter Password and decrypt");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const fragment = window.location.hash;
    if (fragment) {
      setPassword(fragment.slice(1));
      console.log("first");
    }
  }, []);
  console.log("Password:", password);

  const renderMessage = () => {
    return <article>{message}</article>;
  };
  const getMessage = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      console.log("Lets get the message");
      const messageFromDb = await fetchMessage(messageId, password);
      console.log(messageFromDb);
      setMessage(messageFromDb);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CustomForm onSubmit={(e) => getMessage(e)}>
        <Inputfield
          className="my-4"
          label="Password"
          name="password"
          placeholder={password}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </CustomForm>

      {message ? renderMessage() : <Spinner />}
    </div>
  );
};

export default ReadMessage;
