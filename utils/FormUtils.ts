import { FieldConfig } from "@/components/__atoms/Forms/types/FieldConfig";

export const FormUtils = {
    formValuesToStepDetailsObject: (stepNumber: number, fields: FieldConfig[][], _formValues: any) => {
        const stepFields = fields[stepNumber].map((field:any) => {
          return {
            name: 'label' in field ? field?.label : field?.props?.label,
            value:
              'label' in field
                ? _formValues[field.name as keyof typeof _formValues] || '-'
                : (_formValues[
                    field?.props?.formFieldName as keyof typeof _formValues
                  ] || '-' ),
          };
        });

        const stepDetailsObject = stepFields.reduce(
            (acc, { name, value }) => {
              if (name) {
                acc[name] = value;
              }
              return acc;
            },
            {} as Record<string, string>,
          );
      
          console.log("stepDetailsObject", stepDetailsObject);
          return stepDetailsObject;
    }
}

/*
const formValuesToStepDetails = (stepNumber: number) => {
    // return fields.map((step) => {
    const stepFields = fields[stepNumber].map((field) => {
      return {
        name: "label" in field ? field?.label : field?.props?.label,
        value:
          "label" in field
            ? _formValues[field.name as keyof typeof _formValues]
            : _formValues[
                field?.props?.formFieldName as keyof typeof _formValues
              ],
      };
    });
    //  })
    console.log("stf", stepFields);
    return stepFields;
  };
  */