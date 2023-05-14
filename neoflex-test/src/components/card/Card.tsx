import React, { FC } from 'react';
import { AppDispatch } from 'store/store';
import { useDispatch } from 'react-redux/es/exports';
import { appSelector } from '../../store/hooks';
import { IShopCart } from '@utils/types/IShopCart';
import { addItem } from '../../store/slices/shopCartSlice';
import star from '@assets/images/star.png';
import './card.scss';

interface ICardProps {
  id: number,
  img: string;
  title: string;
  price: number;
  lastPrice?: number;
  rate: number;
  wireless: boolean;
}

export const Card: FC<ICardProps> = ({ id, img, title, price, rate, wireless, lastPrice }) => {
  const imageSrc = require(`../../assets/images/${img}`).default;
  const cards = appSelector<IShopCart[]>((state) => state.shopCart.cards);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddItem = () => {
    dispatch(addItem({
      id,
      img,
      title,
      price,
      number: 1
    }));
  }
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__image">
          <img src={imageSrc} alt="" />
        </div>
        <div className="card__bottom">
          <div className="card__line">
            <div className="card__text">{title}</div>
            <div className="card__price">
              <div className="card__text card__text_yellow">{`${price} ₽`}</div>
              {
                lastPrice &&
                  <div className="card__text card__text_crossed">{`${lastPrice} ₽`}</div>
              }
            </div>
          </div>
          <div className="card__line">
            <div className="card__rate">
              <img src={star} alt="" />
              <div className="card__text card__text_gray">{rate}</div>
            </div>
            <div className="card__text card__text_buy" onClick={handleAddItem}>Купить</div>
          </div>
        </div>
      </div>
    </div>
  )
}
