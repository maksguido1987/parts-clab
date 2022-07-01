interface IProps {
  titleLink: string;
  path: string;
}

export const Copyright: React.FC<IProps> = ({ titleLink, path }) => {
  const date = new Date().getFullYear();

  return (
    <div className='w-60 text-xs text-gray-500 text-center md:text-left mb-5 md:mb-0'>
      <span>Простой способ найти и купить детали на свой авто</span>
      <div>
        <span className='mr-1'>&copy;</span>
        <span className='mr-1'>{date}.</span>
        <a href={path}>
          ООО «<span className='text-green transition'>{titleLink}</span>»
        </a>
      </div>
    </div>
  );
};
