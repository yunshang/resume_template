import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { actions as portfolioActions } from '../../sagaDucks/portfolio/portfolio';
import { PortfolioIcon } from '../../components';
import { Card } from '../index';

interface IPortfolio {
  isShow?: string,
  name?: string,
  url?: string,
  img_path?: string,
}

interface IProps {
  portfolio: IPortfolio[],
  requestPortfolio: () => void,
}

interface IState {
  portfolioList?: JSX.Element[],
}
class PortfolioContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { portfolioList: [] };
  }
  componentWillMount() {
    this.props.requestPortfolio();
  }
  componentWillReceiveProps(props: IProps) {
    const portfolioList = props.portfolio.map((value: IPortfolio) => {
      let el = (<></>);
      if (value.isShow) {
        el = <PortfolioIcon data={value} key={value.name} />;
      }
      return el;
    });
    if (portfolioList) {
      this.setState({
        portfolioList,
      });
    };
  }
  render() {
    return (
      <Card title="Portfolio" icon="icon-folder-open">
        <PortfolioGridList>
          {this.state.portfolioList}
        </PortfolioGridList>
      </Card>
    );
  }
}

const mapStateToProps = (state: any) => (
  {
    portfolio: state.portfolio.data,
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators({
    ...portfolioActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);

const PortfolioGridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: space-around;
  grid-row-gap: 20px;
`;