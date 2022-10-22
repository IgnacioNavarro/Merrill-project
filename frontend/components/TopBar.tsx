export default function TopBar() {
  return (
    <div className="flex text-white w-full justify-between p-5 items-center">
      <img className="h-8 cursor-pointer" src="/component/icon-arrow-back.svg" />
      <h2>Cartera Tokenizada</h2>
      <div className="flex">
        <img className="h-5 cursor-pointer" src="/component/icon-chat-bubble.svg" />
        <img className="h-5 ml-2 cursor-pointer" src="/component/icon-menu.svg" />
      </div>
    </div>
  );
}
