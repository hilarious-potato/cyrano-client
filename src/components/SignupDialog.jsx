import { useContext, useState } from "react";
import Dialog from "./Dialog";
import Inputfield from "./Inputfield";
import Form from "./CustomForm";
// import axios from "axios";
import authService from "../services/auth.service";
import { AuthContext } from "../context/auth.context";

const SignupDialog = (props) => {
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const onChange = (event) => {
    setUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    authService
      .signup(user)
      .then((response) => {
        return authService.login({
          email: user.email,
          password: user.password,
        });
      })
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        props.toggle();
        resetForm();
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.error(err);
      });
  };

  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <Dialog
      id={props.id}
      open={props.open}
      toggle={props.toggle}
      title="create an account"
      message={error}
    >
      <Form onReset={() => resetForm()} onSubmit={(e) => onSubmit(e)}>
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
