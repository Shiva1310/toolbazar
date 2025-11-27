import ToolCard from "./components/ToolCard";
;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-14">
        <h1 className="text-4xl font-bold mb-4">
          All your online tools in one place — <span className="text-blue-600">Free forever</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Convert, compress, merge and edit your files instantly.
        </p>
      </div>

      {/* Tool Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <ToolCard 
          title="Merge PDF"
          description="Combine multiple PDF files into one in seconds."
          link="/pdf-tools/merge"
        />

        <ToolCard 
          title="Compress PDF"
          description="Reduce PDF file size while maintaining quality."
          link="/pdf-tools/compress"
        />

        <ToolCard 
          title="JPG to PDF"
          description="Convert JPG images into a single PDF file."
          link="/pdf-tools/jpg-to-pdf"
        />

        <ToolCard 
          title="PDF to JPG"
          description="Convert PDF pages to high-quality JPG images."
          link="/pdf-tools/pdf-to-jpg"
        />

        <ToolCard 
          title="Image Resize"
          description="Resize your images to any dimensions instantly."
          link="/image-tools/resize"
        />
      </div>
    </div>
  );
}
