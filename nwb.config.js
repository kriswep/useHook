module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'useHooks',
      externals: {
        react: 'React'
      }
    }
  }
}
