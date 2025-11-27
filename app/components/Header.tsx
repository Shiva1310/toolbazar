export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          ToolBazar
        </h1>

        <nav className="space-x-6 text-gray-700">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/pdf-tools/merge" className="hover:text-blue-600">PDF Tools</a>
          <a href="/image-tools/resize" className="hover:text-blue-600">Image Tools</a>
        </nav>
      </div>
    </header>
  );
}
