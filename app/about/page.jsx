import Link from "next/link";

export default function About() {
    return <>
        <h1>This is about page</h1>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
         <Link href="/contact">Contact</Link>
    </>
}