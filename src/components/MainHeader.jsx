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
    <header className="sticky top-0 z-10 grid grid-cols-6 items-baseline gap-4 bg-gray-800/25 py-4 backdrop-blur-sm">
      <Link className="col-span-2" to="/">
        <h1 className="font-body text-4xl italic text-primary ">cyrano</h1>
      </Link>

      <Link className="order-3 col-span-3 col-start-4 grid" to="/write">
        <Button className="" primary>
          write a message
        </Button>
      </Link>

      {!isLoggedIn && (
        <div className="col-span-4 grid grid-cols-2 gap-2">
          <Button
            className=""
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
        </div>
      )}
      {isLoggedIn && (
        <>
          <Link className="order-2 col-span-3 grid" to="/tresors">
            <Button className="" secondary>
              your tresors
            </Button>
          </Link>
          <Button
            className="order-1 col-span-3 col-start-4 "
            onClick={() => {
              handleLogout();
            }}
          >
            logout
          </Button>
        </>
      )}
    </header>
  );
};

export default Header;
