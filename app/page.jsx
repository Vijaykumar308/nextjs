export default async function Home(props) {
  console.log(props);
  const {params, searchParams} = props;

  console.log('params: ',await params, 'search params: ',await searchParams);
  return (
    <>
      <h1 className="capitalize text-5xl">This is Home Page</h1>
    </>
  );
}
