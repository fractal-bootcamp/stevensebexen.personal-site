import { readdirSync, writeFileSync } from 'node:fs';

const urls = readdirSync('./public/img/art-gallery').map(fileName => `/img/art-gallery/${fileName}`);
writeFileSync('./app/data/imageUrls.json', JSON.stringify(urls));