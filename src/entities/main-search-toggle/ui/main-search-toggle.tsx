interface IProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick: () => void;
}

export const MainSearchToggle: React.FC<IProps> = ({ text, active, icon, onClick }) => {

  const clickHandle = () => {
    !active && onClick();
  }

  return (
    <div
      onClick={clickHandle}
      className={`flex items-center p-5px rounded-full w-full sm:w-auto ${
        active ? 'bg-green-light cursor-default' : 'bg-white border border-gray-200 hover:border-green cursor-pointer'
      } `}
    >
      <div
        className={`flex items-center justify-center w-11 h-11 rounded-full ${
          active ? 'bg-green' : 'bg-gray-200'
        }`}
      >
        {icon}
      </div>
      <span className={`p-1 ${active ? 'text-green' : ''}`}>{text}</span>
    </div>
  );
};
