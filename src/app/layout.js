import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
// import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kennedy Ventures",
  description:
    "Kennedy Ventures supports promising startups with the tools, the tech, and the capital to build and grow to their peak potential. If you're ready to move your idea forward and level up your business, set an appointment using the link below. And unlike the bozos in this stock photo, be sure to bring the appropriate footwear.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
          {/* <Loading /> */}
        </main>
      </body>
    </html>
  );
}
