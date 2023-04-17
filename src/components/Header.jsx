import { useState } from "react";
import Button from "./Button";
import SignupDialog from "./SignupDialog";
import LoginDialog from "./LoginDialog";
import { Link } from "react-router-dom";

const Header = () => {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const toggleSignup = () => {
    setSignupIsOpen((prevState) => !prevState);
  };
  const toggleLogin = () => {
    setLoginIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex items-baseline justify-between px-16 py-4">
      <Link to="/">
        <h1 className="font-body text-4xl italic text-primary">cyrano</h1>
      </Link>
      <div>
        <Button
          className="mr-2"
          onClick={() => {
            toggleSignup();
          }}
        >
          register
        </Button>
        <Button
          onClick={() => {
            toggleLogin();
          }}
        >
          login
        </Button>
      </div>
      <SignupDialog id="signup" open={signupIsOpen} toggle={toggleSignup} />
      <LoginDialog id="login" open={loginIsOpen} toggle={toggleLogin} />
    </header>
  );
};

export default Header;
