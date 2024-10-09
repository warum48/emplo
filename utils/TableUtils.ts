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