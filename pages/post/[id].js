import { MainLayout } from "@/components/MainLayout";
import { useRouter } from "next/router"
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Post({post: serverPost}){
const router = useRouter();
const [post, setPost]= useState(serverPost);

useEffect(()=>{
    async function load(){
        const response =  await fetch(`http://localhost:3001/posts/${router.query.id}`)
        const data = await response.json();
        setPost(data);
    }
    if (!serverPost){
        load()
    }
},[])

if (!post){
    return <MainLayout>
        <p>Loading...</p>
    </MainLayout>
}

    return(
        <MainLayout>
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
        <Link href={'/posts'}>Back to posts</Link>
        </MainLayout>
    )
}

//combine ssr and client

// Post.getInitialProps = async ({query, req})=>{
//     if (!req){
//         return {post: null}
//     }
//     const response =  await fetch(`http://localhost:3001/posts/${query.id}`)
//     const post = await response.json();

//     return {
//         post
//     }
// }


//ssr only
export async function getServerSideProps ({query}){
     
    const response =  await fetch(`http://localhost:3001/posts/${query.id}`)
    const post = await response.json();

    return {
        props:{post}
    }
}
