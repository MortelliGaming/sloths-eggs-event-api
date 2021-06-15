const loki = require('lokijs')
const fcl = require('../flow-js-sdk/packages/fcl')
const events = require('./events.js')

const express = require('express')
const app = express()
const port = 3000

var db = new loki('sandbox.db', {
	autoload: true,
	autoloadCallback : databaseInitialize,
	autosave: true, 
	autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    /* var entries = db.getCollection("items");
    if (entries === null) {
        entries = db.addCollection("items");
    } */
    // kick off any program logic or start listening to external events
    runProgramLogic();
}

// example method with any bootstrap logic to run after database initialized
function runProgramLogic() {
    fcl
    .config()           
    .put("accessNode.api", "https://access-testnet.onflow.org") // connect to Flow testnet
    .put("challenge.handshake", "https://fcl-discovery.onflow.org/testnet/authn")

    subscribeEvents()

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

function subscribeEvents() {
    for(var eventNameIndex in Object.keys(events)) {
            fcl.events(Object.keys(events)[eventNameIndex]).subscribe((event) => {
            if(!event)
                return
            if(!db.getCollection(event.type))
                db.addCollection(event.type)
            eventCollection = db.getCollection(event.type)
            eventCollection.insert(Object.assign({ time: Date.now() },event))
        }, (error) => { console.log(error); })
    }
}

app.get('/', function(req, res) {
    let result = {}
    for(index in db.listCollections()) {
        var collection = db.getCollection(db.listCollections()[index].name)
        result[db.listCollections()[index].name] = collection.find()
    }
    res.json(result);
});

