import Hover from "react-3d-hover";

export default function Card(props: { address: string }) {
  return (
    <Hover scale={1} perspective={900} speed={500}>
      <div className="w-full flex justify-center drop-shadow-lg">
        <img className="max-h-64" src="./component/card.png" />
      </div>
    </Hover>
  );
}
