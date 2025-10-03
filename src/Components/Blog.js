import { useRef, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from './data/blogData';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Blog() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const postsRef = useRef([]);
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    if (!prefersReducedMotion) {
      const tl = gsap.timeline();
      
      tl.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      tl.from(postsRef.current, {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1
      }, '-=0.3');
    }
  }, { scope: containerRef });

  const handleLinkClick = (href) => {
    window.location.href = href;
  };

  return (
    <div ref={containerRef} className="bg-slate-50 min-vh-100">
      {/* <Helmet>
        <title>Made Right Studio | Our Blog</title>
        <meta name="description" content="Insights and resources for small businesses looking to enhance their online presence through effective web design and SEO strategies." />
      </Helmet> */}
      
      <div className="container py-5">
        
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
                <li className="text-slate-900 text-sm fw-medium">Blog</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Header Section */}
        <div className="row mb-5 pb-4" ref={headerRef}>
          <div className="col-lg-8">
            <h1 className="text-6xl text-slate-900 text-start fw-bold mb-3">
              Made Right Studio 
            </h1>
            <p className="text-lg text-start text-slate-600 mb-0">
              Insights and resources for small businesses looking to enhance their online presence through effective web design and SEO strategies.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="col-12"
              ref={el => postsRef.current[index] = el}
            >
              <article className="bg-white rounded overflow-hidden blog-post-card">
                <div className="row g-0">
                  
                  {/* Content Side */}
                  <div className="col-lg-12 p-5">
                    
                    {/* Metadata */}
                    <div className="d-flex align-items-center gap-4 mb-3">
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
                    <h2 className="text-3xl text-slate-900 fw-semibold mb-3">
                      <a 
                        href={`/blog/${post.slug}`}
                        className="text-decoration-none text-slate-900 blog-title-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(`/blog/${post.slug}`);
                        }}
                      >
                        {post.title}
                      </a>
                    </h2>

                    {/* Description */}
                    <p className="text-md text-slate-600 mb-4">
                      {post.description}
                    </p>

                    {/* Read More Link */}
                    <a 
                      href={`/blog/${post.slug}`}
                      className="d-inline-flex align-items-center gap-2 text-slate-900 text-sm fw-semibold text-decoration-none blog-read-more"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/blog/${post.slug}`);
                      }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} className="blog-arrow" />
                    </a>

                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Blog;