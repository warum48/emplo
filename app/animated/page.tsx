'use client';

import Head from 'next/head';
import Header from '@/components/Header/Header';
import { Input, Button, Transition } from '@mantine/core';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import React from 'react';
import { ResultList } from '@/components/ResultList/ResultList';
import './anim.css';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';

const Home = () => {
  const [resultState, setResultState] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const mainRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target === mainRef.current) {
        setIsAnimating(false);
        console.log('Transition complete for grid.');
        // Add your custom logic here
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('transitionend', handleTransitionEnd);
      
    }

    // Clean up the event listener on component unmount or when the effect re-runs
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  return (
    <>
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
        <Button
        className='fixed z-50 bottom-5 right-5'
                      onClick={() => {
                        setResultState(!resultState);
                        setIsAnimating(true);
                      }}
                    >
                      switch view
                    </Button>
        <Header />

        <div
          className={` transition-grid grid grid-cols-1 gap-0 
             ${ (resultState && isAnimating) || (!resultState ) ? 'md:grid-cols-1' : 'md:grid-cols-3'}`}
        >
          <div className="col-span-1">



            <main
              ref={mainRef}
              className={`  
         ${ (resultState && isAnimating)  ? 'w-1/3 ' : 'w-full'} 
         ${ (resultState && isAnimating) || (!resultState )  ? 'transition-grid items-center' : ''}
       flex-grow flex flex-col 
      
      bg-cover
      bg-[url('https://unsplash.com/photos/gMsnXqILjp4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGpvYiUyMHRlYW18ZW58MHx8fHwxNzIwNTQ5MTY0fDA&force=true&w=2400')]
       text-center
       mt-16 
      `}
//|| (!resultState && isAnimating)
      

              //
              //mx-auto
              //container px-4
              //justify-center

              /*one dir animation:
              ${ (resultState && isAnimating) ? 'w-1/3' : 'w-full'} 
              ${ (resultState && isAnimating) || (!resultState )  ? 'transition-grid' : ''}
          */
         
            >
              <section
                className={`
                transition-all
       w-full flex flex-col flex-grow
     items-center
      border-box
      px-0
      bg-opacity-70
        bg-gradient-to-br from-fuchsia-950/85 via-rose-500/75 to-rose-900/95 
        ${ (resultState )  ? 'dark:from-indigo-950/100 dark:via-rose-800/100 dark:to-rose-900/100' : 'dark:from-indigo-950/75 dark:via-rose-800/50 dark:to-rose-900/75 '} 
        ${ (resultState )  ? 'px-0' : 'px-8'}
         py-20
        text-white  shadow-md `}
                //bg-gradient-to-r from-pink-400/75 via-red-500/85 to-orange-400 dark:from-indigo-950 dark:via-gray-800 dark:to-slate-900
                //dark:from-indigo-950/75 dark:via-gray-800/90 dark:to-slate-900/95
                //bg-gradient-to-br from-fuchsia-950/85 via-rose-500/85 to-rose-900
              >
    { /*resultState && !isAnimating  &&             
<div className={`my-8 bg-white bg-opacity-95 text-gray-900 mx-8 dark:text-white dark:bg-customGray-950/85
transition-all
     ${ (resultState )  ? 'opacity-100' : 'opacity-0'}
    `}>
              <JobSearchForm />
              </div>
*/}



    <Transition mounted={!resultState} transition="fade" duration={500} timingFunction="ease" >
    {(styles) => (
        <div style={styles}>
            { (resultState && isAnimating || (!resultState ) ) &&
                <div className={`w-full max-w-5xl flex flex-col justify-start transition-grid
                    ${ (resultState )  ? 'opacity-0' : 'opacity-100'}
                    `}>
                  <h1 className="text-4xl font-bold mb-4 text-left font-light [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                    Найдите лучших сотрудников
                  </h1>
                  <p className="text-lg mb-8 text-left max-w-3xl ">
                    Наш сайт помогает найти лучших сотрудников, анализируя данные с различных
                    социальных сетей и подбирая наилучших кандидатов с помощью искусственного
                    интеллекта.
                  </p>
                  <div className="flex justify-start items-center space-x-4 w-full p-4 bg-white bg-opacity-30">
                  
                    
                    <Input placeholder="Регион" size="lg" className="flex-grow flex-shrink-0" />
                    <Input placeholder="Профессия" size="lg" className="flex-grow flex-shrink-0" />
                    <Link href={'/results'}>
                      <Button size="lg" className="bg-opacity-80 hover:bg-opacity-100">
                        Поиск
                      </Button>
                    </Link>
                   
                  </div>
                  <div className="flex justify-end items-center">
                    <div className="flex justify-end items-center bg-white bg-opacity-30 w-fit px-4 py-2">
                      <a href="" className="underline">
                        Расширенный поиск
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 text-white text-left w-full">
                    <h2 className="text-2xl font-light [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                      Популярные запросы
                    </h2>
                    <div className="flex justify-between gap-4">
                      <ul className="mt-4 space-y-2">
                        <li>Финансовые директора </li>
                        <li>Технологические вакансии </li>
                        <li>Вакансии в сфере продаж </li>
                        {/*<li>Менеджеры проектов </li>
                  <li>Менеджеры проектов </li>*/}
                      </ul>
                      <ul className="mt-4 space-y-2">
                        <li>Финансовые директора </li>
                        <li>Технологические вакансии </li>
                        <li>Вакансии в сфере продаж </li>
                        {/*<li>Менеджеры проектов </li>
                  <li>Менеджеры проектов </li>*/}
                      </ul>
                      <ul className="mt-4 space-y-2">
                        <li>Финансовые директора </li>
                        <li>Технологические вакансии </li>
                        <li>Вакансии в сфере продаж </li>
                        {/*<li>Менеджеры проектов </li>
                  <li>Менеджеры проектов </li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
}
                </div>
                 )}
</Transition>

<Transition mounted={resultState} transition="fade" duration={500} timingFunction="ease" enterDelay={250}>
{(styles) => (

<div style={styles} className={`w-full max-w-5xl flex flex-col justify-start
    ${ (isAnimating )  ? ' absolute ' : ' relative'}
    `}>
    
          <div className={`bg-white bg-opacity-95 text-gray-900  dark:text-white dark:bg-customGray-950/85
            
            mx-4 -my-12
            
                `}
                //${ (resultState )  ? 'm-0 ' : 'm-0 '}
                //-m-8 
                >

                    { resultState &&
                          <JobSearchForm />
                    }
                          </div></div>
        )}
</Transition>

              </section>
            </main>
          </div>
          <div
            className="col-span-2 mt-16 bg-gray-100 p-8 bg-right-top-50
                         
                          dark:bg-opacity-50
                          dark:bg-customGray-900 

        "
            // bg-[url('/images/neuro_bg_cuted.png')]
            //dark:bg-[url('/images/neuro_bg_transp.png')]
          >
            <h2 className="text-pink-700 dark:text-neutral-50 text-3xl font-bold mb-4 text-left font-light [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Результаты поиска
            </h2>
            <ResultList />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;

/*
import { useState } from 'react';
import { Burger, Container, TextInput, Button,  Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaSearch } from 'react-icons/fa';

export default function Home() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');
  const toggleColorScheme = () => setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (

        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 min-h-screen flex flex-col">
          <header className="p-4 flex justify-between items-center bg-opacity-70 bg-white shadow-md relative z-10">
            <Burger opened={opened} onClick={toggle} className="md:hidden" />
            <div className="text-xl font-bold flex-1 text-center md:text-left">overseasjobs.com</div>
            <nav className="hidden md:flex space-x-4 justify-center flex-1">
              <a href="#" className="text-gray-700">Найти работу</a>
              <a href="#" className="text-gray-700">Ресурсы</a>
              <a href="#" className="text-gray-700">Разместить вакансию</a>
            </nav>
            <div className="hidden md:flex space-x-4 items-center justify-end flex-1">
             
              <Button>Войти</Button>
            </div>
          </header>
          <Drawer
            opened={opened}
            onClose={close}
            title="Меню"
            padding="md"
            size="sm"
            position="left"
            className="flex flex-col space-y-4 h-full"
          >
            <a href="#" className="text-gray-700">Найти работу</a>
            <a href="#" className="text-gray-700">Ресурсы</a>
            <a href="#" className="text-gray-700">Разместить вакансию</a>
            <TextInput placeholder="Введите текст" />
            <Button>Войти</Button>
          </Drawer>
          <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl font-bold text-white">Найдите лучших работодателей по всему миру</h1>
            <p className="text-white mt-4">Этот сайт собирает информацию из различных социальных сетей, таких как LinkedIn, и с помощью ИИ выбирает наилучших кандидатов среди работодателей.</p>
            <Container className="mt-8 flex flex-col items-center w-full max-w-2xl">
              <div className="bg-white bg-opacity-70 p-6 rounded-md shadow-md w-full">
                <form className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <TextInput placeholder="Введите страну" className="flex-1" />
                    <TextInput placeholder="Введите вакансию" className="flex-1" />
                    <Button type="submit" 
                    //leftIcon={<FaSearch />} 
                    className="bg-blue-500 text-white">Искать</Button>
                  </div>
                </form>
              </div>
            </Container>
            <div className="mt-16 text-white">
              <h2 className="text-2xl font-bold">Популярные запросы</h2>
              <ul className="mt-4 space-y-2">
                <li>Финансовые директора в Германии</li>
                <li>Технологические вакансии во Франции</li>
                <li>Вакансии в сфере продаж в Великобритании</li>
                <li>Менеджеры проектов в Нидерландах</li>
                <li>Менеджеры проектов в Канаде</li>
              </ul>
            </div>
          </main>
          <footer className="bg-gray-800 text-white py-4 text-center">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold">О нас</h3>
                  <ul>
                    <li><a href="#">О OverseasJobs.com</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Ищущим работу</h3>
                  <ul>
                    <li><a href="#">Найти работу</a></li>
                    <li><a href="#">Исследование карьеры</a></li>
                    <li><a href="#">Статьи и советы</a></li>
                    <li><a href="#">Помощь и поддержка</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Работодателям</h3>
                  <ul>
                    <li><a href="#">Разместить вакансию</a></li>
                    <li><a href="#">Войти</a></li>
                    <li><a href="#">Помощь и поддержка</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
     
  );
}*/

/*
import { useState } from 'react';
import { Burger, Container, TextInput, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaSearch } from 'react-icons/fa';

export default function Home() {
  const [opened, { toggle }] = useDisclosure(false);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');
  const toggleColorScheme = () => setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 min-h-screen flex flex-col">
          <header className="p-4 flex justify-between items-center bg-opacity-70 bg-white shadow-md">
            <div className="text-xl font-bold">overseasjobs.com</div>
            <nav className={`md:flex space-x-4 ${opened ? 'block' : 'hidden'}`}>
              <a href="#" className="text-gray-700">Найти работу</a>
              <a href="#" className="text-gray-700">Ресурсы</a>
              <a href="#" className="text-gray-700">Разместить вакансию</a>
            </nav>
            <Burger opened={opened} onClick={toggle} className="md:hidden" />
          </header>
          <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl font-bold text-white">Найдите лучших работодателей по всему миру</h1>
            <p className="text-white mt-4">Этот сайт собирает информацию из различных социальных сетей, таких как LinkedIn, и с помощью ИИ выбирает наилучших кандидатов среди работодателей.</p>
            <Container className="mt-8 flex flex-col items-center w-full max-w-2xl">
              <div className="bg-white bg-opacity-70 p-6 rounded-md shadow-md w-full">
                <form className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <TextInput placeholder="Введите страну" className="flex-1" />
                    <TextInput placeholder="Введите вакансию" className="flex-1" />
                    <Button type="submit" 
                    //leftIcon={<FaSearch />} 
                    className="bg-blue-500 text-white">Искать</Button>
                  </div>
                </form>
              </div>
            </Container>
            <div className="mt-16 text-white">
              <h2 className="text-2xl font-bold">Популярные запросы</h2>
              <ul className="mt-4 space-y-2">
                <li>Финансовые директора в Германии</li>
                <li>Технологические вакансии во Франции</li>
                <li>Вакансии в сфере продаж в Великобритании</li>
                <li>Менеджеры проектов в Нидерландах</li>
                <li>Менеджеры проектов в Канаде</li>
              </ul>
            </div>
          </main>
          <footer className="bg-gray-800 text-white py-4 text-center">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold">О нас</h3>
                  <ul>
                    <li><a href="#">О OverseasJobs.com</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Ищущим работу</h3>
                  <ul>
                    <li><a href="#">Найти работу</a></li>
                    <li><a href="#">Исследование карьеры</a></li>
                    <li><a href="#">Статьи и советы</a></li>
                    <li><a href="#">Помощь и поддержка</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Работодателям</h3>
                  <ul>
                    <li><a href="#">Разместить вакансию</a></li>
                    <li><a href="#">Войти</a></li>
                    <li><a href="#">Помощь и поддержка</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      
  );
}*/

//https://www.overseasjobs.com/
