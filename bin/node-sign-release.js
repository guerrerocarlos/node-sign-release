#!/usr/bin/env node
var crypto = require("crypto")
var fs = require("fs")
var keypair = require("keypair")

var keypairFile = "keypair.json"

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

  var readStream = fs.createReadStream(process.argv[1])

  readStream.pipe(sign)
  readStream.pipe(verify)

  readStream.on("end", function(){
      verify.end()
      signature= sign.sign(keys.private,'base64')
      console.log('Signature: '+signature)
      console.log('Verified?: '+verify.verify(keys.public, signature, 'base64'))
      console.log('Public key: \n'+keys.public)
      console.log('Remember to back up your private key at '+keypairFile)
  })
}
