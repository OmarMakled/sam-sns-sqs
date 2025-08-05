#### Serverless Messaging with AWS SAM: SNS, SQS, and Lambda

This example shows how to build a **serverless messaging pipeline** using **AWS SAM**. The project uses **SNS** to publish messages, **SQS** queues to separate concerns, and **Lambda functions** to process the data. It also uses **filter policies** to control message delivery to each queue.

This architecture is useful when you want to send different types of data to different consumers, and keep your application components decoupled.

```
aws sns publish \
  --profile dev \
  --region us-east-1 \
  --topic-arn arn:aws:sns:us-east-1:975050265684:testing-AppCallTopic-npTWMWj9O33E \
  --message '{"type":"log", "msg":"This is a test log"}' \
  --message-attributes '{"queue": {"DataType": "String", "StringValue": "log"}}'

aws sns publish \
  --profile dev \
  --region us-east-1 \
  --topic-arn arn:aws:sns:us-east-1:975050265684:testing-AppCallTopic-npTWMWj9O33E \
  --message '{"type":"log", "msg":"This is a test conversation"}' \
  --message-attributes '{"queue": {"DataType": "String", "StringValue": "conversation"}}'
```