import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "DiaryVio - Your Voice, Your Story, Your AI Companion",
  description: "Voice-powered digital diary with memory search and AI companionship",
  icons: {
    icon: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DiaryVio"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-b from-[#f8fafc] to-[#eef2ff] dark:from-[#0f172a] dark:to-[#1e293b] text-slate-900 dark:text-slate-100 min-h-screen`}
      >
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Main content */}
          <div className="relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
