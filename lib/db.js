'use strict'

// const { MongoClient } = require('mongodb');
const MongoClient = require('mongodb').MongoClient

const { DB_USER, DB_PASSWD, DB_HOST, DB_NAME } = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
// const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}`
let connection

async function connectDB () {
  if (connection) return connection

  let client
  try {
      client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    process.exit(1)
  }

  return connection
}

module.exports = connectDB

