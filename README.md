<h1 align="center"><code>get-os-ip.js</code></h1>

<p align="center">Get local IPv4 or IPv6 address</p>

## ⚙️ Installation

```js
npm i get-os-ip
```

**CDN Links:**
- https://cdn.jsdelivr.net/npm/get-os-ip@1.0.0/get-os-ip.js
- https://www.unpkg.com/get-os-ip@1.0.0/get-os-ip.js

## 📖 Usage

#### ● Import

```js
// ES6
import getOsIp from "get-os-ip";

// commonjs
const getOsIp = require("get-os-ip");
```

#### ● Local IPv6

```js
const ipv6 = getOsIp();           // ⌝
                                  //  | "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
const alsoIpv6 = getOsIp("v6");   // ⌟

console.log('Local IPv6: ' + ipv6);
```

#### ● Local IPv4

```js
const ipv4 = getOsIp("v4");       // 172.16.254.1

console.log('Local IPv4: ' + ipv4);
```

---

[Support me on Patreon](https://www.patreon.com/axorax) — 
[Check out my socials](https://github.com/axorax/socials)