const os = require('os');

console.table({
    // userInfo: os.userInfo(),
    upTime: os.uptime(),
    platform: os.platform(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
})