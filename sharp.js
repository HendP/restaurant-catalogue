// eslint-disable-next-line import/no-extraneous-dependencies
import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { resolve } from 'path';

const target = resolve(__dirname, 'src/public/images/heros');
const destination = resolve(__dirname, 'dist/images');

if (!existsSync(destination)) {
  mkdirSync(destination);
}

readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(
      resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ),
    );

  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      resolve(
        __dirname,
        // eslint-disable-next-line function-paren-newline
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ),
    );
});
