import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Message from "./views/Message";
import Header from "./components/Header";

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
