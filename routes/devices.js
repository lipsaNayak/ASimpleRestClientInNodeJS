var express = require('express');
var router = express.Router();

/*
 * GET devices.
 */
router.get('/devicesList', function(req, res) {
    var db = req.db;
    var collection1 = db.get('devices');
    var collection2 = db.get('appsOnDevices');
    collection1.find({},{},function(e,devices){
        collection2.find({},{},function(e,appsOnDevices){
            //res.json(docs);
            var result = [];
            for(var i =0; i< devices.length; i++){
                var happs =[];
                var deviceId= devices[i].mag_identifier;
                for(var j =0; j< appsOnDevices.length; j++){
                    if(appsOnDevices[j].mag_identifier === deviceId )
                    {
                        happs.push(appsOnDevices[j]);
                    }
                }
                var appsList = {
                    'apps': happs
                }
                var key;
                for(key in devices[i]){
                    appsList['mag_identifier'] = devices[i].mag_identifier;
                    appsList['device_status'] = devices[i].device_status;
                    appsList['device_name'] = devices[i].device_name;
                    appsList['device_updated'] = devices[i].device_updated;
                    appsList['device_dn'] = devices[i].device_dn;
                    appsList['device_created'] = devices[i].device_created;
                    appsList['multiuser'] = devices[i].multiuser;
                    appsList['platform'] = devices[i].platform;
                }
                result.push(appsList);
            }
            res.json(result)
        });
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteDevice/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('devices');
    var deviceToDelete = req.params.id;
    collection.remove({ 'mag_identifier' : deviceToDelete }, function(err) {
        // res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
        res.status(204).send('Success');
    });
});

module.exports = router;