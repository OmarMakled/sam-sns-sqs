exports.handler = async (event) => {
    console.log("Received SQS event:", JSON.stringify(event, null, 2));
};
  