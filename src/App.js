import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
