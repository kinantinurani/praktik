import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-20 items-center h-full px-20">
      <div className="w-1/4 flex justify-end">
      <div className="border-10 w-50 h-50 border-white rounded-full overflow-hidden">
        <Image
        src="/images/k1.png"
        alt="My Image"
        width={300}
        height={300}
        className="rounded-full w-50 h-50"
        />
      </div>
      </div>
       <div className="w-3/4 p-6 text-white">
       <h1 className="text-3xl font-bold mb-4">hello i am kinn</h1>
       <p>student telkom school malang</p>
       <p>Iam a student who is passionate about web development and design. Iam constantly learning, experimenting, and improving my skills to create meaningful and engaging digital experiences.</p>
      </div>
    </div>
      
    
  );
}
