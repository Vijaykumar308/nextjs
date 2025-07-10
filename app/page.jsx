import Link from "next/link";

export default async function Home(props) {
  console.log(props);
  const {params, searchParams} = props;

  console.log('params: ',await params, 'search params: ',await searchParams);
  return (
    <>
      <h1>This is Home Page</h1>
      <p>Search Params: {`${searchParams.name} and age is ${searchParams.age}`}</p>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
         <Link href="/contact">Contact</Link>
    </>
  );
}
