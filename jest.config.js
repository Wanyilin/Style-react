module.exports = {
	roots: ['<rootDir>'],
	modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: [
		"<rootDir>/build/",
		"<rootDir>/node_modules/",
	],
	moduleNameMapper: {
		'.*\\.(css|scss|sass)$': '<rootDir>/tests/cssModule.js',
	},
	setupFilesAfterEnv: [`<rootDir>/tests/jest.setup.js`],
	testEnvironment: 'jsdom',
  moduleFileExtensions: ["js", "jsx"]
}