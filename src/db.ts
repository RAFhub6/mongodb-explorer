const app = require('express')();
const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');

const url = process.env.MONGODB_URI

export function set(){
  const db = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    db.connect()
    db.db("admin").command({ ping: 1 });
    console.log("DB Connected. 🥳");
  } catch (e) {
    // Ensures that the client will close when you finish/error
    console.error(e)
    db.close();
  }
}
