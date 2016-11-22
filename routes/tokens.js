var express = require('express');
var router = express.Router();

/*
 * GET tokens.
 */
router.get('/tokensList', function(req, res) {
    var db = req.db;
    var collection = db.get('tokens');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * DELETE to token.
 */
router.delete('/deleteToken/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('tokens');
    var tokenToDelete = req.params.id;
    collection.remove({ 'token' : tokenToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;