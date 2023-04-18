import { Route, Routes } from "react-router-dom";
import ReadMessage from "./Views/readMessage";
import Header from "./components/Header";
import Home from "./views/Home";

function App() {
  return (
    <div className="App h-screen w-screen bg-gray-800 text-gray-200">
      <Header />
      <main className="px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages/:messageId" element={<ReadMessage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
