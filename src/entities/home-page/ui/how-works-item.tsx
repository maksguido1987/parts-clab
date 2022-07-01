import Image from 'next/image';
import { IHomePageStaticData } from '../lib/interfaces';

export const HowWorksItem: React.FC<IHomePageStaticData> = ({ title, src, text, alt }) => {
  return (
    <div className='max-w-xs flex sm:flex-col sm:items-center items-start sm:px-2.5 mb-5 sm:mb-0'>
      <span className='bg-green lg:rounded-2xl rounded-[10px] lg:p-6 md:p-5 sm:p-4 p-2 sm:mb-4 md:mb-7 sm:mr-0 mr-5'>
        <div className='relative lg:w-9 lg:h-9 md:w-7 md:h-7 w-5 h-5'>
          <Image src={src} layout='fill' objectFit='cover' alt={alt} />
        </div>
      </span>
      <div className='sm:text-center'>
        <h4 className='lg:text-lg md:text-base text-sm font-semibold sm:mb-4 mb-1'>
          {title}
        </h4>
        <p className='text-blue lg:text-base text-sm '>{text}</p>
      </div>
    </div>
  );
};
