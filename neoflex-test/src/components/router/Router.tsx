import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageRoutes } from '@utils/constants/routes';
import { Layout } from '@components/layout/Layout';
import { Products } from '@pages/products/Products';
import { Favourites } from '@pages/favourites/Favourites';
import { ShoppingCart } from '@pages/shopping_cart/ShoppingCart';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.LAYOUT} element={<Layout />}>
            <Route path={PageRoutes.PRODUCTS} element={<Products />} />
            <Route path={PageRoutes.SHOPPING_CART} element={<ShoppingCart />} />
            <Route path='/' element={<Navigate to='/products' />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
