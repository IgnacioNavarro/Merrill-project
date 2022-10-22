import Hover from "react-3d-hover";
export default function NftFull(props: { className?: string }) {
  return (
    <div className={props.className}>
      <Hover scale={1} perspective={900} speed={500}>
        <img className={`drop-shadow-lg `} src="/nft/nft.png" />
      </Hover>
    </div>
  );
}
