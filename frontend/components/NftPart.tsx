export default function NftPart(props: { className?: string }) {
  return (
    <div className={`drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.75)] ${props.className}`}>
      <img src="/nft/nft.png" />
    </div>
  );
}
