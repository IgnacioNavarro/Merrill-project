export default function ButtonSand({
  children,
  className,
  onClick,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-sand-dark active:bg-sand transition-colors text-white font-medium py-3 px-6 flex items-center ${className}`}
    >
      {children}
    </button>
  );
}
