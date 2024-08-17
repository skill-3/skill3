"use server";
require("dotenv").config();

const network = "https://service-testnet.maschain.com/";

const headersWallet = new Headers({
  client_id: process.env.MASCHAIN_WALLET_CLIENTKEY!,
  client_secret: process.env.MASCHAIN_WALLET_CLIENTSECRET!,
  "Content-Type": "application/json",
});

const headersCert = new Headers({
  client_id: process.env.MASCHAIN_CERT_CLIENTKEY!,
  client_secret: process.env.MASCHAIN_CERT_CLIENTSECRET!,
  "Content-Type": "application/json",
});

async function getWallets() {
  const url = network + "api/wallet/wallet?type=2";
  const response = await fetch(url, {
    headers: headersWallet,
  });
  const result = await response.json();
  console.log(result);
}

async function createUser() {
  const url = network + "api/wallet/create-user";
  const body = JSON.stringify({
    name: "Jane Doe",
    email: "test@gmail.com",
    ic: "123456789012",
  });
  const response = await fetch(url, {
    method: "POST",
    headers: headersWallet,
    body: body,
  });
  const result = await response.json();
  console.log(result);
}

async function getCertContracts() {
  const url = network + "api/certificate/get-smart-contract";
  const response = await fetch(url, {
    headers: headersCert,
  });
  const result = await response.json();
  console.log(result);
}

async function mintCert(
  owner_address: string,
  recipient_address: string,
  contract_address: string,
  image: File,
  name: string,
  description: string,
  callback_url: string,
) {
  const url = network + "api/certificate/mint-certificate";
  const headersMintCert = new Headers(headersCert);
  headersMintCert.set("Content-Type", "multipart/form-data");
  headersMintCert.append("body", "form-data");
  const data = new FormData();
  data.append("wallet_address", owner_address);
  data.append("to", recipient_address);
  data.append("contract_address", contract_address);
  data.append("file", image);
  data.append("attributes", JSON.stringify({}));
  data.append("name", name);
  data.append("description", description);
  data.append("callback_url", callback_url);
  console.log(headersMintCert);
  console.log(data);

  const response = await fetch(url, {
    method: "POST",
    headers: headersCert,
    body: data,
  });
  const result = await response.json();
  console.log(result);
}

async function getCertByWallet(wallet_address: string) {
  const url = network + "api/certificate/get-certificate?to=" + wallet_address;
  const response = await fetch(url, {
    method: "GET",
    headers: headersCert,
  });
  const result = await response.json();
  console.log(result);
}

getCertContracts();
//createUser();
//getWallets();
/*
mintCert(
  "0xe139C934C7c2ADD7cFA4477eEbE1119466299679",
  "0xe154D3777D0Ab8101f817DACC3a247C567De116F",
  "0x020cC99D0b0Fa5BCB925e9E0705A215Df075f33c",
  new File(["foo"], "foo.txt"),
  "Certificate of Participation",
  "Thank you for participating in our event!",
  "https://google.com",
);
*/
//getCertByWallet("0xe154D3777D0Ab8101f817DACC3a247C567De116F");
