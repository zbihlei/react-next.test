import { useState, useEffect } from "react"
import Head from "next/head"
import { MainLayout } from "@/components/MainLayout"
import Link from "next/link"


export default function Posts({posts:serverPosts}){
    
    let postlist = serverPosts.map(post => {
        return (
            <li key = {post.id}>
                <Link href = {`/post/[id]`} as={`/post/${post.id}`}>{post.title}</Link>
            </li>
        )
    })

    // const [posts, setPosts]= useState(serverPosts);

    // useEffect(() => {
    //     async function load(){
    //         const response =  await fetch('http://localhost:3001/posts')
    //         const json = await response.json();
    //         setPosts(json);
    //     }
    //     if (!serverPosts){
    //         load()
    //     }
    // },[])
    
    // if (!posts){
    //     return <MainLayout>
    //         <p>Loading...</p>
    //     </MainLayout>
    // }

    return (
        <MainLayout title={'post page'}>
            <Head>
                <title>Posts page</title>
            </Head>
            <h1>Posts page</h1>
        <ul>{postlist}</ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ()=>{
 
    const response =  await fetch('http://localhost:3001/posts')
    const posts = await response.json();

    return {
        posts
    }
}