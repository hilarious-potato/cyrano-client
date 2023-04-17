import { Routes, Route } from "react-router-dom";
import Message from "./views/Message";
import Header from "./components/Header";
import Home from "./Views/Home";
import SignupView from "./Views/SignupView";
function App() {
  return (
    <div className="App h-screen w-screen bg-gray-800 text-gray-200">
      <Header />
      <main className="px-16 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/messages/:messageId" element={<Message />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
