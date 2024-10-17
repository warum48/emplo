export const TableUtils = {
    getAnyUniqueValues: (data: any[], field: string) => 
        [...new Set<string>(data.map((item:any) => field.split('.').reduce((o, i) => o?.[i], item)))],
    getUniqueValues: <T>(data: T[], field: string): string[] => {
        return [...new Set<string>(
          data.map(item =>
            field.split('.').reduce((o, i) => (o as any)?.[i], item as any)
          )
        )];
      }
}


/*
function generateFilterOptions(data: any[], fields: string[]) {
  return fields.reduce((acc, field) => {
    const uniqueValues = TableUtils.getUniqueValues(data, field)
      .filter((value) => value)
      .map((value) => ({
        value,
        label: value || "Не указано"
      }));
    
    const key = field.split('.').pop(); // Use the last part of the field as the key (e.g., "org_unit" from "job_profile.org_unit")
    acc[key as string] = uniqueValues;
    
    return acc;
  }, {} as Record<string, { value: string; label: string }[]>);
}

Step 2: Use it in your component
You can now call this function inside your useMemo to dynamically generate filter options:

const filterOptions = React.useMemo(() => {
  if (!data) return {};

  const fields = ["job_profile.org_unit", "criteria.speciality", "name"]; // Add any additional fields you want filters for
  return generateFilterOptions(data, fields);
}, [data]);


How it works:
fields.reduce: Loops over the array of field names, and for each field, it gets the unique values, filters them, and formats them into objects with value and label.
field.split('.').pop(): Uses the last part of the field as the key for the filter (for example, "org_unit" from "job_profile.org_unit"). This keeps the filter names short and readable.
DRY principle: Now, whenever you need to add or remove filters for a page, you just modify the fields array without duplicating code.

*/
