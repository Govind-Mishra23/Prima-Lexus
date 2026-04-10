// SEO Component for meta tags and structured data using react-helmet-async
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title = "Prima Lexus",
  description = "Prima Lexus - Leading law firm in Delhi NCR providing comprehensive legal services across civil, criminal, family, property, and corporate matters. 15+ years of excellence.",
  keywords = "lawyer delhi, advocate delhi ncr, law firm india, legal services, civil lawyer, criminal lawyer, family lawyer, property lawyer",
  image = "/og-image.jpg",
  url,
  type = "website",
  noindex = false,
  schema,
}) => {
  const { pathname } = useLocation();
  const siteUrl = "https://primalexus.com";
  const siteTitle = "Prima Lexus | Advocates & Consultants";
  const fullTitle =
    title === "Prima Lexus" ? siteTitle : `${title} | Prima Lexus`;
  const canonicalUrl = url || `${siteUrl}${pathname}`;
  const absoluteImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Prima Lexus" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:site" content="@primalexus" />

      {/* Additional SEO */}
      <meta name="robots" content={robotsContent} />
      <meta name="language" content="English" />
      <meta name="author" content="Prima Lexus" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi NCR" />
      <link rel="canonical" href={canonicalUrl} />

      {schemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
