import React, { FC } from 'react';
import { AppDispatch } from 'store/store';
import { useDispatch } from 'react-redux/es/exports';
import { appSelector } from '../../store/hooks';
import { IShopCart } from '@utils/types/IShopCart';
import { ShopCard } from '@pages/shopping_cart/shop_card/ShopCard';
import './shoppingcart.scss'

export const ShoppingCart: FC = () => {
  const cards = appSelector<IShopCart[]>((state) => state.shopCart.cards);
  const dispatch = useDispatch<AppDispatch>();
  const totalSum: number = cards.reduce((sum, current) => sum + (current.price * current.number), 0);

  return (
    <div className='shopcart'>
      <div className='shopcart__wrapper'>
        <div className='shopcart__inner'>
          <div className='shopcart__title'>Корзина</div>
          {
            cards.length
              ?
              <>
                <div className='shopcart__cards'>
                  <div className='shopcart__list'>
                    {
                      cards.map((card) => {
                        return (
                          <ShopCard
                            id={card.id}
                            img={card.img}
                            title={card.title}
                            price={card.price}
                            number={card.number}
                          />
                        )
                      })
                    }
                  </div>
                  <div className='sum'>
                    <div className='sum__inner'>
                      <div className='sum__top'>
                        <div className='sum__title'>ИТОГО</div>
                        <div className='sum__number'>{`${totalSum} ₽`}</div>
                      </div>
                      <div className='sum__bottom'>
                        Перейти к оформлению
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              <>
              <div className='shopcart__empty'> В вашей корзине пока что не находится ни одного товара.</div>
              </>
          }
        </div>
      </div>
    </div>
  )
}
