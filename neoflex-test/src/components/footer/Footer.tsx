import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "@utils/constants/routes";
import languages from '@assets/images/RU.png';
import telegram from '@assets/images/Telegram.png';
import vk from '@assets/images/VK.png';
import whatsapp from '@assets/images/Whatsapp.png';
import './footer.scss';

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__inner">
          <Link
            className="footer__logo"
            to={PageRoutes.PRODUCTS}
          >
            QPICK
          </Link>
          <div className="footer__column">
            <Link
              className="footer__link"
              to={PageRoutes.PRODUCTS}
            >
              Избранное
            </Link>
            <Link
              className="footer__link"
              to={PageRoutes.SHOPPING_CART}
            >
              Корзина
            </Link>
            <Link
              className="footer__link"
              to={PageRoutes.PRODUCTS}
            >
              Контакты
            </Link>
          </div>
          <div className="footer__privacy">
            <Link
              className="footer__link"
              to={PageRoutes.PRODUCTS}
            >
              Условия сервиса
            </Link>
            <div className="footer__lang">
              <img src={languages} alt="" />
              <div className="footer__text_selected">Рус</div>
              <div className="footer__text">Eng</div>
            </div>
          </div>
          <div className="footer__links">
            <img className='footer__social' src={vk} alt="" />
            <img className='footer__social' src={telegram} alt="" />
            <img className='footer__social' src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
