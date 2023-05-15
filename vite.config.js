import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import * as path from 'path';

export default defineConfig({
  plugins: [solidPlugin({
    dev: true,
    ssr: true,
  })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'my-component',
      fileName: (format) => `my-component.${format}.js`
    },
  },
});
