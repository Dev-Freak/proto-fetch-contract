const fetchContractDocuments = async () => {
  const documents = [
    { name: "Google", url: "https://www.google.com" },
    { name: "Facebook", url: "https://www.facebook.com" },
    {
      name: "Archivo Secop II",
      url: "https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=42158863&InCommunity=False&InPaymentGateway=False&DocUniqueIdentifier=",
    },
  ];

  try {
    return { statusCode: 200, documents };
  } catch (error) {}
};

module.exports = fetchContractDocuments;
