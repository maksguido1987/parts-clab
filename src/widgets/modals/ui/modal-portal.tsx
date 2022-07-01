import Image from 'next/image';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import closeIcon from '../../../../public/img/close-popup.svg';
import { PageHeading } from '../../../entities';
import { useClickOutside, useToggle } from '../../../shared/lib';

interface IProps {
  children?: ReactNode;
  show: boolean;
  /** Заголовок модального окна */
  title?: string;
  onClose: () => void;
}

export const ModalPortal: React.FC<IProps> = ({
  children,
  show,
  title,
  onClose,
}) => {
  const [mounted, setMounted] = useToggle();

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };
  const modalWrapperRef = useClickOutside(onClose);

  const modalContent = show ? (
    <div className='fixed inset-0 m-auto z-20 flex items-center justify-center animate-showModal min-w-full min-h-full'>
      <div
        ref={modalWrapperRef}
        className='max-w-lg w-full bg-white shadow-2xl md:p-10 p-5'
        onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className='flex justify-between'>
          {title && <PageHeading title={title} />}
          <div
            className='shrink-0 cursor-pointer hover:scale-125 transition ml-3'
            onMouseDown={handleCloseClick}
          >
            <Image src={closeIcon} alt='close-popup' width={14} height={14} />
          </div>
        </div>
        <div className=''>{children}</div>
      </div>
    </div>
  ) : null;

  useEffect(() => {
    setMounted();
    const app = document.getElementById('__next');
    const body = document.body;
    if (show) {
      app?.classList.add('blur-[2px]');
      body.classList.add('overflow-y-hidden', 'md:pr-[16px]');
    } else {
      app?.classList.remove('blur-[2px]');
      body.classList.remove('overflow-y-hidden', 'md:pr-[16px]');
    }
    return () => setMounted();
  }, [setMounted, show]);

  return mounted
    ? createPortal(modalContent, document.getElementById('modal')!)
    : null;
};

// TODO на случай, если нужно будет отследить устройство
// /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

