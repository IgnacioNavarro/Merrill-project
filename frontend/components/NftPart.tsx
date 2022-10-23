export default function NftPart(props: {
  className?: string;
  fullHeight?: boolean;
}) {
  return (
    <div
      className={`drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.75)] ${props.className}`}
    >
      <img
        className={`h-[${
          props.fullHeight ? 1200 : 500
        }px] object-cover object-top w-full m-auto rounded`}
        src="/nft/nft.png"
      />
    </div>
  );
}
