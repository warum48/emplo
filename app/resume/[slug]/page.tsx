'use client'
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import ResumeCard from "@/components/ResumeCard/ResumeCard"
import { useGetCandidatesQuery } from "@/rtk/queries/candidates"
import Head from "next/head"

const ResumePage = ({ params }: { params: { slug: string } }) => {
  const { data: candidates, error, isLoading } = useGetCandidatesQuery();
  const candidateId = params.slug;

    return(
        <>
        <Header /> 
          <Head>
            <title>sotrudnik.ru</title>
            <meta name="description" content="overseasjobs.com" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        <div className="w-full pt-20 =bg-gray-50 dark:bg-transparent flex flex-grow">
        <div className="w-full max-w-5xl mx-auto ">

        


        <ResumeCard candidate={candidates?.find(item => item.id == candidateId)}/>
        </div>
        </div>
        <Footer />
        </>
    )
}
export default ResumePage