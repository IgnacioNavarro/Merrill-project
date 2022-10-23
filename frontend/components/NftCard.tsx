import { useRouter } from "next/router";

export default function NftCard(props: {
  id?: number;
  transferible?: boolean;
  name?: string;
  image?: string;
  collection_name?: string;
  holderPerks?: boolean;
  claimPerks?: string;
  owner?: string;
  tipo?: string;
}) {
  const router = useRouter();
  function nftClicked() {
    router.push('/nft/' + props.id);
  }

  function getBool() {
    if (props.transferible) {

      return "Transferible";
    } else {
      return "No transferible";
    }
  }

  return (
    <div onClick={nftClicked} className="select-none cursor-pointer w-full transition-colors relative bg-gray-100 active:bg-gray-300 drop-shadow-md p-2 text-gray-600 flex items-center justify-start">
      <img className="h-full w-20" src={props.image} />
      <div className="ml-5 flex flex-col h-full justify-center">
        <h2 className="font-medium">BBVA</h2>
        <h2 className="font-medium mb-2">{props.name}</h2>
        <p className="font-book">Beneficio</p>
        <p className="font-medium text-green-dark">{getBool()}</p>
      </div>
      <img className="absolute bottom-2 right-2" src="/component/icon-upright.svg" />
    </div>
  );
}
