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

  const onChange = (event) => {
    setUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(user);

    // const baseURL =
    //   import.meta.env.VITE_APP_SERVER_URL || "http://localhost:5005";

    // axios
    //   .post(baseURL + "/auth/signup", user)
    //   .then((result) => {
    //     console.log("result: ", result);
    //   })
    //   .catch((err) => console.error(err));

    authService
      .signup(user)
      .then((response) => {
        console.log(response.data);
        return authService.login({
          email: user.email,
          password: user.password,
        });
      })
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        props.toggle();
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
