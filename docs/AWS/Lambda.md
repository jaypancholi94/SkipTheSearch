---
title: "AWS Lambda Tutorial - Serverless Computing Guide | SpellBook"
description: "Learn AWS Lambda serverless functions. Event-driven computing, practical examples with Node.js, and how to deploy Lambda functions without managing servers."
---

# Lambda

AWS Lambda is a serverless computing service provided by Amazon Web Services (AWS). It allows you to run code without worrying about managing servers. You only need to write your code and define the conditions under which it should run, and AWS Lambda takes care of the rest.

## ⚙ How it works

1. **Event-Driven**: Lambda functions are triggered by events. These events can come from other AWS services (like an HTTP request via API Gateway, a file upload to S3, a new item added to a DynamoDB table, etc.) or be scheduled to run at specific times.
2. **Write Code**: You write your function in one of the supported languages (e.g., JavaScript, Python, Java, etc.), upload it to AWS Lambda, and specify the event that should trigger it.
3. **Run Code**: When the specified event occurs, AWS Lambda automatically runs your code. You only pay for the compute time used when your code is running.

## 🎯 Example

Imagine you have an online store, and whenever a customer places an order, you want to send them a confirmation email.

1. **Trigger Event**: The event is a new order placed in your store. This event can be stored in an AWS service like S3 or DynamoDB.
2. **Lambda Function**: You write a simple Lambda function that takes the order details and sends a confirmation email using a service like AWS SES (Simple Email Service).
3. **Execution**: Whenever a new order is placed (trigger event), AWS Lambda automatically runs your function, and the customer receives a confirmation email.
Example code in JavaScript for Node.js

```JavaScript
exports.handler = async (event) => {
    const orderDetails = event.orderDetails; // assuming event has order details
    const email = orderDetails.email;
    
    // Send email logic here (you could use AWS SES)
    
    return {
        statusCode: 200,
        body: JSON.stringify('Email sent successfully!')
    };
};
```

In this example:

- The `handler` function is what AWS Lambda executes when the event occurs.
- The `event` parameter contains all the data passed to the function (like order details).
- You write the logic to process the event (like sending an email) and return a response.

That’s how AWS Lambda helps you run code in response to events, without needing to manage any servers.
