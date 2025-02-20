export default function Layout({ children }) {
  return (
    <main className="w-full h-screen items-center place-content-center flex flex-col gap-8 row-start-2">
      {children}
    </main>
  );
}
