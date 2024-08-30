export type EventsCalendar = {
    accessTicketClientId?: string | null;
    doctorMcentersId?: number | null;
    doctorsFio?: string | null;
    doctorsPosition?: string | null;
    isCanceled?: boolean | null;
    isDone?: boolean | null;
    isPaid?: boolean | null;
    medicalCenterAddress?: string | null;
    medicalCenterId?: number | null;
    medicalCenterName?: string | null;
    paymentId?: number | null;
    paymentMethod?: string | null;
    roomNumber?: string | null;
    serviceDateAndTime?:  null | string; //Date |
    serviceDuration?: string | null;
    serviceId?: number | null;
    serviceName?: string | null;
    servicePreparationRules?: string | null;
    userBirthDate?: string| null; //
    userFio?: string | null;
    userId?: number | null;
    userServiceCartClientId?: string | null;
  };
  