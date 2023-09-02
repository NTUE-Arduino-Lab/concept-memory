module.exports = {
    apps: [
      {
        name: 'Memory',
        port: '8080',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }