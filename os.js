const operatingSystem = require("os");
const { log } = require("console");

// Info about the user
log(operatingSystem.userInfo());

// Method returns the up time of the system
log(`This system is up from ${operatingSystem.uptime()}.`);

const currentOS = {
  name: operatingSystem.type(),
  release: operatingSystem.release(),
  totalMem: operatingSystem.totalmem(),
  freemem: operatingSystem.freemem(),
}

log(currentOS);