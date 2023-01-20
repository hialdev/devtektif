import { Hero, SecCase, SecServices, SecArticles } from "@/components"
import MainLayout from "@/components/layouts/main"

export default function Home(){
  return(
    <>
      <MainLayout>
        <Hero />
        <section>
          <SecCase />
        </section>
        <SecServices />
        <SecArticles />
      </MainLayout>
    </>
  )
}