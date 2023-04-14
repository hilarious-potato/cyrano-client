import { useState } from "react";
import axios from "axios";
import Inputfield from "../components/Inputfield";

const Home = () => {
  const [encryptedContent, setMessage] = useState("");

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const baseURL =
      import.meta.env.VITE_APP_SERVER_URL || "http://localhost:5005";
    axios
      .post(import.meta.env.VITE_APP_SERVER_URL + "/api/messages/", {
        encryptedContent,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
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
        <Inputfield
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
        <button className="font-body text-warning" type="submit">
          create
        </button>
      </form>
    </section>
  );
};

export default Home;
