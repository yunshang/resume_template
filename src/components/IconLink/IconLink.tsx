import React from 'react';
import styled from 'styled-components';

interface IProps {
  href: string,
  icon: string,
} 

interface IState {
} 

class IconLinkComponent extends React.Component<IProps, IState>{
  render() {
    return (
      <IconLink href={this.props.href}><i className={this.props.icon} /></IconLink>
    );
  }
}

export default IconLinkComponent;

const IconLink = styled.a`
  border: 2px solid #33373d;
  color: #33373d;
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  transition: all .3s ease-in-out 0s;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  -ms-transition: all .3s ease-in-out 0s;
  -webkit-transition: all .3s ease-in-out 0s;
  -moz-transition: all .3s ease-in-out 0s;
  -o-transition: all .3s ease-in-out 0s;
  &:hover {
    border: 2px solid #B52E31;
    color: #B52E31;
  }
  i {
    line-height: 33px;
    font-size: 14px;
  }
`;