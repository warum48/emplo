import React from 'react';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';
import { Preloader } from '../__atoms/Preloader/Preloader';
import { Candidate } from '@/types/Candidate';
import { Mock } from '../Mock/Mock';

type TProps = {
  candidateId?: string;
  candidate: Candidate;// | null;
}

const ResumeCard = ({candidateId, candidate}:TProps) => {

 
  
  const months: string[] = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  
  function getAgeSuffix(age: number): string {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "лет";
    }
  
    if (lastDigit === 1) {
      return "год";
    }
  
    if (lastDigit >= 2 && lastDigit <= 4) {
      return "года";
    }
  
    return "лет";
  }
  
  function formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth(); // getMonth() returns month index from 0 to 11
    const year = date.getFullYear();
  
    return `${day} ${months[month]} ${year}`;
  }

  function formatGender(gender: string): string {
    if (gender === "Мужской") {
      return "Мужчина";
    } else if (gender === "Женской") {
      return "Женщина";
    } else {
      return "";
    }
  }

  function formatBorn(gender: string): string {
    if (gender === "Мужской") {
      return "родился";
    } else if (gender === "Женской") {
      return "родилась";
    } else {
      return "";
    }
  }
  
  const ageSuffix = getAgeSuffix(candidate?.age);
  const formattedDate = formatDateString(candidate?.birth_date);
  
  //const result = `${candidate.age} ${ageSuffix}, родился ${formattedDate}`;
  //console.log(result); // Output: "36 лет, родился 28 февраля 1988"
  
  return (
    
    <div
      className="=dark:bg-customGray-800   text-gray-900 dark:text-gray-100 text-sm h-full "
      //shadow-lg
    >
      
      {candidate ? (<>
      <div className="flex border-b border-default ">
        <div className="flex justify-between items-center w-3/4 p-4 pl-0 ">
          <div>
            <div>
              <h2 className="text-2xl font-bold">Легина Анна</h2>
              <p>{formatGender(candidate?.gender)} {formatGender(candidate?.gender) ? ', ' : ''} {candidate?.age} {ageSuffix}, {formatBorn(candidate?.gender)} {formattedDate}`</p>
              <p className="text-green-600 dark:text-green-400">{candidate?.resume_status}</p>
            </div>
            <div className="mt-4">
              <p>{candidate?.area} , <Mock>не готова к переезду, не готова к командировкам</Mock></p>
              <p><Mock>+7 (908) 244-44-44</Mock></p>
            </div>
          </div>
          <img
            className="w-24 h-24 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>

        <div className="w-1/4  border-l p-6 border-default">buts</div>
      </div>
      <div className="flex ">
        <div className="flex justify-between items-center w-3/4 p-4 pl-0 ">
          <div>
            <div className="mt-0">
              <h3 className="text-xl font-semibold">
                {candidate?.professional_roles}
              </h3>
              <p>{candidate?.salary} ₽ на руки</p>
              <p>Специализации:</p>
              <Mock>
              <ul className="list-disc list-inside">
                <li>Администратор</li>
                <li>Оператор ПК, оператор базы данных</li>
                <li>Товаровед</li>
              </ul>
              <p>Занятость: полная занятость, частичная занятость</p>
              <p>График работы: сменный график, гибкий график, удаленная работа</p>
              </Mock>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Опыт работы {candidate?.total_experience} {getAgeSuffix(candidate?.total_experience)}</h3>
              <Mock><div>
                <p>Апрель 2024 — по настоящее время</p>
                <p className="font-bold">СнэкМания</p>
                <p>Продавец-кассир</p>
                <p>Прием товара, учет товара, выкладка, ротация</p>
              </div>
              <div>
                <p>Январь 2022 — июнь 2023</p>
                <p className="font-bold">МАГНИТ, розничная сеть</p>
                <p>Старший продавец</p>
                <p>Организация торговли</p>
              </div></Mock>
              {/* Add more job experience similarly */}
              <div className="text-xs dark:text-gray-400 text-gray-800">
              {candidate?.experience?.filter(item => item?.company && item?.position)
        .map((item, index) => (
          <div key={index}>
            <b>{item?.company}</b> - {item?.position}
          </div>
        ))}
        </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Ключевые навыки</h3>
              <p>1C, Ford, Excel</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Среднее специальное образование</h3>
              <p>2013 — Краевой Индустриальный Техникум</p>
              <p>Оператор ЭВМ</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Знание языков</h3>
              <p>Русский — Родной</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Гражданство, время в пути до работы</h3>
              <p>Гражданство: Россия</p>
              <p>Разрешение на работу: Россия</p>
              <p>Время в пути до работы: не имеет значения</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-gray-100 dark:bg-customGray-950 border-l border-default p-6 ">lala</div>
      </div>
      </>) : <div className='flex justify-center items-center w-full h-full'><Preloader /></div>}
      <JSONViewer data={candidate}/>
    </div>
  );
};

export default ResumeCard;
