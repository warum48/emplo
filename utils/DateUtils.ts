export const DateUtils = {
    getMonthName: (month: number): string => {
        const monthNames = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ];
        return monthNames[month - 1];
    },
    DateAndTimeAreLaterThanNow: (date:string) => {
        const d = new Date(date.split('T')[0]);
        d.setHours(Number(date.split('T')[1].split(':')[0]), Number(date.split('T')[1].split(':')[1]), Number(date.split('T')[1].split(':')[2].split('+')[0]));
        const now = new Date();
        return d.getTime() > now.getTime();
    },
    formatDateFullToRuWithTime : (dateString:string | undefined | null):string  => {
        if(dateString){
          const dat = dateString.split('T')[0]
    
        const parts = dat.split('-');
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];
    
        const time = dateString.split('T')[1].substring(0, 5);
    
        return `${day}.${month}.${year} ${time}`;
        }else{
          return ''
        }
      }, 
      formatDateWithTimeToTime: (dateString:string | undefined | null):string => {
        if(dateString){
          const parts = dateString.split('T');
          const time = parts[1].substring(0, 5);
          return time;
        }else{
          return ''
        }
      } 
}