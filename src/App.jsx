import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./views/Home";
import ReadMessage from "./views/ReadMessage";
import EditMessage from "./views/EditMessage";
import SignupDialog from "./components/SignupDialog";
import LoginDialog from "./components/LoginDialog";
import CreateMessageDialog from "./components/CreateMessageDialog";
// import { useContext } from "react";
// import { AuthContext } from "./context/auth.context";
import Tresors from "./views/Tresors";
import Tresor from "./views/Tresor";
import CreateMessage from "./views/CreateMessage";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import Alert from "./components/Alert";

import MainFooter from "./components/MainFooter";
function App() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const toggleSignup = () => {
    setSignupIsOpen((prevState) => !prevState);
  };
  const toggleLogin = () => {
    setLoginIsOpen((prevState) => !prevState);
  };

  return (
    <div className="App fixed h-screen w-screen overflow-auto bg-gray-800  font-body text-gray-200 ">
      <MainHeader toggleSignup={toggleSignup} toggleLogin={toggleLogin} />
      <main className="mx-auto mt-4 h-full px-4 pb-16 md:w-4/5 md:px-8 lg:mt-12 lg:w-2/3 xl:w-1/2  xl:px-16 2xl:w-1/3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<CreateMessage />} />
          <Route path="/messages/edit/:editId" element={<EditMessage />} />
          <Route path="/messages/:messageId" element={<ReadMessage />} />
          <Route
            path="/tresors"
            element={
              <IsPrivate>
                <Tresors />
              </IsPrivate>
            }
          />
          <Route
            path="/tresors/:tresorId"
            element={
              <IsPrivate>
                <Tresor />
              </IsPrivate>
            }
          />
          <Route
            path="/*"
            element={<Alert message="404: Page not found ¯\_(ツ)_/¯" />}
          />
        </Routes>
      </main>
      <MainFooter />
      <SignupDialog id="signup" open={signupIsOpen} toggle={toggleSignup} />
      <LoginDialog id="login" open={loginIsOpen} toggle={toggleLogin} />
    </div>
  );
}

export default App;
