export default function Drawer({children}: {children: React.ReactNode}) {
  return (
    <div className="select-none bg-medium-blue h-24 p-5 flex items-center justify-center">
      {children}
    </div>
  );
}