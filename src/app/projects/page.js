import TransitionEffect from "@/components/TransitionEffect"
import Layout from "@/components/Layout"
import MyProjects from "@/pages/MyProjects"

export const metadata = {
  title: 'Tristan | Projects',
}

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen bg-lightl dark:bg-darkl'>
        <Layout className='pt-[90px] md:pt-[96px] min-h-screen'>
          <MyProjects />
        </Layout>
      </main>
    </>
  )
}