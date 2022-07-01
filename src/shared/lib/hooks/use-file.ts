import { useState } from 'react';

/** Кастомный хук для inpur file. Добавляет в стейт файлы по одному, либо группами */
export const useFile = (
  initialState: string[] = []
): [string[], (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>] => {
  const [state, setState] = useState(initialState);
  async function readFile(
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const files = e.target.files;
    if (files) {
      const filesArray: string[] = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setState([...state, ...filesArray]);
      Array.from(files).map((file) => URL.revokeObjectURL(file.toString()));
    }

    // const file = e.target.files![0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.readAsText(file);
    //   reader.onload = function () {
    //     setState([...state, reader.result as string]);
    //   };
    //   reader.onerror = function () {
    //     console.log(reader.error);
    //   };
    // }
  }
  return [state, readFile];
};
