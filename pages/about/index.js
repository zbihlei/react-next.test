import Router from "next/router"
import { MainLayout } from "@/components/MainLayout"

export default function About ({title}){
    return (
    <MainLayout title={'about page'}>
         <h1>{title}</h1>
         <button onClick={()=>Router.push('/')}>Go back home</button>
         <button onClick={()=>Router.push('/posts')}>Go to posts</button>

    </MainLayout>
    )
}

About.getInitialProps = async ()=>{
    const response = await fetch('http://localhost:3001/about')
    const data = await response.json()

    return {
        title: data.title
    }
}