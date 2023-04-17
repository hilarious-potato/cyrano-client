import { useState } from "react";
import Inputfield from "../components/Inputfield";
import Button from "../components/Button";
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
        <h2 className="font-body font-bold text-secondary">
          create an account
        </h2>
      </header>
      <form onSubmit={(e) => onSubmit(e)}>
        <Inputfield
          className="my-4"
          name="name"
          value={user.name}
          onChange={(e) => onChange(e)}
          label="user name"
          type="text"
          placeholder="choose a user name"
          required
        />
        <Inputfield
          className="my-4"
          name="email"
          value={user.email}
          onChange={(e) => onChange(e)}
          label="email"
          type="email"
          placeholder="provide an email address"
          required
        />
        <Inputfield
          className="my-4"
          name="password"
          value={user.password}
          onChange={(e) => onChange(e)}
          label="password"
          type="password"
          placeholder="provide a password"
          required
        />
        <div className="button-container absolute right-0">
          <Button className="mr-2" type="reset" secondary>
            reset secondary
          </Button>
          <Button type="submit" primary>
            submit primary
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SignupView;
