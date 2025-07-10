'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Contact() {
    const pathName = usePathname();

    console.log(pathName);

    return <>
        <h1>This is contact page</h1>   

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        
        <Link href="/contact" className={`${pathName === '/contact' ? 'active' : ''}`}>Contact</Link>
    </>
}