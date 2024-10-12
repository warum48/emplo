import { FieldConfig, FieldObject } from "../FieldConfig";

export const isFieldObject = (field: FieldConfig): field is FieldObject => {
    return 'type' in field && 'name' in field && 'label' in field;
  };
  