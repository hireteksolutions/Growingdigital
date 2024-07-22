const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Define your URLs
const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/partner', changefreq: 'weekly', priority: 0.8 },
    { url: '/Service', changefreq: 'weekly', priority: 0.8 },
    { url: '/campage-design', changefreq: 'weekly', priority: 0.8 },
    { url: '/social-media', changefreq: 'weekly', priority: 0.8 },
    { url: '/linkedin-optimization', changefreq: 'weekly', priority: 0.8 },
    { url: '/design-service', changefreq: 'weekly', priority: 0.8 },
    { url: '/brand-building', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'weekly', priority: 0.8 },
    { url: '/password-reset', changefreq: 'weekly', priority: 0.8 },
    { url: '/blogs', changefreq: 'weekly', priority: 0.8 },
    { url: '/upload', changefreq: 'weekly', priority: 0.8 },
    { url: '/web-development', changefreq: 'weekly', priority: 0.8 },
    { url: '/seo-alchemy', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact-details', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog/:slug', changefreq: 'weekly', priority: 0.8 },
    { url: '*', changefreq: 'weekly', priority: 0.5 },

];

// Create a sitemap stream and pipe it to a file
const sitemapPath = resolve('./public/sitemap.xml');
const stream = new SitemapStream({ hostname: 'https://www.growingdigital.in' });
const writeStream = createWriteStream(sitemapPath);

// Use streamToPromise to ensure the stream is completed
streamToPromise(stream)
    .then(() => console.log('Sitemap created successfully!'))
    .catch(err => console.error(err));

// Pipe the sitemap stream to the write stream
stream.pipe(writeStream);

// Write URLs to the sitemap
links.forEach(link => stream.write(link));

// End the sitemap stream
stream.end();
