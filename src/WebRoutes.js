import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Storage from "./Components/Storage";
import OurProcess from "./Components/OurProcess";
import Blog from "./Components/Blog";
import BlogPost from "./Components/BlogPost";
import About from "./Components/About";
import Team from "./Components/Team";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function WebRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Storage />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/about" element={<About/>}/>
        <Route path="team" element={<Team/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default WebRoutes;