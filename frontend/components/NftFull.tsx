import Hover from "react-3d-hover";
export default function NftFull(props: { className?: string, noHover?: boolean }) {
  return (
    <div className={props.className} id="nft-full-container">
      <Hover scale={props.noHover?0:1} perspective={900} speed={props.noHover?0:500}>
        <div className="h-full">
          <img
            className="max-h-full drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.75)] m-auto rounded"
            src="/nft/nft.png"
          />
        </div>
      </Hover>
    </div>
  );
}
