import React from 'react';
import styled from 'styled-components';

import { Divider } from '../../components';

interface IProps {
  readonly showMore: boolean,
  icon?: string,
  title?: string,
  onClick?: () => void,
  isMoreShown: boolean,
  readonly show: boolean,
} 

interface IState {
}

class CardContainer extends React.Component<IProps, IState> {
  public static defaultProps: IProps = {
    showMore: false,
    isMoreShown: false,
    show: false,
  }
  render() {
    return (
      <CardGrid showMore={this.props.showMore}>
        <Content showMore={this.props.showMore}>
          <CardTitle><CardIcon className={this.props.icon} />{this.props.title}</CardTitle>
          <Divider />
          <CardContent>
            {this.props.children}
          </CardContent>
        </Content>
      </CardGrid>
    );
  }
}

export default CardContainer;

const Content = styled.div<{showMore: boolean}>`
  padding: 30px 40px 20px;
`;

const Action = styled("div")<{show: boolean}>`
  position: relative;
  width: 100%;
  font-size: 12px;
  height: 30px;
  background: #D25255;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  transition: color .3s;
  line-height: 30px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  display: ${props => (props.show ? 'block' : 'none')};
  font-weight: bold;
`;

const CardGrid = styled.div<{showMore: boolean}>`
  background: #fff;
  margin: 0px 10px 20px;
  box-shadow: 0 1px 6px rgba(0,0,0,.12), 0 1px 4px rgba(0,0,0,.24);
  min-height: 200px;
  overflow: hidden;
  padding-bottom: ${props => (props.showMore ? '-1px' : '20px')};
`;
const CardTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
`;
const CardContent = styled.div`
  // margin-top: 20px;
`;
const CardIcon = styled.i`
  font-size: 25px;
  padding-right: 10px;
`;