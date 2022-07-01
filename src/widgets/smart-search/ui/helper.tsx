type Props = {
  /** Флаг подсказки для поиска машины, в противном случае будет подсказка по деталям */
  isCarHelper: boolean;
  /** Обработчик нажатия по подсказке */
  onChange: (value: string) => void;
}

export const Helper: React.FC<Props> = ({ onChange, isCarHelper }) => {
  const renderHelper = (value: string) => {
    return (
      <span
        className="sm:text-base font-semibold border-b border-dotted border-green cursor-pointer"
        onClick={() => onChange(value)}
      >{` ${value} `}</span>
    );
  };

  const renderBody = () => {
    if (isCarHelper) {
      return (
        <>
          Например, вин-номер {renderHelper("WVWZZZ3CZ9P065611")} или марка {renderHelper("Audi")}
        </>
      );
    }
    return (
      <>
        Например, номер детали {renderHelper('QF20Q00028')}
      </>
    );
  }
  
  return (
    <div className="text-xs sm:text-sm my-5 w-full sm:w-auto">
      {renderBody()}
    </div>
  );
};
