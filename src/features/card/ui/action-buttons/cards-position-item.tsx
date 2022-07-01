import { ReactNode } from 'react';

interface IProps {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

export const CardsPositionItem: React.FC<IProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        className ? className : ''
      } w-10 h-10 rounded-md flex items-center justify-center p-3 mr-5 cursor-pointer`}
    >
      {children}
    </div>
  );
};
