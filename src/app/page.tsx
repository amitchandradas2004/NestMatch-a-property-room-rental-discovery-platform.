import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to NestMatch
          </h1>
          <p className="text-muted max-w-md mx-auto text-sm leading-relaxed">
            Find your next property match with AI. Use the links in the navigation bar to log in or create an account.
          </p>
        </div>
      </main>
    </>
  );
}
