const Footer = () => (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 
     max-w-5xl
      "
      // p-4 
      >
        <div>
          <h4 className="font-bold mb-2">О нас</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-500">О сайте</a></li>
            <li><a href="#" className="hover:text-blue-500">Контакты</a></li>
            <li><a href="#" className="hover:text-blue-500">Политика конфиденциальности</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Для соискателей</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Найти работу</a></li>
            <li><a href="#" className="hover:text-blue-500">Карьера</a></li>
            <li><a href="#" className="hover:text-blue-500">Образование</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Для работодателей</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Разместить вакансию</a></li>
            <li><a href="#" className="hover:text-blue-500">Вход для работодателей</a></li>
            <li><a href="#" className="hover:text-blue-500">Помощь и поддержка</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  