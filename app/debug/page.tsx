'use client';

import Head from 'next/head';
import Header from '@/components/Header/Header';
import { Input, Button, Paper } from '@mantine/core';
import Footer from '@/components/Footer/Footer';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import { notifications } from '@mantine/notifications';

const Home = () => {
  return (
    <div
      className="dark:bg-gray-900 min-h-screen 
    flex flex-col
    "
    >
      <Head>
        <title>sotrudnik.ru</title>
        <meta name="description" content="overseasjobs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
          <main
            className="  
                   flex-grow flex flex-col 
                  items-center
                  bg-cover
                 
                   text-center
                   mt-24
                  "
          >

<Button
      onClick={() =>
        notifications.show({
          autoClose:false,
          title: 'Default notification',
         /* message: `Server Overload or Resource Limits:

If your server is under heavy load or running out of resources (like CPU, memory, or file descriptors), it might fail to serve some requests properly, leading to intermittent 404 errors. When you access the files directly, the server might be under less strain, so it can serve the files correctly.
File System Latency or I/O Issues:

Sometimes, if your server’s file system is experiencing latency or I/O bottlenecks, it might not be able to read files quickly enough, resulting in 404 errors. When you try again, the file system might have caught up, and the files load correctly.
Caching Issues:

If your server or a CDN is caching files incorrectly, it might serve stale or missing versions of the files. This could explain why a direct request works, as it might bypass the cache or force the server to re-fetch the file.
Race Conditions During Deployment:

If your files are being updated or deployed while the server is running, there could be a short window where requests are made for files that are in the process of being replaced, leading to temporary 404 errors.
Load Balancer or Proxy Misconfiguration:

If you're using a load balancer or reverse proxy (like NGINX), it might not be correctly configured to handle static files, or it could be misrouting requests. This could cause intermittent failures if some requests are routed to servers that don’t have the correct files.`,
      */  
message: (
  <div>
    Here is your notification message.
    <Button
      variant="outline"
      size="xs"
      onClick={() => alert('Button Clicked!')}
      style={{ marginLeft: 10 }}
    >
      Click me
    </Button>
  </div>
),

})
      }
    >
      Show notification
    </Button>


          </main>
       

      <Footer />
    </div>
  );
};

export default Home;
