import React, { FC, useState } from 'react';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux/es/exports';
import { appSelector } from '../../../store/hooks';
import remove from '@assets/images/trash.png';
import plus from '@assets/images/plus.png';
import minus from '@assets/images/minus.png';
import './shopCard.scss'
import { incrementNumber, decrementNumber, removeItem } from '../../../store/slices/shopCartSlice';

interface IShopCardProp {
  id: number,
  img?: string;
  title?: string;
  price?: number;
  number?: number;
}

export const ShopCard: FC<IShopCardProp> = ({ id, img, title, price, number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const imageSrc = require(`../../../assets/images/${img}`).default;
  
  const increment = () => {
    if (number + 1 < 100) {
      dispatch(incrementNumber(id));
    }
  }

  const decrement = () => {
    if (number - 1 > 0) {
      dispatch(decrementNumber(id));
    }
  }

  const deleteItem = () => {
    dispatch(removeItem(id));
  }
  return (
    <div className='shop-card'>
      <div className='shop-card__wrapper'>
        <div className='shop-card__top'>
          <div className='shop-card__left'>
            <div className='shop-card__overflow'>
              <img className='shop-card__avatar' src={imageSrc  } alt='' />
            </div>
            <div className='shop-card__description'>
              <div className='shop-card__title'>{title}</div>
              <div className='shop-card__price'>{`${price} ₽`}</div>
            </div>
          </div>
          <img className='shop-card__button' src={remove} alt='' onClick={deleteItem}/>
        </div>
        <div className='shop-card__bottom'>
          <div className='shop-card__counter'>
            <img className='shop-card__button' src={minus} onClick={decrement} alt='' />
            <div className='shop-card__number'>{number}</div>
            <img className='shop-card__button' onClick={increment} src={plus} alt='' />
          </div>
          <div className='shop-card__sum'>{`${price * number} ₽`}</div>
        </div>
      </div>
    </div>
  )
}
