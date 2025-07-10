export default async function filepath({params}) {
    const {filepath} = await params;
    return<>
        <h1>File: {filepath?.join('/')}</h1>
    </>    
}