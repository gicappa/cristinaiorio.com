import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      build: {
        outDir: 'dist',
        emptyOutDir: true
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // import.meta.dirname, not __dirname: this config is ESM, and Vite's
          // native config loader cannot shim the CJS global.
          '@': path.resolve(import.meta.dirname, '.'),
        }
      }
    };
});
