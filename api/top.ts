import express from "express";
import { conn, queryAsync } from "../dbconnect";
import mysql from "mysql";
import { User, imageUpload } from "../model/model";
export const router = express.Router();

router.get("/", (req, res) => {
  let sql = "SELECT i.userID, i.imageID, i.url, u.username, i.count FROM images i JOIN users u ON i.userID = u.userID ORDER BY count DESC LIMIT 10";
  conn.query(sql, (err, result) => {
    if (err) throw err;
      res.json(result);
  });
});


router.get("/yesterDaytop", (req, res) => {
    let sql = 'SELECT * FROM images GROUP BY imageID ORDER BY count DESC LIMIT 10';
    conn.query(sql, (err, result) => {
      if (err) throw err;
        res.json(result);
    });
});