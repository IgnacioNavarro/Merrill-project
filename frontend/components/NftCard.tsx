export default function NftCard(props: {
  name: string;
  shortDesc: string;
  transferable: boolean;
}) {
  return (
    <div className="select-none cursor-pointer w-full transition-colors relative bg-gray-100 active:bg-gray-300 drop-shadow-md p-2 text-gray-600 flex items-center justify-start">
      <img className="h-full w-20" src="./nft/nft.png" />
      <div className="ml-5 flex flex-col h-full justify-center">
        <h2 className="font-medium">BBVA</h2>
        <h2 className="font-medium mb-2">{props.name}</h2>
        <p className="font-book">Veneficio</p>
        <p className="font-medium text-green-dark">Transferible</p>
      </div>
      <img className="absolute bottom-2 right-2" src="./component/icon-upright.svg" />
    </div>
  );
}
