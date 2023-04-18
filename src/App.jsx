import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import ReadMessage from "./views/ReadMessage";
function App() {
  return (
    <div className="App relative h-screen w-screen overflow-auto bg-gray-800 pb-16 font-body text-gray-200">
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
