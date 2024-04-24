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
