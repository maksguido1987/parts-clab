type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
  isLast?: boolean;
};

export function TopBarLink({ text, onClick, className, isLast }: Props) {
  return (
    <li
      className={`items-center cursor-pointer h-full md:flex duration-150 whitespace-nowrap ${
        isLast ? 'md:text-right pr-0' : 'lg:pr-8 md:pr-5 xl:pr-10'
      }${className ? ` ${className}` : ''}`}
    >
      <a onClick={onClick}>{text}</a>
    </li>
  );
}
