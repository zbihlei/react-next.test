import Link from "next/link"
import Head from "next/head"
import { MainLayout } from "@/components/MainLayout"

export default function Index() {
    return (
    <MainLayout title={'home page'}>
        <h1>Hello world JS</h1>
        <p><Link href={'/about'}>about</Link></p>
        <p><Link href={'/posts'}>posts</Link></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ut eveniet debitis accusamus accusantium nobis ipsa molestiae atque rerum dolore obcaecati quas autem dolorum ea, cum ipsam recusandae tenetur ab!</p>
    </MainLayout>
    )
}    