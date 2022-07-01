import { useRouter } from 'next/router';
import React from 'react';
import { IBreadcrumpsData } from '../lib/breadcrupms-data';
import { BreadcumpsLink } from './breadcumps-link';

interface IProps {
  breadcrumpsData: IBreadcrumpsData[];
  className?: string;
}

export const Breadcumps: React.FC<IProps> = React.memo(
  ({ breadcrumpsData, className }) => {
    const router = useRouter();

    const renderItems = (item: IBreadcrumpsData, idx: number) => {
      const isLastItem = breadcrumpsData.length - 1 === idx;
      const { name, slug } = item;

      return (
        <BreadcumpsLink
          isLast={isLastItem}
          key={idx}
          name={name}
          onClick={slug && !isLastItem ? () => router.push(slug) : undefined}
        />
      );
    };
    return (
      <nav className={`${className ? className : ''}`}>
        <ul className='flex flex-wrap'>{breadcrumpsData.map(renderItems)}</ul>
      </nav>
    );
  }
);

Breadcumps.displayName = 'Breadcumps';
