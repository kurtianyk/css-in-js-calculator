import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderNav = styled.nav.attrs({
  className: 'navbar navbar-dark'
})`
  height: 100px;
  background-color: #162031;
`

const HeaderWrapper = styled.div.attrs({
  className: 'container'
})``

const HeaderRow = styled.div.attrs({
  className: 'row mx-auto'
})``

const HeaderIcon = styled.i.attrs({
  className: 'fa fa-calculator fa-3x text-white my-auto'
})``

const HeaderTitle = styled.div.attrs({
  className: 'h3 ml-3 my-auto text-light'
})``

const Header = (props) => (
  <HeaderNav>
    <HeaderWrapper>
      <HeaderRow>
        <HeaderIcon />
        <HeaderTitle>{props.title}</HeaderTitle>
      </HeaderRow>
    </HeaderWrapper>
  </HeaderNav>
);

Header.defaultProps = {
  title: 'App'
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;