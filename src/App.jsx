import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import ReadMessage from "./views/ReadMessage";
console.log(import.meta.env.DEPLOY_PRIME_URL);
console.log(import.meta.env.URL);

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
