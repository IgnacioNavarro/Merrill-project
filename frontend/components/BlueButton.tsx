export default function BlueButton(props: {
  children: React.ReactNode;
  text: string;
  onClick?: () => void;
}) {
  return (
    <div className="cursor-pointer flex items-center h-8" onClick={props.onClick}>
      <p className="text-sm mr-4 font-medium text-sky-blue">{props.text}</p>
      {props.children}
    </div>
  );
}
