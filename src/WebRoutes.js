import { Routes, Route } from "react-router-dom";
import Storage from "./Components/Storage";
import OurProcess from "./Components/OurProcess";
import Blog from "./Components/Blog";
import BlogPost from "./Components/BlogPost";
import About from "./Components/About";
import Team from "./Components/Team";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Storage />} />
      <Route path="/our-process" element={<OurProcess />} />
      <Route path="/about" element={<About/>}/>
      <Route path="team" element={<Team/>}/>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default WebRoutes;
