import useSWR from "swr";

const network = "https://service-testnet.maschain.com/";

const headersWallet = new Headers({
  client_id: process.env.NEXT_PUBLIC_MASCHAIN_WALLET_CLIENTKEY!,
  client_secret: process.env.NEXT_PUBLIC_MASCHAIN_WALLET_CLIENTSECRET!,
  "Content-Type": "application/json",
});

const headersCert = new Headers({
  client_id: process.env.NEXT_PUBLIC_MASCHAIN_CERT_CLIENTKEY!,
  client_secret: process.env.NEXT_PUBLIC_MASCHAIN_CERT_CLIENTSECRET!,
  "Content-Type": "application/json",
});

interface MaschainGetCertificateResponse {
  from_wallet: string;
  to_wallet: string;
  is_mint: number;
  blockNumber: number;
  nft_token_id: number;
  transactionHash: string;
  certificate_image_file: string;
  certificate_file: string;
  created_at: string;
  token: {
    contract_address: string;
    name: string;
    symbol: string;
    logo: string;
  };
}

export interface Certificate {
  sender: string;
  recipient: string;
  imageFile: string;
  certFile: string;
  token: {
    contractAddress: string;
    name: string;
    symbol: string;
    logo: string;
  };
}

// type: 1 = core skill
// type: 2 = technical skill
export interface Skill {
  id: string;
  points: number;
  type: number;
}

export interface Wallet {
  name: string;
  address: string;
  certificates: Certificate[];
  skills: Skill[];
}

const walletFetcher = async (address: string) => {
  const urlWallet = network + "api/wallet/wallet/" + address;
  const resWallet = await fetch(urlWallet, { headers: headersWallet });
  const dataWallet = await resWallet.json();

  const urlCert = network + "api/certificate/get-certificate/?to=" + address;
  const resCert = await fetch(urlCert, { headers: headersCert });
  const dataCert = await resCert.json();

  const certs: Certificate[] = dataCert.result.map(
    (c: MaschainGetCertificateResponse) => ({
      sender: c.from_wallet,
      recipient: c.to_wallet,
      imageFile: c.certificate_image_file,
      certFile: c.certificate_file,
      token: c.token,
    }),
  );

  const data: Wallet = {
    name: dataWallet.result.name,
    address: dataWallet.result.address,
    certificates: certs,
    skills: [],
  };
  console.log(data);
  return data;
};

export default function useWallet(address: string) {
  const { data, error, isLoading } = useSWR(address, (address) =>
    walletFetcher(address),
  );
  return { wallet: data, isLoading, isError: error };
}
