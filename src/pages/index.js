import { Hero, SecCase, SecServices, SecArticles } from "@/components"
import MainLayout from "@/components/layouts/main"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Home(){
  return(
    <>
      <MainLayout>
        <Head>
          <title>
            Develop your Business like a Detective | IT Consultant
          </title>
          <meta
            name="description"
            content="Devtektif is a IT Consultant based on Indonesia, We will investigate your problem and solve it like Detective!"
            key="desc"
          />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_HOST + useRouter().route} />
          
        </Head>
        <Hero />
        <SecCase />
        <SecServices />
        <SecArticles />
      </MainLayout>
    </>
  )
}