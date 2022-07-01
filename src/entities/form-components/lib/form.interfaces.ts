export interface IFormFieldProps {
  type?: string;
  value: string | undefined;
  setValue: (value: string) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: () => void;
  disabled?: boolean;
  // setDisabled?: (value: boolean) => void;
  placeholder: string;
  className?: string;
  /** Пустое ли поле */
  isEmptyError?: boolean;
  /** Флаг, был ли пользователь в поле или нет, вклюается по событию onBlur.
   *  После того, как был и ушел, проверка происходит по onChange. */
  isDirty?: boolean;
  /** Ошибка максимальной длины */
  maxLenghtError?: boolean;
  /** Ошибка минимальной длины */
  minLenghtError?: boolean;
  /** Ошибка проверки email */
  emailError?: boolean;
}

export interface IValidationsProps {
  isEmpty?: boolean;
  minLenght?: number;
  maxLenght?: number;
  isValidPhone?: boolean;
  isValidInput?: boolean;
  validEmail?: boolean;
}
