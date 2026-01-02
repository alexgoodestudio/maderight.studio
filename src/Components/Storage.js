import { Helmet } from 'react-helmet-async';
import Opener from "./Opener";
import FeaturedNew from "./FeaturedNew";
import  Info  from './Info';
import Services from "./Services"
import Nav from "./Nav";
import Contact from "./Contact";
import Stats from "./Stats";
import Mission from './Mission';
// import Playground from "./Playground"
// import PlaygroundNew from "./PlaygroundNew"
// import Shapes from './Shapes';
import Office from './Office';
import NavBanner from './NavBanner';

function Storage(){
    const siteUrl = "https://maderight.studio";
    const pageTitle = "Made Right Studio — Web Design & Development Studio Columbia SC";
    const pageDescription = "Made Right Studio is a creative web design and development studio in Columbia, South Carolina. We build custom websites, web applications, and digital experiences for progressive small businesses.";
    const ogImage = `${siteUrl}/og-image.png`;

    return(
        <>
            <Helmet>
                {/* Primary Meta Tags (overrides index.html fallbacks) */}
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={siteUrl} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Made Right Studio" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={siteUrl} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={ogImage} />
                
                {/* Additional SEO */}
                <meta name="author" content="Made Right Studio" />
                <meta name="keywords" content="Made Right Studio web design, Made Right Studio web development, web design studio Columbia SC, web development Columbia South Carolina, custom website design, React development, design studio South Carolina" />

                {/* Brand Disambiguation */}
                <meta name="classification" content="Web Design and Development Studio" />
                <meta name="category" content="Professional Services, Web Design, Technology" />
                
                {/* Structured Data - Organization */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Made Right Studio",
                        "alternateName": "Made Right Studio Web Design",
                        "description": "Independent web design and technology studio specializing in modular design systems for progressive small businesses",
                        "url": siteUrl,
                        "logo": `${siteUrl}/logo.svg`,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Columbia",
                            "addressRegion": "SC",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "34.0007",
                            "longitude": "-81.0348"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "areaServed": "US"
                        }
                    })}
                </script>
                
                {/* Structured Data - Professional Service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Made Right Studio",
                        "image": ogImage,
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Columbia",
                            "addressRegion": "SC",
                            "addressCountry": "US"
                        },
                        "description": pageDescription,
                        "url": siteUrl,
                        "serviceType": ["Web Design", "Web Development", "Custom Websites"],
                        "areaServed": {
                            "@type": "State",
                            "name": "South Carolina"
                        }
                    })}
                </script>

                {/* Structured Data - WebSite */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Made Right Studio",
                        "url": siteUrl,
                        "description": pageDescription
                    })}
                </script>
            </Helmet>
            
            <div className="bg-white">
                <section>
                    
                    <Nav/>
                    <Opener/>
                    <FeaturedNew/>
                    <Mission/>
                    <Services/>
                    {/* <Shapes/> */}
                    <Info/>
                    <Office/>
                    <Stats/>
                    {/* <Playground/> */}
                    {/* <PlaygroundNew/> */}
                    <Contact/>
                    <NavBanner/>

                </section>
            </div>
        </>
    )
}

export default Storage;