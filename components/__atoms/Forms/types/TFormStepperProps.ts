export type TFromStepperProps = {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  //  onNext: (values: any) => void;
    stepNames: string[];
    _formValues:any;
    setFormValues:React.Dispatch<React.SetStateAction<any>>
  };