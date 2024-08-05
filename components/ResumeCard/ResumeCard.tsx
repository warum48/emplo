import React from 'react';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';

type TProps = {
  candidateId?: string;
  candidate: any
}

const ResumeCard = ({candidateId, candidate}:TProps) => {
  return (
    <div
      className="=dark:bg-customGray-800   text-gray-900 dark:text-gray-100 text-sm"
      //shadow-lg
    >
      <JSONViewer data={candidate}/>
      <div className="flex border-b border-default">
        <div className="flex justify-between items-center w-3/4 p-4 pl-0 ">
          <div>
            <div>
              <h2 className="text-2xl font-bold">Легина Анна</h2>
              <p>{candidate?.gender == "Мужской" ? "Мужчина" : "Женщина"}, {candidate?.age} лет, родилась 4 февраля 1994</p>
              <p className="text-green-600 dark:text-green-400">Активно ищет работу</p>
            </div>
            <div className="mt-4">
              <p>Краснодар, не готова к переезду, не готова к командировкам</p>
              <p>+7 (908) 24 ... Показать все контакты</p>
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
                Администратор, товаровед, оператор 1С, мерчендайзер.
              </h3>
              <p>50 000 ₽ на руки</p>
              <p>Специализации:</p>
              <ul className="list-disc list-inside">
                <li>Администратор</li>
                <li>Оператор ПК, оператор базы данных</li>
                <li>Товаровед</li>
              </ul>
              <p>Занятость: полная занятость, частичная занятость</p>
              <p>График работы: сменный график, гибкий график, удаленная работа</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Опыт работы 5 лет 8 месяцев</h3>
              <div>
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
              </div>
              {/* Add more job experience similarly */}
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
    </div>
  );
};

export default ResumeCard;
