const os=require("os");function getOsIp(e="v6"){let t=os.networkInterfaces();for(let n of Object.keys(t))for(let r of t[n])if("v4"===e&&"IPv4"===r.family&&!r.internal||"v6"===e&&"IPv6"===r.family&&!r.internal)return r.address;return null}module.exports=getOsIp