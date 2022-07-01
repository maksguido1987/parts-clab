import Image from 'next/image';
import footerCardsLogo from '../../../../public/img/header-footer/footer-cards-logo.png';

export const FooterCardsLogo = () => {
  return (
    <div className='order-last md:order-none'>
      <Image src={footerCardsLogo} alt='app-store' />
    </div>
  )
}
