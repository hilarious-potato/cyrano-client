import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Message from "./views/Message";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages/:messageId" element={<Message />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
