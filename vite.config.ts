import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'impossible98/press-slash-to-search',
        match: ['https://search.bilibili.com/all*', 'https://www.douyin.com/*'],
        name: 'Press Slash to Search',
        description: 'After pressing slash, you can enter the search input',
        author: 'impossible98',
        license: 'MIT',
        version: '0.1.0',
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr(
            'ReactDOM',
            'umd/react-dom.production.min.js',
          ),
        },
      },
    }),
  ],
});
