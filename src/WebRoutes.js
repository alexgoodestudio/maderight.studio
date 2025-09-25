import { Routes, Route } from "react-router-dom";
import Storage from "./Components/Storage";
import OurProcess from "./Components/OurProcess";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Storage />} />
      <Route path="/process" element={<OurProcess />} />
    </Routes>
  );
}

export default WebRoutes;
