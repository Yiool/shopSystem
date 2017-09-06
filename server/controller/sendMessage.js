const SMSClient = require('aliyun-sms-node')
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIz6mS4PEo6WIv'
const secretAccessKey = 'YoYrUWBzYvQzo9VnPZS7gSMI9JSOyn'
    //初始化sms_client
let key = {
    AccessKeyId: accessKeyId,
    AccessKeySecret: secretAccessKey
}
let smsClient = new SMSClient(key)
    //发送短信
smsClient.send({
    Format: 'JSON',
    Action: 'SendSms',
    PhoneNumbers: '13554407111',
    SignName: '众望视光中心',
    TemplateCode: 'SMS_94005008',
    TemplateParam: '{"code":"12345"}'
}).then(function(res) {

    if (Code === 'OK') {
        //处理返回参数
        console.log(res)
    }
}, function(err) {
    console.log(err)
})

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
            } else {
                reject(res);
            }
        }, function(err) {
            reject(res);
        })
    })
}

export default sendVerificationCode