import React, { FC, useState, useEffect } from 'react';
import { Card } from '@components/card/Card';
import { headphones } from '@utils/constants/headphones';
import { IHeadphone } from '@utils/types/IHeadphone';
import './products.scss';

export const Products: FC = () => {

  return (
    <div className='products'>
      <div className='products__wrapper'>
        <div className='products__inner'>
          <div className='products__title'>Наушники</div>
          <div className='products__list'>
            {
              headphones.map((headphone, id) => {
                if (!headphone.wireless) {
                  return (
                    <Card
                      key={id}
                      id={headphone.id}
                      img={headphone.img}
                      title={headphone.title}
                      price={headphone.price}
                      lastPrice={headphone.lastPrice}
                      rate={headphone.rate}
                      wireless={headphone.wireless}
                    />
                  )
                }
              })
            }
          </div>
          <div className='products__title'>Беспроводные наушники</div>
          <div className='products__list'>
            {
              headphones.map((headphone, id) => {
                if (headphone.wireless) {
                  return (
                    <Card
                      id={headphone.id}
                      key={id}
                      img={headphone.img}
                      title={headphone.title}
                      price={headphone.price}
                      lastPrice={headphone.lastPrice}
                      rate={headphone.rate}
                      wireless={headphone.wireless}
                    />
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
