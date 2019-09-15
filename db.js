const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myPW';

mongoose.connect(url, { useNewUrlParser: true });

const dbCon = () => {
    const db = mongoose.connection;

    return new Promise((resolve, reject)=>{

        db.on('error', console.error.bind(console, 'Connection Error'));
        
        db.on('error', ()=>{
            reject('Error in DB Connection');
        });

        db.once('open', function callback () {
            console.log("Connection Open")
            resolve(dbCon);
        });
    })
}

module.exports = dbCon;