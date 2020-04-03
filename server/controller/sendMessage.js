const SMSClient = require('aliyun-sms-node')
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'xxxx'
const secretAccessKey = 'xxxx'
    //初始化sms_client
let key = {
    AccessKeyId: accessKeyId,
    AccessKeySecret: secretAccessKey
}
let smsClient = new SMSClient(key)

function sendVerificationCode(phoneNumber, templateParam) {
    return new Promise((resolve, reject) => {
        smsClient.send({
            Format: 'JSON',
            Action: 'SendSms',
            PhoneNumbers: phoneNumber,
            SignName: '众望视光中心',
            TemplateCode: 'SMS_94005008',
            TemplateParam: JSON.stringify(templateParam)
        }).then(function(res) {
            if (res.Code === "OK") {
                resolve(res);
            }
        }, function(err) {
            reject(res);
        })
    })
}
module.exports = sendVerificationCode
