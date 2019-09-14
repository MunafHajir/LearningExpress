const express = require('express')
var morgan = require('morgan')
const app = express()
app.use(morgan('dev'))

//Config Imports
const config = Object.freeze(require('./config/local'))

//Routes Import
const exampleRoutes = require('./lib/endpoints/Examples/Routes');
app.set("port", config.http.port);

//Example Routes
app.use(exampleRoutes);

//Server Listening
app.listen(app.get('port'), 
    () => {
        console.log(`Server Lisening on port ${app.get('port')}`)
        console.log("----------PW SERVER STARTED---------------")  
    }
)