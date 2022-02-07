import * as React from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from './styles';

import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyles />
      <S.LayoutWrapper>
        <TransitionPortal level="top">
          <Sidebar />
        </TransitionPortal>
        <S.LayoutMain>{children}</S.LayoutMain>
        <TransitionPortal level="top">
          <MenuBar />
        </TransitionPortal>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout