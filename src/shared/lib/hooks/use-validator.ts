import { useEffect, useState } from 'react';
import { IValidationsProps } from '../../../entities';

export const useInput = (
  initialValue: string,
  validations: IValidationsProps
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const valid = useValidation(value, validations);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setValue(value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    setValue,
    onBlur,
    isDirty,
    ...valid,
  };
};

/** Все состояния ошибок в положении false. Если условия для определенного поля
 *  соблюдаются, либо поле не было передано в компонент, переключаем на true.
 *  Во 2ом useEffect проверяем, валидное ли поле по всем критериям.
 */

export const useValidation = (
  value: string,
  validations: IValidationsProps
) => {
  /** Проверка на пустое поле */
  const [isEmptyError, setIsEmptyError] = useState(false);
  /** Минимальная длинна поля */
  const [minLenghtError, setMinLenghtError] = useState(false);
  /** Максимальная длинна поля */
  const [maxLenghtError, setMaxLenghtError] = useState(false);
  /** Проверка номера телефона */
  const [isValidPhone, setIsValidPhone] = useState(false);
  /** Общее значение валидности поля */
  const [emailError, setEmailError] = useState(false);
  /** Общее значение валидности поля */
  const [isValidInput, setIsValidInput] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value || validations[validation]! === undefined
            ? setIsEmptyError(false)
            : setIsEmptyError(true);
          break;
        case 'minLenght':
          value?.length >= validations[validation]! ||
          validations[validation]! === undefined ||
          !value
            ? setMinLenghtError(false)
            : setMinLenghtError(true);
          break;
        case 'maxLenght':
          +value?.length <= validations[validation]! ||
          validations[validation]! === undefined
            ? setMaxLenghtError(false)
            : setMaxLenghtError(true);
          break;
        case 'isValidPhone':
          +value?.length > +validations[validation]! ||
          validations[validation]! === undefined
            ? setIsValidPhone(false)
            : setIsValidPhone(true);
          break;
        case 'validEmail':
          const regExp =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          regExp.test(String(value).toLowerCase()) ||
          validations[validation]! === undefined ||
          !value
            ? setEmailError(false)
            : setEmailError(true);
          break;
        default:
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (
      isEmptyError ||
      minLenghtError ||
      maxLenghtError ||
      isValidPhone ||
      emailError
    ) {
      setIsValidInput(false);
    } else {
      setIsValidInput(true);
    }
  }, [isEmptyError, isValidPhone, maxLenghtError, minLenghtError, emailError]);

  return {
    isEmptyError,
    minLenghtError,
    maxLenghtError,
    isValidInput,
    isValidPhone,
    emailError,
  };
};
