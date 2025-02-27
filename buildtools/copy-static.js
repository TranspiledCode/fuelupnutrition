const fs = require('fs-extra');
const path = require('path');

async function copyStaticFiles() {
  try {
    // Ensure dist directory exists
    await fs.ensureDir('dist');

    // Copy robots.txt
    await fs.copy(
      path.join(__dirname, '../public/robots.txt'),
      path.join(__dirname, '../dist/robots.txt')
    );

    // Copy sitemap.xml
    await fs.copy(
      path.join(__dirname, '../public/sitemap.xml'),
      path.join(__dirname, '../dist/sitemap.xml')
    );

    console.log('✅ Static files copied successfully!');
  } catch (err) {
    console.error('❌ Error copying static files:', err);
    process.exit(1);
  }
}

copyStaticFiles();
