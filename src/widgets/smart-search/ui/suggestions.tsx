import { ESuggestionKeys, ISuggestionItems, ISuggestions } from '../store';
import { SuggestionItem } from './suggestion-item';

interface IProps {
  suggestions: ISuggestions;
  show: boolean;
  onSelect: (type: ESuggestionKeys, item: ISuggestionItems) => void;
  isSelectCar?: boolean;
}

export const Suggestions: React.FC<IProps> = ({
  show,
  onSelect,
  suggestions,
  isSelectCar,
}) => {
  const {
    brand,
    model,
    generation,
    modification,
    category,
    details,
    vin,
    loading,
  } = suggestions;

  const isEmpty = Object.values(suggestions).every(
    (value: ISuggestionItems[]) => !value.length
  );
  // Если подсказки пустые, то прячем селектор
  if (isEmpty && !loading) {
    return null;
  }

  return (
    <div
      className={`absolute top-[50px] z-10 max-h-80 w-full overflow-auto bg-white shadow-searchInput ${
        show ? 'block' : 'hidden'
      } ${isSelectCar ? '' : 'sm:w-[568px] md:top-[66px] lg:w-[758px] pb-6'}`}
    >
      <div>
        {isEmpty && loading ? (
          <SuggestionItem onSelect={() => {}} title='ПОИСК...' items={[]} />
        ) : null}
        {vin && vin.length ? (
          <SuggestionItem
            onSelect={(item) => onSelect(ESuggestionKeys.vin, item)}
            title='Автомобиль по VIN-номеру'
            items={vin}
          />
        ) : null}
        {brand && brand.length ? (
          <SuggestionItem
            onSelect={(item) => onSelect(ESuggestionKeys.brand, item)}
            title='Марка'
            items={brand}
          />
        ) : null}
        {model && model.length ? (
          <SuggestionItem
            onSelect={(item) => onSelect(ESuggestionKeys.model, item)}
            title='Модель'
            items={model}
          />
        ) : null}
        {generation && generation.length ? (
          <SuggestionItem
            onSelect={(item) => onSelect(ESuggestionKeys.generation, item)}
            title='Поколение'
            items={generation}
          />
        ) : null}
        {modification && modification.length ? (
          <SuggestionItem
            onSelect={(item) => onSelect(ESuggestionKeys.modification, item)}
            title='Двигатель'
            items={modification}
          />
        ) : null}
        {category && category.length && !isSelectCar ? (
          <SuggestionItem
            onSelect={(item) => onSelect(ESuggestionKeys.category, item)}
            title='Категория'
            items={category}
          />
        ) : null}
        {details && details.length && !isSelectCar ? (
          <SuggestionItem
            onSelect={(item) => onSelect(ESuggestionKeys.detail, item)}
            title='Деталь'
            items={details}
          />
        ) : null}
      </div>
    </div>
  );
};
