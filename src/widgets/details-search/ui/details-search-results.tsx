import React from 'react';
import { ISuggestionItems } from '../../smart-search';
import { DetailsSearchItem } from './details-search-item';

interface IProps {
  show: boolean;
  details: ISuggestionItems[];
  className?: string;
}

export const DetailsSearchResults: React.FC<IProps> = ({ show, details, className }) => {
  const renderItem = (item: ISuggestionItems) => {
    const { id, conditions, slug } = item;
    return <DetailsSearchItem key={id} conditions={conditions} slug={slug} />;
  };

  return (
    <div
      className={`absolute z-10 max-h-80 overflow-auto bg-white py-2 shadow-searchInput sm:min-w-[436.5px] w-full ${
        className ? className : ''
      } ${
        show ? 'block' : 'hidden'
      }`}
    >
      {details.map(renderItem)}
    </div>
  );
};
