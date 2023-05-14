import React, { FC, useEffect } from 'react';
import './layout.scss'
import { Outlet } from 'react-router';
import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';

export const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
