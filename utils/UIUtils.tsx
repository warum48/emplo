export const UIUtils = {
    getStatusColor: (status: string | null) =>{
        if (!status) return 'gray';

        switch (status) {
          case 'Собеседование':
            return 'green';
          case 'Рассматривает предложения':
                return 'cyan';  
            case 'Активно ищет работу':
                    return 'green';       
          case 'На рассмотрении':
            return 'blue';
          case 'Новый':
            return 'orange';
          case 'Тестовое задание':
            return 'cyan';
          default:
            return 'gray';
        }
      }
      
}