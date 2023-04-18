import { useContext, useState } from "react";
import Button from "./Button";
import SignupDialog from "./SignupDialog";
import LoginDialog from "./LoginDialog";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

const Header = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const toggleSignup = () => {
    setSignupIsOpen((prevState) => !prevState);
  };
  const toggleLogin = () => {
    setLoginIsOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logOutUser();
  };

  return (
    <header className="sticky top-0 z-10 flex items-baseline justify-between bg-gray-800/25 px-16 py-4 backdrop-blur-sm">
      <Link to="/">
        <h1 className="font-body text-4xl italic text-primary">cyrano</h1>
      </Link>

      <div>
        {!isLoggedIn && (
          <>
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
          </>
        )}
        {isLoggedIn && (
          <Button
            onClick={() => {
              handleLogout();
            }}
          >
            logout
          </Button>
        )}
      </div>
      <SignupDialog id="signup" open={signupIsOpen} toggle={toggleSignup} />
      <LoginDialog id="login" open={loginIsOpen} toggle={toggleLogin} />
    </header>
  );
};

export default Header;
