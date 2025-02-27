import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'QToolsLib',
      fileName: (format) => `q-tools-lib.${format}.js`,
    },
    rollupOptions: {
      external: [], // 添加需要外部化的依赖
      output: {
        globals: {}, // 为外部化的依赖提供全局变量
      },
    },
  },
});
