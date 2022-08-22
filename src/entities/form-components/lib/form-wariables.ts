/** Минимальная длина номера телефона */
export const PHONE_NUMBER_LENGTH = 11;
/** Регулярное выражения для проверки валидности номера телефона (только мобильные) */
export const REG_EXP_VALIDATE_PHONE =
  /^(7)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;