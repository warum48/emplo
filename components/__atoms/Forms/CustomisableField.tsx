import {
  FieldComponent,
  FieldConfig,
} from "@/components/_dashboard/profiles/create/FormTemplate";
import { TextInput } from "@mantine/core";
import React from "react";
import { JSONViewer } from "../JSONViewer/JSONViewr";

type TProps = {
  field: FieldComponent;
  form: any;
};

export const CustomisableField = ({ field, form }: TProps) => {
  const [customized, setCustomized] = React.useState(false);
  return (
    <div>
      {customized ? (
        <field.component form={form} {...field.props} {...form.getInputProps(field.props.formFieldName)}  />
      ) : (
        <TextInput form={form} {...field.props} {...form.getInputProps(field.props.formFieldName)} />
      )}

      <div
        className="mt-2 cursor-pointer text-xs underline opacity-50"
        onClick={() => {
          setCustomized(!customized);
        }}
      >
        {customized ? "Заполнить вручную" : "Выбрать из списка"}
      </div>
    {/*}  <JSONViewer data={form.values} />
      <JSONViewer data={field.props} /> */}
     
    </div>
  );
};
