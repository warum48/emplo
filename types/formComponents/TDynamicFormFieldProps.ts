export type TDynamicFormFieldProps = {
    form?: any
    size?:string;
    showLabel?:boolean;
    label?:string;
    description?:string;
    required?:boolean;
    placeholder?:string;
    className?:string;
    formFieldName?:string;
    onChange?:any;
    dependency? :string;
    dependencies? :any[];
}