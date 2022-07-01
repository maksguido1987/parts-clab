import React from 'react'
import { YandexMap } from '../../../widgets'

export const DeliveryMap = () => {
  return (
    <div className=''>
      <YandexMap center={[55.55, 37.00]} zoom={9} className='h-[385px] lg:h-[340px]' />
    </div>
  )
}