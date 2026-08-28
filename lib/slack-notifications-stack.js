const cdk = require('@aws-cdk/core')
const lambda = require('@aws-cdk/aws-lambda')
const sns = require('@aws-cdk/aws-sns')
const event = require('@aws-cdk/aws-lambda-event-sources')

const lambaDefaultProps = {
  runtime: lambda.Runtime.NODEJS_12_X,
  timeout: cdk.Duration.seconds(10),
  memorySize: 128,
};

class SlackNotificationsStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props)

    let func = new lambda.Function(this, 'slackNotifications', {
      ...lambaDefaultProps,
      code: new lambda.AssetCode('src'),
      handler: 'main.handler',
      environment: {
        SLACK_API_URL: process.env.SLACK_API_URL,
        ENVIRONMENT: process.env.ENVIRONMENT
      },
    });

    const topic = new sns.Topic(this,"slack-notification")
    func.addEventSource(new event.SnsEventSource(topic, {}));
  }
}

module.exports = { SlackNotificationsStack }
