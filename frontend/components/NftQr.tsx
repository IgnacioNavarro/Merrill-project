export default function NftQr(props: { className?: string }) {
  return (
    <div
      className={`drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.75)] ${props.className} relative`}
    >
      <img
        className={`h-[1200px] object-cover object-top w-full m-auto rounded`}
        src="/nft/nft.png"
      />
      <div className="absolute top-10 mt-10 left-5 right-5 bg-core-dark-blue/90 backdrop-blur-md p-5 rounded">
        <img className="rounded" src="/nft/qr.png" />
        <p className="mt-5 font-medium text-lg text-white text-center">
          Presenta el código en la taquilla del evento.
        </p>
      </div>
    </div>
  );
}
