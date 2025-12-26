import { Helmet } from 'react-helmet-async';
import Opener from "./Opener";
import FeaturedNew from "./FeaturedNew";
import  Info  from './Info';
import Services from "./Services"
import Nav from "./Nav";
import Contact from "./Contact";
// import Stats from "./Stats";
import Mission from './Mission';
// import Playground from "./Playground"
// import PlaygroundNew from "./PlaygroundNew"
// import Shapes from './Shapes';
import Office from './Office';
import NavBanner from './NavBanner';

function Storage(){
    const siteUrl = "https://maderight.studio"; 
    const pageTitle = "Made Right Studio — Design-first technology studio";
    const pageDescription = "Independent creative web design and technology studio in Columbia, SC. ";
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
                <meta name="keywords" content="Web Design and Development in Columbia South Carolina " />
                
                {/* Structured Data - Organization */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Made Right Studio",
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
                        "serviceType": ["Web Design", "Web Development", "SEO", "Brand Identity"],
                        "areaServed": {
                            "@type": "State",
                            "name": "South Carolina"
                        }
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
                    {/* <Stats/> */}
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