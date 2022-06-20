const { config } = require('./config')
const createApp = require('./app')

const app = createApp()

app.listen(config.port, (err) => {
   console.log(`Server running on port ${config.port}`)
   if (err) {
      console.error('Error: ', err)
   }
})
