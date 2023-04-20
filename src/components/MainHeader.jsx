import { useContext, useState } from "react";
import Button from "./Button";

import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

const Header = (props) => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser();
  };

  return (
    <header className="sticky top-0 z-10 flex items-baseline justify-between bg-gray-800/25 px-4 py-4 backdrop-blur-sm md:px-8 xl:px-16">
      <Link to="/">
        <h1 className="font-body text-4xl italic text-primary">cyrano</h1>
      </Link>

      <div>
        {!isLoggedIn && (
          <>
            <Button
              className="mr-2"
              onClick={() => {
                props.toggleSignup();
              }}
            >
              register
            </Button>
            <Button
              onClick={() => {
                props.toggleLogin();
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

        <Button className="mr-4" primary>
          <Link to="/write">write a message</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
