let namehash = require("eth-ens-namehash");
import { utils } from "ethers";
let hash = namehash.hash("resolver.eth");

console.log(hash);
console.log(utils.keccak256(Buffer.from("addr(bytes32)", "utf8")));
console.log(utils.keccak256(Buffer.from("addr(bytes32,uint256)", "utf8")));
