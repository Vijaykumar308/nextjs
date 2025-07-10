export default async function comment({params}) {

    const {comment} = await params;
    
    return <>
        <h1>{comment}</h1>
    
    </>
}