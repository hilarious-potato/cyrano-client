import { useState } from "react";
import postMessage from "../utils/postMessage";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
// import Inputfield from "../components/Inputfield";
// import Textarea from "../components/Textarea";

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
        <h2 className="font-heading font-bold text-secondary">
          Create a Message
        </h2>
      </header>
      <form onSubmit={(e) => onSubmit(e)}>
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
        <div className="button-container absolute right-0">
          <Button className="mr-2" type="reset" secondary>
            reset
          </Button>
          <Button type="submit" primary>
            submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Home;
