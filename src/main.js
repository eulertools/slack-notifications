const axios = require('axios')

const ENVIRONMENT = process.env.ENVIRONMENT || 'dev'
const SLACK_API_URL = process.env.SLACK_API_URL

exports.handler = async function(changes, context) {
    console.log('first')
    const records = changes.Records
    console.log('second')
    console.log(JSON.stringify(records))
    try {
        records.forEach(r => {
            console.log('on each')
            console.log(JSON.stringify(r))
            const msg = JSON.parse(r['Sns']['Message'])
            console.log(JSON.stringify(msg))
            let slackMsg = ""
            let channel = "alerts"
            switch (msg["detail-type"]) {
                case "Batch Job State Change":
                    console.log("Sending notification for a failed Batch Job")
                    const detail = msg['detail']
                    slackMsg = `[${ENVIRONMENT}] Failed Batch job ${detail['jobName']}(id:${detail['jobId']})`
                    channel = 'alerts-data'
                    break
                default:
                    console.log("Could not match a valid sender")
                    slackMsg = `[${ENVIRONMENT}] ${JSON.stringify(msg)}`
                    break
            }
            console.log(slackMsg)
            sendSlack(slackMsg)
        })
    }
    catch(e){
        console.error("Error notifying Slack", JSON.stringify({changes: changes, context: context, error: e }));
    }
}

async function sendSlack(msg) {
    axios
        .post(SLACK_API_URL, {
            text: msg
        })
        .then(res => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        })
}
