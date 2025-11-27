export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} ToolBazar. All rights reserved.</p>
      </div>
    </footer>
  );
}
