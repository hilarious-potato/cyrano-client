import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./views/Home";
import ReadMessage from "./views/ReadMessage";
import EditMessage from "./views/EditMessage";
import SignupDialog from "./components/SignupDialog";
import LoginDialog from "./components/LoginDialog";
import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import Tresors from "./views/Tresors";
import Tresor from "./views/Tresor";
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
    <div className="App fixed h-screen w-screen overflow-auto bg-gray-800 pb-16 font-body text-gray-200">
      <MainHeader toggleSignup={toggleSignup} toggleLogin={toggleLogin} />
      <main className="flex w-full justify-center overflow-auto px-4 md:px-8 xl:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages/edit/:editId" element={<EditMessage />} />
          <Route path="/messages/:messageId" element={<ReadMessage />} />
          <Route path="/tresors" element={<Tresors />} />
          <Route path="/tresors/:tresorId" element={<Tresor />} />
        </Routes>
      </main>
      <SignupDialog id="signup" open={signupIsOpen} toggle={toggleSignup} />
      <LoginDialog id="login" open={loginIsOpen} toggle={toggleLogin} />
    </div>
  );
}

export default App;
