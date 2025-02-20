export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Quick Access Links</h1>
      <div className="flex flex-col space-y-2">
        <a href="/signin" className="btn btn-primary">
          Sign In
        </a>
        <a href="/signup" className="btn btn-secondary">
          Sign Up
        </a>
      </div>
    </div>
  );
}
