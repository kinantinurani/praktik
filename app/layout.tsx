import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Website portfolio pribadi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen">
       <div style={{ width: '100%', height: '12.5rem', 
       backgroundImage: "url('https://i.pinimg.com/736x/9a/39/56/9a39567edbbdb51eeb270fb8c7cad526.jpg')" }}
        className="w-full h-50 bg-cover bg-center px-10">
         </div>
        
        <div className="bg-home bg-cover bg-center bg-no-repeat min-h-screen">
          <div className="bg-brown/80 min-h-screen">

            <div className="flex min-h-[calc(100vh-80px)]">
              <aside className="w-64 shrink-0 border-r border-white/30 text-white">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-8">
                    Dashboard
                  </h2>
                  <nav className="flex flex-col gap-3">

                    <a
                      href="/home"
                      className="rounded-lg px-4 py-3 bg-white/20 hover:bg-white/30 transition"
                    >
                      Home
                    </a>
                    <a
                      href="/pengalamanku"
                      className="rounded-lg px-4 py-3 bg-white/20 hover:bg-white/30 transition"
                    >
                      pengalamanku
                    </a>
                    

                  </nav>

                </div>
              </aside>

              <main className="flex-1">
                {children}
              </main>

            </div>


            <footer className="border-t border-white/30 py-6 text-center text-white">

              <p className="text-sm">
                © 2026 My Portofolio
              </p>

              

            </footer>

          </div>

        </div>

      </body>
    </html>
  );
}