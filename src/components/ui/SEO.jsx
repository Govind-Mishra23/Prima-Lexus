// SEO Component for meta tags using react-helmet-async
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'Prima Lexus',
    description = 'Prima Lexus - Leading law firm in Delhi NCR providing comprehensive legal services across civil, criminal, family, property, and corporate matters. 15+ years of excellence.',
    keywords = 'lawyer delhi, advocate delhi ncr, law firm india, legal services, civil lawyer, criminal lawyer, family lawyer, property lawyer',
    image = '/og-image.jpg',
    url,
    type = 'website'
}) => {
    const siteTitle = 'Prima Lexus | Advocates & Consultants';
    const fullTitle = title === 'Prima Lexus' ? siteTitle : `${title} | Prima Lexus`;

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
            <meta property="og:image" content={image} />
            {url && <meta property="og:url" content={url} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content="Prima Lexus" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Delhi NCR" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
