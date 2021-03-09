import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { actions as portfolioActions } from '../../sagaDucks/portfolio/portfolio';
import { PortfolioIcon } from '../../components';
import { Card } from '../index';

interface IPortfolio {
  sumUp: string,
  id: number,
  isShow: boolean,
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
    const portfolioList = props.portfolio.map((value: IPortfolio, idx: number) => {
      let el = (<></>);
      if (value.isShow) {
        el = <PortfolioIcon data={value} key={idx} />;
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
      <Card title="个人总结" icon="icon-folder-open">
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
`;