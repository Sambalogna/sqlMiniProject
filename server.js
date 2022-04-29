const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );
  