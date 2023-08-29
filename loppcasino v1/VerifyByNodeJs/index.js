const ethers = require('ethers');  

function loopcasinoCheck(modulo,SecretText,BlockHash){
    let pack = ethers.utils.solidityPack(['uint','bytes32'],[
        SecretText, 
        BlockHash,  
    ]) 
    let result = ethers.utils.keccak256(pack)  
    let outcome =  (ethers.BigNumber.from(result)).mod(modulo) 
    console.log("outcome = ",outcome.toString())
}

// Modulo is the number of equiprobable outcomes in a game:
//  6 for dice roll
//  2 for coin flip
//  37 for roulette
//  6*6 = 36 for double dice
//  100 for classic dice
let modulo = 2 // flip

let SecretText = 2569774823 
let BlockHash = "null"

loopcasinoCheck(modulo,SecretText,BlockHash)
