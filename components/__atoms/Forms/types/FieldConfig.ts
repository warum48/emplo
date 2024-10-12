export type FieldObject = {
    type: "TextInput" | "Textarea" | "Select" | "RichTextEditor"; // Limiting the type to these specific strings
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    disabled?: boolean;
    options?: { value: string; label: string }[]; // Optional for Select fields
  };
  
  export type FieldComponent = {
    component: React.FC<any>; //any;//React.JSX.Element; //
    props: any;
    customisable?: boolean;
    //dependency?: string; // field is enabled only if this dependency field is not empty
  };
  
  export type FieldConfig = FieldObject | FieldComponent;