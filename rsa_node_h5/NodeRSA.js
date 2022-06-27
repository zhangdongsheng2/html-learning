'use strict';
var NodeRSA = require('node-rsa')
var fs = require('fs')


//生成,公钥私钥.
function generator() {
    var key = new NodeRSA({ b: 512 })
    key.setOptions({ encryptionScheme: 'pkcs1' })
    var privatePem = key.exportKey('pkcs1-private-pem')
    var publicPem = key.exportKey('pkcs1-public-pem')

    fs.writeFile('public.pem', publicPem, (err) => {
        if (err) throw err
        console.log('公钥已保存！')
    })
    fs.writeFile('private.pem', privatePem, (err) => {
        if (err) throw err
        console.log('私钥已保存！')
    })
}


//url编码 Base64字符串
function encryption(str) {
    var encStr = encodeURIComponent(str);
    encStr = btoa(encStr);
    return encStr;
}

//使用公钥加密
function encrypt() {

    const a_public_key_data = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCcHY9yGOKGOij281asUsGb/bfW+DAuKZgdvOlKL/jndcZSBNAbn5UQyZkfN+DMG0nKnBj9Nn3MpfwjPkEMBuGZNG3U3rcGF/A1lgVbiEkxEIZLHr1HgSnuoBpk4fy9weA55j6BFJ3XxXXWeJMG+lg6XX/0Rjxw+ID5U3fNonuc3wIDAQAB-----END PUBLIC KEY-----';
    const a_public_key = new NodeRSA(a_public_key_data);
    a_public_key.setOptions({ encryptionScheme: 'pkcs1' });

    let encrypted = a_public_key.encrypt("cXkzNzA2MTM2Ng==", 'base64');
    console.log('B 公钥加密:', encodeURIComponent(encrypted));

    encrypted = a_public_key.encrypt("MTIzNDU2bWY=", 'base64');
    console.log('B 公钥加密:', encodeURIComponent(encrypted));
    encrypted = a_public_key.encrypt("UEVSU09OQUdF", 'base64');
    console.log('B 公钥加密:', encodeURIComponent(encrypted));

}


function encryptPrivate() {
    const text = 'Hello RSA!';

    fs.readFile('./private.pem', function (err, data) {
        const a_private_key = new NodeRSA(data);
        fs.readFile('./public.pem', function (err, data) {
            const a_public_key = new NodeRSA(data);
            //=========加签并加密==========解密并验签========================
            console.log("======================方式一===========================")
            // 加签并加密
            const sign = a_private_key.sign(text, 'base64', 'utf8');
            console.log('私钥加签:', sign);

            let encrypted = a_public_key.encrypt(sign, 'base64');
            console.log('公钥加密:', encrypted);

            // 解密并验签
            let decrypted = a_private_key.decrypt(encrypted, 'utf8');
            console.log('私钥解密:', decrypted);

            const verify = a_public_key.verify(text, decrypted, 'utf8', 'base64');
            console.log('公钥验签:', verify);


            //=================公钥加密=========私钥解密============================
            console.log("========================方式二=========================")
            encrypted = a_public_key.encrypt(text, 'base64');
            console.log('公钥加密2:', encrypted);

            decrypted = a_private_key.decrypt(encrypted, 'utf8');
            console.log('私钥解密2:', decrypted);

            console.log("验证: ", text === decrypted)



        });
    });



}


// generator();
//encrypt();
encryptPrivate();


