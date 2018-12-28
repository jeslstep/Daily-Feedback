const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;'
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);  
        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
}); 

// POST Route
router.post('/', (req, res) => {
    let feedbackObj = req.body;
    console.log('feedbackObj:',feedbackObj);
    let sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
    VALUES ($1, $2, $3, $4);`
    pool.query(sqlText, [feedbackObj[0], feedbackObj[1], feedbackObj[2], feedbackObj[3]])
        .then((result) => {
            console.log(result);
            res.send(feedbackObj);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

// DELETE
router.delete('/delete/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = `DELETE FROM feedback WHERE id=$1`;
    console.log(sqlText);

    pool.query(sqlText, [reqId])
        .then((result) => {
            console.log('feedback deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in deleting ${sqlText}`, error);
            res.sendStatus(500);
        })
})
module.exports = router;