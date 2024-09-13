'use client';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { HeadTags } from '@/components/HeadTags/HeadTags';
import ResumeCard from '@/components/ResumeCard/ResumeCard';
import { useGetCandidateByIdQuery, useGetCandidatesQuery } from '@/rtk/queries/candidates';
import Head from 'next/head';

const ResumePage = ({ params }: { params: { slug: string } }) => {
  const candidateId = params.slug;
  const { data: candidates, error, isLoading } = useGetCandidatesQuery();
  const { data: candidateById, error: errorById, isLoading: isLoadingById } = useGetCandidateByIdQuery(candidateId);
  

  return (
    <>
      <HeadTags />
      <Header />
      <div className="w-full pt-20 =bg-gray-50 dark:bg-transparent flex flex-grow items-center">
        <div className="w-full max-w-5xl mx-auto h-full">
         {/* <ResumeCard placed={'onpage'} candidate={candidates?.find((item) => item.id == candidateId)} />*/}
          <ResumeCard placed={'onpage'} candidate={candidateById?.[0]} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ResumePage;
