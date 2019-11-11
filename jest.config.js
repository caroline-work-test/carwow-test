module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '/__fixtures__'],
  "snapshotSerializers": ["enzyme-to-json/serializer"]
}