Sign new node-webkit releases using RSA-SHA256 keypairs
=======================================================

Generate node-webkit release signatures to be used with [nw-updater](http://npmjs.org/package/nw-updater)

## Installation 

With [npm](http://npmjs.org):

    npm install node-sign-release -g

From source:

    cd ~
    git clone https://github.com/guerrerocarlos/node-sign-release.git
    npm link node-sign-release/

## Usage:

    node-sign-release <newReleaseFile>

## Example

    $ node-sign-release app.nw
    Signature: Oydrx+H2WiD51lTkFOYLuC8fC1DFn9MxFUhlTaKyQRSmG92jnOk5RMdtFM2Td4JICh6NwNlesNr102MSckk7084JcWIBzSsH0lX5yH1kkQLwqTpIpq/RAoi3qnO7tQpaZMr6BLO4KKyVjLB0RS1Qmzd/eU46SpKGGiEynDG+b+uKYxJbbWkALZAGSZzrndW+C2+aRzgk11bntqzzw0KNBUfbjlpounofxbXHUFxKICEWNxtx3DwCdiIj1jZxL59rEMpdUk60JwGIGea02VlAUDBgN76pIjCV3LDEYZyz55ihCr+Q2rr9Ma75u/ar6aGKSb5L0BL6GMdhvMYp6q69ow==
    Verified?: true
    Public key:
    -----BEGIN RSA PUBLIC KEY-----
    MIIBCgKCAQEAsR9zbgbm5pTpwZf7Ax6ghe3sHBqC0eU4MiW0frqzfKk7rLvr888zUNNsZdS9
    XGN9FNJuGIAG9XbiHv2PMeaK/XPPMBYBnw+pCLYSJTq9Sp0dXpwXFSmsX2VKGaTOkfd3svSm
    gBE3nnB8Ma1cSULJv9sNFszWGcDU7ariQqZ2iHrcbTgqqCrosnkJuBZdvWQAlq3RfA28AT+U
    XoXbFcWdjE/1uTd6FOXwCIIR1mOium5M1v3R0Ij/xz0KypaKCxlfbFTqaQxH91TYKuoXTEOW
    G8KiVEE+qd4ROIlFvqZftCX20d79Eo5MdwVbKccpBvEO65+N7vXFZe8HjhQmtf+PIQIDAQAB
    -----END RSA PUBLIC KEY-----

    Remember to back up your private key at keypair.json

