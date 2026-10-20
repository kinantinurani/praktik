import Image from "next/image";
import { pengalamanItems } from "@/data/pengalaman";

export default async function DetailPengalaman({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pengalaman = pengalamanItems.find(
    (item) => item.id === Number(id)
  );

  if (!pengalaman) {
    return (
      <div className="p-8 text-white">
        <h1 className="text-2xl font-bold">
          Cerita tidak ditemukan
        </h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Detail Pengalamanku
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">

        <div className="w-full h-80">
          <Image
            src={pengalaman.image}
            alt={pengalaman.title}
            width={1000}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {pengalaman.title}
          </h2>
          <p className="text-gray-500 mt-2">
            {pengalaman.tanggal}
          </p>
          <p className="text-gray-700 leading-relaxed mt-6">
            {pengalaman.detail}
          </p>

        </div>

      </div>

    </div>
  );
}