import React, { Fragment, FC, Children } from 'react';
import Footer from './Footer/Footer';

interface Props {}

const Layout: FC<Props> = (props) => {
  return (
    <>
      <main id='main'>{props.children}</main>;
      <Footer />
    </>
  );
};

export default Layout;
