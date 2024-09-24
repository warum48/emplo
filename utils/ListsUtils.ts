
export function convertArrayToData(array: string[]): { value: string; label: string }[] {
    return array.map((item) => {
      // const decodedItem = decodeURIComponent(item);
      return {
        value: item,
        label: item,
      };
    });
  }
