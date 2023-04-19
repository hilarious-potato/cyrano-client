import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./views/Home";
import ReadMessage from "./views/ReadMessage";
function App() {
  return (
    <div className="App relative h-screen w-screen bg-gray-800 pb-16 font-body text-gray-200">
      <MainHeader />
      <main className="flex w-full justify-center overflow-auto px-4 md:px-8 xl:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages/:messageId" element={<ReadMessage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
