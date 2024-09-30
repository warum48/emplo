import { GlobalContext } from '@/global/context/ContextGlobal';

import { notifications } from '@mantine/notifications';
import React from 'react';

type TProps = {
  text: string;
  data: unknown | null | undefined;
  data_code?: number | null | undefined;
  data_details?: string | null | undefined;
  error: any ;//ApolloError | undefined;
  onSuccess?: () => void;
  showOnlyError?: boolean;
  successHeader?: string;
  autoClose?: boolean;
  networkStatus?: number;
  traceId?: string|null;
};

//const ERROR_CODES = [404, 500, 422, ]
const SUCCES_CODES = [200]
const SKIP_CODES =  [250, 270]

export const useMutationNotifications = ({
  text,
  data,
  data_code,
  data_details,
  error,
  networkStatus,
  onSuccess,
  showOnlyError = false,
  successHeader,
  autoClose = true,
  traceId = ''
}: TProps) => {

  const {isDebug} = React.useContext(GlobalContext);

  React.useEffect(() => {
    console.log('useMutationNotifications - data', data);
    if( data_code && SKIP_CODES.includes(data_code) ){
       return;
    }
    if ((networkStatus != undefined && networkStatus == 7) || networkStatus == undefined) { // TODO change 7 to NETWORK_STATUS.refetch or smth like this (check apollo documentation)
      if (data && !showOnlyError) {
        //console.log('==noti-data && !showOnlyError')
       // if (data_code && SUCCES_CODES.includes(data_code)) {
          onSuccess ? onSuccess() : null;
          //console.log('succ');
          notifications.show({
            color: 'cyan',
            title: successHeader || 'Готово',
            message: data_details,
            autoClose: autoClose,
          });
       /* } else if (data_code  || data_details) {
          notifications.show({
            color: 'orange',
            title: 'Ошибка ' + (isDebug? traceId : ''),
            message: data_details || 'Ошибка ' , //'Неизвестная ошибка',
          });
        } */
   /*   } else if ((data_code && !SUCCES_CODES.includes(data_code)) && (data_code || data_details)) {
        notifications.show({
          color: 'orange',
          title: 'Ошибка '  +  (isDebug? traceId : '') ,
          message: data_details || 'Неизвестная ошибка ' ,
        });*/
      }
    } 
  }, [data, networkStatus]);

  React.useEffect(() => {
    console.log('error', error);
    if (error) {
      //    onAdd();
      notifications.show({
        color: 'red',
        title: 'Ошибка ' + (isDebug? traceId : ''),
        message: error?.data?.detail?.[0]?.msg || error?.message || 'Неизвестная ошибка',
      });
    }
  }, [error]);
};

//422, 500
