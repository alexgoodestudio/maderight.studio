import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Storage from "./Components/Storage";
import OurProcess from "./Components/OurProcess";
import Blog from "./Components/Blog";
import BlogPost from "./Components/BlogPost";
import About from "./Components/About";
import Team from "./Components/Team";
import Shapes from "./Components/Shapes";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Also scroll after a brief delay to ensure DOM is ready (especially on mobile)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);
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
        <Route path="/shapes" element={<Shapes />} />
      </Routes>
    </>
  );
}

export default WebRoutes;