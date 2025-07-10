'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Contact() {
    const pathName = usePathname();

    console.log(pathName);

    return <>
        <h1 className="capitalize text-5xl">This is contact page</h1>   
    </>
}