import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
