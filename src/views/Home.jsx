import { useState } from "react";
import postMessage from "../utils/postMessage";
import Textarea from "../components/Textarea";
import Form from "../components/Form";

const Home = () => {
  const [encryptedContent, setMessage] = useState("");
  const [password, setPassword] = useState("12345678");
  const onChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      postMessage(encryptedContent, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="Home relative">
      <header>
        <h2 className="font-heading text-xl font-bold text-secondary">
          Create a Message
        </h2>
      </header>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Textarea
          className="my-4"
          label="Message"
          name="encryptedContent"
          placeholder="say something …"
          value={encryptedContent}
          onChange={(e) => {
            onChange(e);
          }}
          type="text"
          required
        />
      </Form>
    </section>
  );
};

export default Home;
