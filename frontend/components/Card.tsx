import Hover from "react-3d-hover";

export default function Card(props: { address: string }) {
  return (
    <Hover scale={1} perspective={900} speed={500}>
      <div className="w-full flex justify-center drop-shadow-lg">
        <div className="relative">
          <img className="max-h-64" src="/component/card.png" />
          <p className="cursor-pointer absolute bottom-5 right-5 drop-shadow-[0_0px_2px_rgba(0,0,0,0.75)]">{`*${props.address.slice(
            props.address.length - 4,
            props.address.length
          )}`}</p>
        </div>
      </div>
    </Hover>
  );
}
