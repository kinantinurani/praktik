import Image from "next/image";
import Link from "next/link";
import { pengalamanItems } from "@/data/pengalaman";

export default function pengalaman() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-white mb-8">
        Pengalamanku
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {pengalamanItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >

            <div className="h-60 w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-500 mt-2">
                {item.tanggal}
              </p>
              <p className="text-gray-700 mt-4">
                {item.description}
              </p>
              <div className="mt-6 text-right">
                <Link
                  href={`/pengalamanku/${item.id}`}
                  className="font-semibold text-[#5c0019] hover:underline"
                >
                  baca
                </Link>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}