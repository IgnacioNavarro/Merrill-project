export default function WarningText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sand-dark text-sm font-medium ${className} align-text-top`}>
      <img
        src="/component/icon-warning.svg"
        className="h-4 inline-block mr-1"
      />
      {children}
    </p>
  );
}
