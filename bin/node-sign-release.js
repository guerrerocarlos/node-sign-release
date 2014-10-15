#!/usr/bin/env node
var crypto = require("crypto")
var fs = require("fs")
var keypair = require("keypair")

var keypairFile = "keypair.json"

var VERIFY_PUBKEY =
    '-----BEGIN RSA PUBLIC KEY-----\n'+
    'MIIBCgKCAQEAsR9zbgbm5pTpwZf7Ax6ghe3sHBqC0eU4MiW0frqzfKk7rLvr888zUNNsZdS9\n'+
    'XGN9FNJuGIAG9XbiHv2PMeaK/XPPMBYBnw+pCLYSJTq9Sp0dXpwXFSmsX2VKGaTOkfd3svSm\n'+
    'gBE3nnB8Ma1cSULJv9sNFszWGcDU7ariQqZ2iHrcbTgqqCrosnkJuBZdvWQAlq3RfA28AT+U\n'+
    'XoXbFcWdjE/1uTd6FOXwCIIR1mOium5M1v3R0Ij/xz0KypaKCxlfbFTqaQxH91TYKuoXTEOW\n'+
    'G8KiVEE+qd4ROIlFvqZftCX20d79Eo5MdwVbKccpBvEO65+N7vXFZe8HjhQmtf+PIQIDAQAB\n'+
    '-----END RSA PUBLIC KEY-----\n'



console.log("got file: "+process.argv[2])

if(fs.existsSync(keypairFile)){
  fs.readFile(keypairFile, function(err, data){
    if(err){
      console.log(keypairFile+" file not found, generating new keypairs")
    }else{
      var keys = JSON.parse(data)
      generateSignature(keys)
    }
  })
}else{
  var keys = keypair()
  fs.writeFile(keypairFile, JSON.stringify(keys), function(err){
    if(err) throw err;
    generateSignature(keys)
  })
}

function generateSignature(keys){
  var sign = crypto.createSign("RSA-SHA256")
  var verify = crypto.createVerify("RSA-SHA256")
  var hash = crypto.createHash('SHA1')

  var readStream = fs.createReadStream(process.argv[2])

  readStream.pipe(sign)
  readStream.pipe(verify)
  readStream.pipe(hash)

  readStream.on("end", function(){
      verify.end()
      hash.end()
      signature= sign.sign(keys.private,'base64')
      console.log('checksum: '+hash.read().toString('hex'))
      console.log('Signature: '+signature)
      console.log('Verified?: '+verify.verify(keys.public, signature, 'base64'))
      console.log('Public key: \n'+keys.public)
      console.log('Remember to back up your private key at '+keypairFile)

    var readStream2 = fs.createReadStream(process.argv[2])

  })



  console.log("")
}
