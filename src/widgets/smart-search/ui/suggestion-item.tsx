import { ISuggestionItems } from "../store";
import { BracketIcon, SearchIcon } from "../../../entities";

interface IProps {
  title: string;
  items: ISuggestionItems[];
  onSelect: (item: ISuggestionItems) => void;
}

export const SuggestionItem: React.FC<IProps> = ({
  title,
  items,
  onSelect,
}) => {

  const itemsRender = (item: ISuggestionItems) => {
    const { id, conditions } = item;
    const name = conditions[0];

    return (
      <div
        key={id}
        onClick={() => onSelect(item)}
        className="flex justify-between items-center border-b-2 leading-9 border-gray-100 hover:bg-gray-50 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <SearchIcon />
          <span className="uppercase">{name}</span>
        </div>
        <span>
          <BracketIcon />
        </span>
      </div>
    );
  };

  return (
    <div className="md:px-6 px-3">
      <div className="text-center font-bold leading-9 pt-4">{title}</div>
      {items.map(itemsRender)}
    </div>
  );
};
