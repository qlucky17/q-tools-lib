export default {
  semi: true, // 结尾使用分号
  singleQuote: true, // 使用单引号
  printWidth: 100, // 超过100个字符换行
  trailingComma: 'es5', // 在多行逗号分隔的语法结构中，尽可能打印末尾逗号。(例如:单行数组的末尾永远不会有逗号)，对象或数组末尾加逗号
  proseWrap: 'never', // 换行。always：超过printWidth就换行，never：不换行，preserve：按照原样处理
  endOfLine: 'auto', // 行尾换行格式
  htmlWhitespaceSensitivity: 'ignore', // html中的空格敏感性:"css"- 遵守CSS display属性的默认值;"strict" - 空格被认为是敏感的;"ignore" - 空格被认为是不敏感的
  vueIndentScriptAndStyle: true, // 给vue中的 <script> and <style>标签加缩进
};
