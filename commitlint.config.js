module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [2, 'always', /^(\w+)\s?:\s?\[#\d+\]\s?.+$/],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'refactor', 'style', 'design', 'chore', 'ci', 'perf', 'init'],
    ],
  },
}
