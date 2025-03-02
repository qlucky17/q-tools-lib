import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  /** 忽略文件 */
  {
    ignores: ['node_modules', 'dist', 'bin', 'public', '.husky', '.vscode', '.DS_Store'],
  },
  /** 全局变量 */
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  /** js推荐配置 https://eslint.nodejs.cn/docs/latest/rules/ */
  eslint.configs.recommended,
  /** ts推荐配置 https://typescript-eslint.io/rules/ */
  ...tseslint.configs.recommended,
  /** vue推荐配置 https://eslint.vuejs.org/rules/ */
  ...eslintPluginVue.configs['flat/recommended'],
  /** javascript规则 */
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,vue}'],
    ignores: ['**/*.config.js'],
    rules: {
      'no-use-before-define': 'off', // 禁止在定义变量之前使用变量
      'use-isnan': 'off', // 检查 NaN 时需要调用 isNaN()
    },
  },
  /** vue规则 */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'vue/singleline-html-element-content-newline': ['off'], // 关闭标签内容另起一行的要求
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
      'vue/comment-directive': 'off', // 关闭 index.html 文件报 clear 错误
      'vue/valid-define-props': 'off', // 关闭对 defineProps 的有效性检查
      'vue/one-component-per-file': 'off', // 允许在一个文件中定义多个组件
      'vue/require-prop-types': 'off', // 关闭 Prop 类型要求的警告
      'vue/attributes-order': 'off', // 关闭属性顺序要求
      'vue/require-default-prop': 'off', // 关闭对默认 Prop 的要求
      'vue/attribute-hyphenation': 'off', // 关闭连字符命名检验
      'vue/html-self-closing': 'off', // 关闭自闭合标签的要求
      'vue/no-v-html': 'off', // 允许使用 v-html 指令
    },
  },
  /** prettier配置 解决prettier和eslint规则冲突, 插件会合并根目录下的prettier配置文件, 冲突时优先使用prettier */
  eslintPluginPrettierRecommended,
];
