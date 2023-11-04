export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 w-full flex flex-col max-w-6x1 mx-auto">
      {children}
    </div>
  );
}
