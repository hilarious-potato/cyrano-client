import { useState } from "react";
import postMessage from "../utils/postMessage";

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
    <section className="Home">
      <header>
        <h2 className="body-font font-heading font-extrabold text-secondary">
          Create a Message
        </h2>
      </header>
      <form onSubmit={(e) => onSubmit(e)}>
        {/* <label htmlFor="encryptedContent">input message</label> */}
        <input
          name="encryptedContent"
          placeholder="say something …"
          value={encryptedContent}
          onChange={(e) => {
            onChange(e);
          }}
          type="text"
        />
        <button className="font-body text-warning" type="submit">
          create
        </button>
      </form>
    </section>
  );
};

export default Home;
