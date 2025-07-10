async function Blog({params}) {
    const {blog} = await params;
    return <>
        <h1>{blog}</h1>
    </>
}

export default Blog;
