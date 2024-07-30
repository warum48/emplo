import { LogoGraphic } from './PerspectiveCards.tsx/LogoGraphic';
import PerspectiveCards from './PerspectiveCards.tsx/PerspectiveCards';

export const InfoBlock = () => {
  return (
    <div className="flex-grow px-8 bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-5xl mx-auto my-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-8 text-left font-light">
              Максимальная продуктивность
            </h2>
            <div>
              Наш интерфейс для поиска сотрудников использует искусственный интеллект и значительно упрощает и ускоряет процесс
              подбора персонала. С его помощью вы можете быстро находить наиболее подходящих
              кандидатов, благодаря интуитивно понятному интерфейсу и мощным инструментам для
              фильтрации резюме. Наш сервис предлагает гибкие настройки поиска, возможность
              сохранять и отслеживать интересные анкеты, а также мгновенно связываться с
              кандидатами.
              {/*}Мы предлагаем более высокую точность и эффективность в сравнении с другими платформами, что позволяет вам экономить время и сосредоточиться на развитии вашего бизнеса.*/}
            </div>
          </div>

          <div className="flex flex-col items-center relative">
          <div className="-mt-24 absolute scale-x-150 left-0 top-0 right-0 bottom-0  
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-200/50 via-pink-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-pink-800/30 dark:via-pink-800/0 dark:to-blue-600/0
          "></div>
            <div className="relative z-5">
              <LogoGraphic />
            </div>
            <PerspectiveCards />
          </div>
        </div>
      </div>
    </div>
  );
};
