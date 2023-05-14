import React, { FC, useEffect } from "react";
import { AppDispatch } from 'store/store';
import { useDispatch } from 'react-redux/es/exports';
import { appSelector } from '../../store/hooks';
import { IShopCart } from "@utils/types/IShopCart";
import { setItems } from "../../store/slices/shopCartSlice";
import { Link } from "react-router-dom";
import { PageRoutes } from "@utils/constants/routes";
import favourite from "@assets/images/fav.png";
import shopcard from "@assets/images/shop_card.png"
import "./header.scss";

export const Header: FC = () => {
  const cards = appSelector<IShopCart[]>((state) => state.shopCart.cards);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const items: IShopCart[] = JSON.parse(localStorage.getItem('items'));
    if (items) {
      dispatch(setItems(items));
    }
  }, []);

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__inner">
          <Link
            className="header__logo"
            to={PageRoutes.PRODUCTS}
          >
            QPICK
          </Link>
          <div className="header__icons">
            <Link
              className="header__link"
              to={PageRoutes.PRODUCTS}
            >
              <img className="header__icon" src={favourite} alt="" />
              <div className="header__number">5</div>
            </Link>
            <Link
              className="header__link"
              to={PageRoutes.SHOPPING_CART}
            >
              <img className="header__icon"  src={shopcard} alt="" />
              <div className="header__number">{cards.length}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
