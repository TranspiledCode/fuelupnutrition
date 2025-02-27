// buildtools/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Your site's base URL
const SITE_URL = 'https://fuelupnutritionboise.com';

// Add your dynamic routes/pages here
const pages = [{ url: '/', changefreq: 'weekly', priority: 1 }];

async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: SITE_URL });

    // Pipe the pages into the stream
    const data = Readable.from(pages).pipe(stream);

    // Convert stream to XML string
    const sitemap = await streamToPromise(data);

    // Write the sitemap to the public directory
    fs.writeFileSync(
      path.join(__dirname, '../public/sitemap.xml'),
      sitemap.toString(),
    );

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
