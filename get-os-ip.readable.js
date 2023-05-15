import { networkInterfaces } from 'os';

function getOsIp(version = 'v6') {
  const interfaces = networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (version === 'v4' && iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
      if (version === 'v6' && iface.family === 'IPv6' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return null;
}