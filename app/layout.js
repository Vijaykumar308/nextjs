import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar flex justify-between px-20 items-center bg-teal-600 text-white py-5">
          <div className="logo text-xl">My Apps</div>
          <ul className="flex space-x-10 text-xl">
            <li> <Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div></div>
        </div>

        <main className="flex justify-center items-center h-[90.8vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
