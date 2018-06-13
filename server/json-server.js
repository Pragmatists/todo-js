const jsonServer = require('json-server')
const server = jsonServer.create()
const middleware = jsonServer.defaults()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(middleware)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})