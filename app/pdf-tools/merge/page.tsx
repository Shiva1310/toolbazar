"use client";

import { useState } from "react";
import UploadBox from "../../components/UploadBox";
import { PDFDocument } from "pdf-lib";

export default function MergePDF() {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);

  const handleMerge = async () => {
    if (files.length === 0) return;

    setIsMerging(true);

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedFile = await mergedPdf.save();

    const blob = new Blob([mergedFile], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "merged.pdf";
    link.click();

    setIsMerging(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Merge PDF</h1>

      <UploadBox
        onFilesSelected={(fileList) => {
          setFiles([...fileList]);
        }}
      />

      {files.length > 0 && (
        <div className="mt-6">
          <p className="text-gray-700 mb-4">
            {files.length} file(s) selected:
          </p>

          <ul className="list-disc ml-6 text-gray-700">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>

          <button
            onClick={handleMerge}
            disabled={isMerging}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {isMerging ? "Merging..." : "Merge PDFs"}
          </button>
        </div>
      )}
    </div>
  );
}
