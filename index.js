const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.handlerTwo = async (event) => {
    console.log('GET method')
    console.log(event)
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Hahaha!",
                input: event,
            },
            null,
            2
        ),
    };
};

module.exports.postHandlerTwo = async (event) => {
    console.log('POST method')
    console.log(event)

    // Extract the body from the event
    let body;
    try {
        body = JSON.parse(event.body);
    } catch (error) {
        console.error('Failed to parse JSON: ', error)
    }

    // Create a new S3 bucket
    const bucketParams = {
        Bucket: 'MyS3Bucket', // Replace with your desired bucket name
    };

    try {
        const data = await s3.createBucket(bucketParams).promise();
        console.log('Bucket created successfully', data.Location);
    } catch (error) {
        console.error('Failed to create bucket: ', error);
    }

    // Do something with the body
    // For now, just return it in the response
    return {
        statusCode: 200,
        body: JSON.stringify(body, null, 2),
    };
};