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

    // Do something with the body
    // For now, just return it in the response
    return {
        statusCode: 200,
        body: JSON.stringify(body, null, 2),
    };
};