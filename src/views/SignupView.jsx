import { useState } from "react";
import Inputfield from "../components/Inputfield";
import Form from "../components/Form";
import axios from "axios";

const SignupView = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(user);

    const baseURL =
      import.meta.env.VITE_APP_SERVER_URL || "http://localhost:5005";

    axios
      .post(baseURL + "/auth/signup", user)
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="Signup relative">
      <header>
        <h2 className="font-heading font-bold text-secondary">
          create an account
        </h2>
      </header>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Inputfield
          className=""
          name="name"
          value={user.name}
          onChange={(e) => onChange(e)}
          label="user name"
          type="text"
          placeholder="choose a user name"
          required
        />
        <Inputfield
          className=""
          name="email"
          value={user.email}
          onChange={(e) => onChange(e)}
          label="email"
          type="email"
          placeholder="provide an email address"
          required
        />
        <Inputfield
          className=""
          name="password"
          value={user.password}
          onChange={(e) => onChange(e)}
          label="password"
          type="password"
          placeholder="provide a password"
          required
        />
      </Form>
    </section>
  );
};

export default SignupView;
