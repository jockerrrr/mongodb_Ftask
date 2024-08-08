const mongodb = require("mongodb")
const mongoclient = mongodb.MongoClient
const connectionUrl = "mongodb://127.0.0.1:27017"
const dbname = "task-1"
mongoclient.connect(connectionUrl, (error, data) => {
    if (error) {
        console.log("error")
    }
    console.log("NO ERRORS")
    const db = data.db(dbname)
    db.collection('users').insertOne({
        name: "Rahul",
        age: 30
    }, (error, data) => {
        if (error) {
            console.log("error")
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertOne({
        name: "beso",
        age: 21
    }, (error, data) => {
        if (error) {
            console.log("error")
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertMany([
        {
            name: "saly",
            age: 27
        },
        {
            name: "nany",
            age: 27
        },
        {
            name: "hany",
            age: 27
        },
        {
            name: "shady",
            age: 27
        },
        {
            name: "fady",
            age: 50
        },
        {
            name: "mady",
            age: 35
        },
        {
            name: "youssef",
            age: 35
        },
        {
            name: "hoda",
            age: 40
        },
        {
            name: "mizo",
            age: 40
        },
        {
            name: "feso",
            age: 40
        },
    ])
    db.collection('users').find({ age: 27 }).toArray((error, data) => {
        if (error) {
            console.log("error occared")
        }
        console.log(data)
    })
    db.collection('users').find({ age: 27 }).limit(3).count((error, data) => {
        if (error) {
            console.log("error occared")
        }
        console.log(data)
    })
    db.collection('users').updateMany({ age: 27 }, {
        $set: { name: 'hamada' },
        $inc: { age: 4 }
    })
    db.collection('users').updateMany({}, {
        $inc: { age: 10 }
    })
    db.collection('users').deleteMany({ age: 41 },
    ).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

})