import { Routes, Route } from "react-router-dom";
import Storage from "./Components/Storage";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Storage />} />
    </Routes>
  );
}

export default WebRoutes;
