export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('init')], // 提交过程中忽略有init的字符串
  rules: {
    // 提交类型必须在指定的数组中
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修补bug
        'perf', // 优化相关，比如提升性能、体验
        'style', // 代码格式修改, 注意不是css修改
        'revert', // 代码回滚
        'config', // 配置修改
        'docs', // 文档修改
        'test', // 测试用例修改
        'ci', // 持续集成修改
        'chore', // 其他改动
        'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        'refactor', // 重构
      ],
    ],
    'type-empty': [2, 'never'], // 提交类型不能为空
    'type-case': [2, 'always', 'lower-case'], // 提交类型必须是小写
    'scope-empty': [0, 'never'], // 作用域允许为空
    'scope-case': [0], // 不限制作用域大小写
    'subject-empty': [2, 'never'], // 主题不能为空
    'subject-case': [0], // 不限制主题大小写
    'header-max-length': [2, 'always', 80], // 标题最大字符数限制(包括<type>(<scope>): <subject>)
    'body-leading-blank': [2, 'always'], // 正文前必须有一个空格
    'body-max-line-length': [2, 'always', 10], // 正文每行的最大字符数限制
    'footer-leading-blank': [2, 'always'], // 脚注前必须有一个空格
    'footer-max-line-length': [2, 'always', 10], // 脚注每行的最大字符数限制
  },
};

// 一个规范的提交信息通常分为三部分：
// 1. 标题header：
//   <type>(<scope>): <subject>
// 2. 正文body(可选)：
//   <空行>
//   <body>
// 3. 脚注footer(可选)：
//   <空行>
//   <footer>
