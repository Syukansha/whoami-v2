const router = require("express").Router();
const DeviceDetector = require('node-device-detector');


router.route("/deviceDetect").get((req,res)=>{
    const userAgent = req.get('User-Agent');
    const detector = new DeviceDetector({
        clientIndexes: true,
        deviceIndexes: true,
        deviceAliasCode: false,
    });
    
    const result = detector.detect(userAgent);
    console.log('result parse', result);

    res.json({
        software: result,
        test: result.os.name
    })

})

module.exports = router;
