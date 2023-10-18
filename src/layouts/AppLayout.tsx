
export function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-2xl font-bold text-center">Header</h1>
      </header>

      {/* Content */}
      <main className="flex-grow p-4">
        {/* Your page content goes here */}
        <div className="bg-gray-100 p-4 rounded-md">
          {/* Content */}
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer className="bg-blue-500 py-4">
        <nav className="flex justify-around">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}
