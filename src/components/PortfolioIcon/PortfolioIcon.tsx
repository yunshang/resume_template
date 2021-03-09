import React from 'react';
import styled from 'styled-components';

interface IData {
  isShow?: boolean,
  id: number,
  sumUp: string,
}
interface IProps {
  data: IData,
} 

interface IState {
}

class PortfolioIcon extends React.Component<IProps, IState> {
  render() {
    return (
      <PortfolioIconContainer>
        <PortfolioTitle>{this.props.data.sumUp}</PortfolioTitle>
      </PortfolioIconContainer>
    );
  }
}

export default PortfolioIcon;

const PortfolioIconContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
// const PortfolioIamage = styled.img`
//   max-width: 100%;
//   vertical-align: middle;
//   margin: auto 0;
// `;
const PortfolioTitle = styled.ul`
  font-size: 14px;
  list-style:none;
  padding-left: 10px;
  height: 100%;
  width: 100%;
  padding-top: 0px;
  margin: 5px;
`;