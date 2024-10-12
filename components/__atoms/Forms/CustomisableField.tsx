
import { TextInput } from "@mantine/core";
import React from "react";
import { JSONViewer } from "../JSONViewer/JSONViewr";
import { FieldComponent } from "./types/FieldConfig";

type TProps = {
  field: FieldComponent;
  form: any;
};

export const CustomisableField = ({ field, form }: TProps) => {
  const [customized, setCustomized] = React.useState(false);
  return (
    <div>
      {customized ? (
        <TextInput form={form} {...field.props} {...form.getInputProps(field.props.formFieldName)} />
      ) : (
        
        <field.component form={form} {...field.props} {...form.getInputProps(field.props.formFieldName)}  />
      )}

      <div
        className="mt-1 cursor-pointer text-xs underline opacity-50"
        onClick={() => {
          setCustomized(!customized);
        }}
      >
        {customized ?"Выбрать из списка" : "Заполнить вручную"  }
      </div>
    {/*}  <JSONViewer data={form.values} />
      <JSONViewer data={field.props} /> */}
     
    </div>
  );
};
