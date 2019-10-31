module.exports = {
	types: [
		{ value: 'feat', name: 'feat:     开发功能' },
		{ value: 'fix', name: 'fix:      修复bug' },
		{ value: 'docs', name: 'docs:     文档更新' },
		{ value: 'perf', name: 'perf:     代码重构' },
		{ value: 'revert', name: 'revert:   回滚提交' },
		{ value: 'test', name: 'test:     测试相关' },
		{ value: 'chore', name: 'chore:    构建流程' }
	],
	// override the messages, defaults are as follows
	messages: {
		type: "Select the type of change that you're committing:",
		// used if allowCustomScopes is true
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: 'List any BREAKING CHANGES (optional):\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?'
	},

	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix'],

	// limit subject length
	subjectLimit: 100
};
