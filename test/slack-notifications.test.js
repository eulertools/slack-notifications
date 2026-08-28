const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const SlackNotifications = require('../lib/slack-notifications-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SlackNotifications.SlackNotificationsStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
