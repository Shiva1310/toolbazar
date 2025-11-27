"use client";

import { useRef } from "react";

interface Props {
  onFilesSelected: (files: FileList) => void;
}

export default function UploadBox({ onFilesSelected }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="border-2 border-dashed border-gray-400 rounded-lg p-10 text-center cursor-pointer hover:bg-gray-100 transition"
    >
      <p className="text-gray-700 text-lg">Click to upload PDF files</p>

      <input
        type="file"
        accept="application/pdf"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files) onFilesSelected(e.target.files);
        }}
      />
    </div>
  );
}
