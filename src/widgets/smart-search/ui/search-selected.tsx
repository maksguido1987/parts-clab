import { useEffect, useState } from "react";
import { ProductLabel } from "../../../entities";
import { ISearchSelected, ISearchSelectValue } from "../interfaces";
import { ESuggestionKeys } from "../store";

interface ISelectedChip {
  /**  Выбранные параметры */
  selected: ISearchSelected;
  /** Метод удаления выбранного параметра */
  onDelete: (type: ESuggestionKeys) => void;
  isSelectCar?: boolean;
}

export const SearchSelected: React.FC<ISelectedChip> = ({
  selected,
  onDelete,
  isSelectCar
}) => {
  const [brand, setBrand] = useState<ISearchSelectValue | undefined>(undefined);
  const [model, setModel] = useState<ISearchSelectValue | undefined>(undefined);
  const [generation, setGeneration] = useState<ISearchSelectValue | undefined>(undefined);
  const [modification, setModification] = useState<ISearchSelectValue | undefined>(undefined);
  const [category, setCategory] = useState<ISearchSelectValue | undefined>(undefined);
  const [vin, setVin] = useState<ISearchSelectValue | undefined>(undefined);

  useEffect(() => {
    setCategory(selected.category);
    setVin(selected.vin);
    setBrand(selected.brand);
    setModel(selected.model);
    setGeneration(selected.generation);
    setModification(selected.modification);
  }, [selected.brand, selected.category, selected.generation, selected.model, selected.modification, selected.vin]);

  return (
    <div className="flex flex-wrap gap-3 sm:gap-5 mt-1 md:mb-5 mb-2 w-full">
      {vin ? (
        <ProductLabel
          name={vin.value}
          onClick={() => onDelete(ESuggestionKeys.vin)}
          isSelectCar={isSelectCar}
        />
      ) : null}
      {brand ? (
        <ProductLabel
          name={brand.value}
          onClick={() => onDelete(ESuggestionKeys.brand)}
          isSelectCar={isSelectCar}
        />
      ) : null}
      {model ? (
        <ProductLabel
          name={model.value}
          onClick={() => onDelete(ESuggestionKeys.model)}
          isSelectCar={isSelectCar}
        />
      ) : null}
      {generation ? (
        <ProductLabel
          name={generation.value}
          onClick={() => onDelete(ESuggestionKeys.generation)}
          isSelectCar={isSelectCar}
        />
      ) : null}
      {modification ? (
        <ProductLabel
          name={modification.value}
          onClick={() => onDelete(ESuggestionKeys.modification)}
          isSelectCar={isSelectCar}
        />
      ) : null}
      {category ? (
        <ProductLabel
          name={category.value}
          onClick={() => onDelete(ESuggestionKeys.category)}
          isSelectCar={isSelectCar}
        />
      ) : null}
    </div>
  );
};
