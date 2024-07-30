export const About = () => {
    return (
        <div className="flex-grow px-8">
          <div className="w-full max-w-5xl mx-auto my-16 ">
            <h2 className="text-3xl font-bold mb-8 text-left font-light">
              Как искусственный интеллект помогает с подбором персонала?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-start">
                <div className="flex items-start mb-4">
                  <img
                    src="https://img.freepik.com/premium-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48135.jpg?size=626&ext=jpg&ga=GA1.1.2097733976.1717592630&semt=ais_user"
                    //src="https://img.freepik.com/premium-vector/illustrations-concept-artificial-intelligence-ai_71983-1757.jpg?size=626&ext=jpg&ga=GA1.1.2097733976.1717592630&semt=ais_user"
                    alt="AI Illustration"
                    className="w-1/3 h-auto mr-4 opacity-90"
                  />
                  <p className="flex-1">
                    {/*Искусственный интеллект (ИИ) значительно упрощает процесс поиска сотрудников,
                    используя мощные алгоритмы анализа данных и машинного обучения.*/}
                    Искусственный интеллект (ИИ) становится неотъемлемой частью бизнеса,
                    используя мощные алгоритмы анализа данных он оптимизирует любую сферу. Не остался в стороне и рекруитинг. 
                  </p>
                </div>
                <p className="mb-4">
                  Он может анализировать тысячи резюме за считанные минуты, выявляя лучших
                  кандидатов на основе заданных критериев. ИИ помогает с отслеживанием кандидатов,
                  автоматизируя задачи, такие как проверка рекомендаций и планирование
                  собеседований.
                </p>
              </div>
              <div className="text-left">
                <p>
                  Благодаря ИИ компании могут сэкономить время и ресурсы, улучшая качество найма и
                  снижая текучесть кадров. Технологии ИИ становятся неотъемлемой частью современного
                  рекрутинга, обеспечивая более эффективные и точные результаты.
                </p>
                <p className="mt-4">
                  Современные AI-системы могут анализировать данные из различных источников, включая
                  социальные сети, профессиональные форумы и базы данных резюме, что позволяет
                  получать более полную и точную картину каждого кандидата.
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}