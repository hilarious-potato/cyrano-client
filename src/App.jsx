import { Routes, Route } from "react-router-dom";
import Message from "./Views/Message";
import Header from "./components/Header";
import Home from "./Views/Home";

function App() {
  return (
    <div className="App h-screen w-screen bg-gray-800 text-gray-200">
      <Header />
      <main className="px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages/:messageId" element={<Message />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
