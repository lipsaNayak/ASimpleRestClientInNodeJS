var express = require('express');
var router = express.Router();

/*
 * GET devices.
 */
router.get('/devicesList', function(req, res) {
    var db = req.db;
    var collection = db.get('devices');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

// /*
//  * POST to adduser.
//  */
// router.post('/adduser', function(req, res) {
//     console.log('req :', req);
//     console.log('res :', res);
//     var db = req.db;
//     var collection = db.get('userlist');
//     collection.insert(req.body, function(err, result){
//         res.send(
//             (err === null) ? { msg: '' } : { msg: err }
//         );
//     });
// });

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteDevice/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('devices');
    var deviceToDelete = req.params.id;
    collection.remove({ 'mag_identifier' : deviceToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;