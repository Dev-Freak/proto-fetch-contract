const axios = require("axios");

const fetchContractDocuments = async params => {
  const fetchContractDocuments = require("./fetchContractDocuments");
  const contractDocuments = await fetchContractDocuments(params);

  return contractDocuments;
};

// Gets single contract data by ID (ID fetching not yet implemented)
exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { idContract } = JSON.parse(event.body);

  try {
    const contract = await axios.get("https://www.datos.gov.co/resource/jbjy-vk9h.json");

    const { documents } = await fetchContractDocuments();

    const contractData = {
      idContract,
      documents,
      ...contract.data.splice(0, 1),
    };

    return {
      statusCode: 200,
      body: JSON.stringify(contractData),
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "applicantion/json",
      },
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: "\nSorry, something went wrong.\n" + JSON.stringify(error),
    };
  }
};
