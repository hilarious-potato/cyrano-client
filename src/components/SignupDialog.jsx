import { useState } from "react";
import Dialog from "./Dialog";
import Inputfield from "./Inputfield";
import Form from "./Form";
import axios from "axios";

const SignupDialog = (props) => {
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
    <Dialog
      id={props.id}
      open={props.open}
      toggle={props.toggle}
      title="create an account"
    >
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
    </Dialog>
  );
};

export default SignupDialog;
