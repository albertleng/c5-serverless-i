module.exports.handler = async (event) => {
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

module.exports.postHandler = async (event) => {
    // Extract the body from the event
    const body = JSON.parse(event.body);

    // Do something with the body
    // For now, just return it in the response
    return {
        statusCode: 200,
        body: JSON.stringify(body, null, 2),
    };
};