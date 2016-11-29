var express = require('express');
var router = express.Router();

/*
 * GET devices.
 */
router.get('/appsOnDevicesList', function(req, res) {
    var db = req.db;
    var collection = db.get('appsOnDevices');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/appsOnDeviceDelete/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('appsOnDevices');
    var appOnDeviceToDelete = req.params.id;
    collection.remove({ 'client_key' : appOnDeviceToDelete }, function(err) {
        // res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
        res.status(204).send('Success');
    });
});

module.exports = router;