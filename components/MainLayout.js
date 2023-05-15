import Link from "next/link"
import Head from "next/head"
export function MainLayout({children, title ='Next app'}){
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content ="next , javascript, react"/>
        </Head>
        <nav>
        <Link href={'/'}><span>home</span></Link>
        <Link href={'/about'}><span>about</span></Link>
        <Link href={'/posts'}><span>posts</span></Link>
        </nav>
        <main>
            {children}
        </main>
        <style jsx>{
            `
            nav {
                position: fixed;
                height: 60px;
                left:0;
                right:0;
                top:0;
                background: darkblue;
                display:flex;
                justify-content:space-around;
                align-items:center;
            }
            nav span {
                color: white;
                text-decoration: none;
            }
            main {
                margin-top:60px;
                padding: 1rem;
            }
          
            `
        }</style>
        </>
    )
}