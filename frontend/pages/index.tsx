import type { NextPage } from "next";
import BlueButton from "../components/BlueButton";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import LayoutSub from "../components/LayoutSub";
import NftCard from "../components/NftCard";
import TopBar from "../components/TopBar";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
// import fonts
import mainABI from "../contractBuild/abi.json";
declare var window: any;

const Home: NextPage = () => {

  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const [contract, setContract] = useState<any>();

  const [isLoading, setIsLoading] = useState(true);

  const [NFTs, setNFTs] = useState<any[]>();


  useEffect(() => {
    async function a() {
      connectWallet(setWalletAddress, setIsConnected);
      console.log("walletAddress", walletAddress);
      console.log("contract", contract);
    }
    a();

  }, [walletAddress]);

  useEffect(() => {
    async function b() {
      if (contract) {
        const userNFTS = await getUserNFTs(walletAddress);
        console.log("userNFTS", userNFTS);
        const cont = userNFTS.length;

        const parsedNFTs: any[] = [];
        for (let i = 0; i < cont; i++) {
          const nft = await contract.tokenURI(userNFTS[i]);
          console.log("nft", "https://ipfs.io/ipfs/" + nft);

          //get nft json data from the url

          const nftData = await fetch("https://ipfs.io/ipfs/" + nft);
          const nftJson = await nftData.json();
          nftJson.image = nftJson.image.replace("ipfs://", "https://ipfs.io/ipfs/");
          console.log("nftJson", nftJson);
          parsedNFTs.push(nftJson);
          console.log("parsedNFTs", parsedNFTs);

        }
        setNFTs(parsedNFTs);
        setIsLoading(false);
      }
    }
    b();
  }, [contract]);


  async function requestAccount(setWalletAddress: any, setIsConnected: any) {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.log("User denied account access");
      }
    }
  }

  async function connectWallet(setWalletAddress: any, setIsConnected: any) {
    if (isConnected) { return; }
    if (typeof window.ethereum != "undefined") {
      await requestAccount(setWalletAddress, setIsConnected);
    }else{
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractAddress = "0xC4eA19a00Baee3DD64E998bF7177874e45C0154D";
    const contract = new ethers.Contract(
      contractAddress,
      mainABI,
      provider.getSigner()
    );
    setContract(contract);
  }




  async function getUserNFTs(address: string): Promise<number[]> {
    return contract.getTokensFromUser(address);
  }

  async function getTokenURI(tokenId: number): Promise<string> {
    return contract.tokenURI(tokenId);
  }


  async function sendNFT(tokenId: number) {
    const finalAddress = "0x66E30Ce4FB76f08C431080B1C1C95d97311a4526";
    try {
      await contract.transferFrom(walletAddress, finalAddress, tokenId);
    } catch {
      console.log("error");
    }

  }



  return (
    <LayoutSub>
      <TopBar title="Cartera Tokenizada" />
      <div className="p-5 pt-0">
        <div className="w-full flex justify-end mb-5">
          <BlueButton text="Ver dirección">
            <img className="h-full" src="/component/icon-wallet.svg" />
          </BlueButton>
        </div>
        <Card address={walletAddress} />
      </div>

      <Drawer>
        <div className="flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all">
          <img className="h-5 mb-2" src="/component/icon-search.svg" />
          <p>Buscar movi&shy;mie&shy;ntos</p>
        </div>

        <div className="ml-5 flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all">
          <img className="h-5 mb-2" src="/component/icon-request.svg" />
          <p>Recibir activos</p>
        </div>

        <div className="ml-5 flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all"
          onClick={() => sendNFT(1)}>
          <img className="h-5 mb-2" src="/component/icon-transfer.svg" />
          <p>Transferencias</p>
        </div>
      </Drawer>
      <div className="p-5 pb-20 bg-gray-200">

        {(!isLoading && (NFTs!.length != 0)) && (
          <>
            {NFTs!.map((nft: any, i) => (
              <div className="pb-5" key={i}>
                <NftCard
                  name={nft.name}
                  transferible
                  image={nft.image}
                />
              </div>
            ))}
          </>

        )}

        {(!isLoading && (NFTs!.length == 0)) && (
          <>

            <div className="pb-5" key={1}>
              <NftCard
                name={"NFT de prueba conectado"}
                transferible
                image={"/nft/nft.png"}
              />
            </div>

          </>

        )}

        <div className="pb-5" key={1}>
          <NftCard
            name={"NFT de prueba sin conectar"}
            transferible
            image={"/nft/nft.png"}
          />
        </div>

        <h2 className="select-none cursor-pointer flex justify-center text-sm mt-10 font-medium text-medium-blue">
          Ver activos ya utilizados
        </h2>
      </div>
    </LayoutSub>
  );
};

export default Home;
