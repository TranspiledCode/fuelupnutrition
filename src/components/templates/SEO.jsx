// src/components/templates/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

import PropTypes from 'prop-types';

const SEO = ({
  title = 'Fuel Up Nutrition Boise',
  description = 'Fuel Up Nutrition Boise',
  canonical,
  ogImage = '',
  ogType = 'website',
  noindex = false,
  keywords = '',
}) => {
  const siteUrl = 'https://fuelupnutritionboise.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Transpiled" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
  twitterCreator: PropTypes.string,
  noindex: PropTypes.bool,
  keywords: PropTypes.string,
};

export default SEO;
