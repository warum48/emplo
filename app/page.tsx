'use client';

import Head from 'next/head';
import Header from '@/components/Header/Header';
import { Input, Button, Transition, Checkbox } from '@mantine/core';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import React from 'react';
import { ResultList } from '@/components/ResultList/ResultList';

import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ParticlesComponent } from '@/components/Particles/Particles';
import { PopularSearches } from '@/components/PopularSearches/PopularSearches';
import { About } from '@/components/About/About';
import { QuickSearch } from '@/components/JobSearchForm/QuickSearch';
import { IntroText } from '@/components/_main/IntroText';
import { ExpandSearchButton } from '@/components/_main/ExpandSearchButton';
import { MainBlockContainer } from '@/components/_main/MainBlockContainer';

const Home = () => {
  const [resultState, setResultState] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const mainRef = React.useRef<HTMLDivElement>(null);
  const [extendedSearch, setExtendedSearch] = React.useState(false);
  const [smallGradientPadding, setSmallGradientPadding] = React.useState(false); 

  const onSearch = () => {
    setResultState(!resultState);
    setIsAnimating(true);
  };

  React.useEffect(() => {
    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target === mainRef.current) {
        setIsAnimating(false);
        console.log('Transition complete');
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

    //particlesJS.load('particles-js', '/assets/particles.json', function() {
    //  console.log('callback - particles.js config loaded');
    //});
  }, []);

  return (
    <>
    <Header /> 
      <Head>
        <title>sotrudnik.ru</title>
        <meta name="description" content="overseasjobs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        className="fixed z-50 bottom-5 right-5"
        onClick={() => {
          setResultState(!resultState);
          setIsAnimating(true);
        }}
      >
        switch view
      </Button>

      <div
        className={` 
          pt-20
          transition-all duration-400 grid grid-cols-1 gap-0 
             ${(resultState && isAnimating) || !resultState ? 'md:grid-cols-1' : 'md:grid-cols-3 xl:grid-cols-4'}  `}
      >
        <div className="col-span-1">
          <MainBlockContainer resultState={resultState} isAnimating={isAnimating} mainRef={mainRef}>
            {!resultState && (
              <div
               // id="particles-js"
                className={`absolute top-0 right-0 h-full w-1/4 overflow-hidden transition-all duration-500
                                ${resultState || isAnimating ? 'opacity-0' : 'opacity-100'}
                                `}
              >
                <ParticlesComponent />
              </div>
            )}

            <div className=" w-full  ">
              <Transition
                mounted={!resultState}
                transition="fade"
                duration={500}
                timingFunction="ease"
                onExited={() => {
                  console.log('EXITED');
                  setIsAnimating(false);
                }}
                onEntered={() => {
                  console.log('EXITED');
                  setIsAnimating(false);
                }}
              >
                {(styles) => (
                  <div style={styles}>
                    {((resultState && isAnimating) || !resultState) && (
                      <div
                        className={`w-full max-w-5xl flex m-auto flex-col justify-start transition-all duration-700
                                        ${resultState ? 'opacity-0' : 'opacity-100'}
                                        `}
                      >
                        <IntroText />
                        <div
                          className={`flex justify-start items-center space-x-4 w-full p-4 
                                      transition-all duration-500
                                      bg-opacity-30 dark:bg-gray-900 
                                      bg-white   
                                      ${extendedSearch ? 'bg-opacity-70 dark:bg-opacity-85' : 'bg-opacity-30 dark:bg-opacity-85'} 
                                      z-10`}
                        >
                          {extendedSearch ? (
                            <JobSearchForm gridCols={3} key={'extendedSearch'} />
                          ) : (
                            <QuickSearch onSearch={onSearch} />
                          )}
                        </div>
                        <ExpandSearchButton
                          extendedSearch={extendedSearch}
                          setExtendedSearch={setExtendedSearch}
                        />
                        <PopularSearches onSearch={onSearch}  />
                      </div>
                    )}
                  </div>
                )}
              </Transition>

              <Transition
                mounted={resultState}
                transition="fade"
                duration={500}
                timingFunction="ease"
                enterDelay={400}
              >
                {(styles) => (
                  <div
                    style={styles}
                    className={`w-full max-w-5xl flex flex-col justify-start
                                    ${isAnimating ? ' absolute ' : ' relative'}
                                    `}
                  >
                    <div
                      className={`bg-white bg-opacity-95 text-gray-900  dark:text-white dark:bg-customGray-950/85            
                                       
                                    ${smallGradientPadding ? 'mx-0.5 -my-[76px] ' : 'mx-4  -my-16 '}
                                      `
                                    // mx-0.5 -my-16
                                    // mx-1 -my-16
                                    }
                    >
                      {resultState && <><JobSearchForm />
                      <div className='text-xs flex p-4 gap-2'>
                        <Checkbox 
                        checked={smallGradientPadding}
                        onChange={(event) => setSmallGradientPadding(event.currentTarget.checked)}
                        />
                        Я серьезный белый гетеросексуальный мужик, поменьше этих ваших розовых радуг пожалуйста</div>
                        
                      </>}
                    </div>
                  </div>
                )}
              </Transition>
            </div>
          </MainBlockContainer>
        </div>
        {resultState && !isAnimating   &&(
          <div
            className="col-span-1 md:col-span-2 xl:col-span-3  bg-gray-100 p-8 bg-right-top-50
                          dark:bg-opacity-50
                          dark:bg-customGray-900"
                          //mt-16
          >
            <h2 className="text-neutral-700 dark:text-neutral-50 text-3xl font-bold mb-4 text-left font-light [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Результаты поиска
            </h2>
            <ResultList />
          </div>
        )}
      </div>
      <About />
      <Footer />
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
