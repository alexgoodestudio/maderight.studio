import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from './data/blogData'
import Nav from "./Nav";
import Contact from "./Contact";  


const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};
  const handleContactClick = () => {
    // Opens email app with prefilled "to" address
    window.location.href = "mailto:alexgoode2@gmail.com";
  };

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    if (!prefersReducedMotion && post) {
      const tl = gsap.timeline();
      
      tl.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      tl.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      }, '-=0.3');
    }
  }, { scope: containerRef, dependencies: [post] });

  const handleLinkClick = (href) => {
    window.location.href = href;
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div ref={containerRef} className="bg-slate-50 min-vh-100">
      <Nav/>
      <Helmet>
        <title>{post.title} | Made Right Studio</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta name="author" content={post.author} />
      </Helmet>
      
      <article className="container py-5">
        
        {/* Breadcrumb Navigation */}
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="list-unstyled d-flex align-items-center gap-2 mb-0">
                <li>
                  <a 
                    href="/" 
                    className="text-slate-600 text-sm text-decoration-none blog-breadcrumb-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/');
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="text-slate-400 text-sm">/</li>
                <li>
                  <a 
                    href="/blog" 
                    className="text-slate-600 text-sm text-decoration-none blog-breadcrumb-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/blog');
                    }}
                  >
                    Blog
                  </a>
                </li>
                <li className="text-slate-400 text-sm">/</li>
                <li className="text-slate-900 text-sm fw-medium">Article</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="row mb-5" ref={headerRef}>
          <div className="col-lg-10 col-xl-8 mx-auto">
            
            {/* Metadata */}
            <div className="d-flex align-items-center gap-4 mb-4">
              <div className="d-flex align-items-center gap-2">
                <Calendar size={14} className="text-slate-400" />
                <time 
                  dateTime={post.date}
                  className="text-sm text-slate-500"
                >
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              <div className="d-flex align-items-center gap-2">
                <User size={14} className="text-slate-400" />
                <span className="text-sm text-slate-500">{post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl text-slate-900 fw-bold mb-0">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Article Content */}
        <div className="row" ref={contentRef}>
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="row mt-5 pt-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 pt-4 blog-post-footer">
              <a 
                href="/blog" 
                className="d-inline-flex align-items-center gap-2 text-slate-600 text-sm fw-medium text-decoration-none blog-back-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/blog');
                }}
              >
                <ArrowLeft size={16} />
                <span>Back to all articles</span>
              </a>
              
        <button
          onClick={handleContactClick}
          className="btn-contact bg-slate-900 px-4 py-2 text-sm text-white rounded-lg"
        >
          Contact Us
        </button>
            </div>
          </div>
        </footer>

      </article>
      <Contact/>
    </div>
  );
}

export default BlogPost;