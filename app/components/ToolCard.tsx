import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
}

export default function ToolCard({ title, description, link }: Props) {
  return (
    <Link href={link}>
      <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition cursor-pointer">
        <h3 className="text-lg font-semibold mb-2 text-blue-600">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
}
