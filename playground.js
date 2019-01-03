const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");

let data = {
  id: 1
};
const sign = jwt.sign(data, "richard");
console.log(sign);
const decoded = jwt.verify(sign, "richard");
console.log("decoded", decoded);
// let message = "hello my friend";
// let hash = SHA256(message).toString();
// console.log("message:", message);
// console.log("hash:", hash);

// let data = {
//   id: 4
// };
// let token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + "someSecret").toString()
// };

// // salt
// // - generates different values every time
// let resultHash = SHA256(JSON.stringify(token.data) + "someSecret").toString();
// if (resultHash === token.hash) {
//   console.log("data was not changed");
// } else {
//   console.log("data was changed");
// }
