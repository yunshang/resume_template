import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import _ from 'lodash';

import { actions as technologyActions } from '../../sagaDucks/technology/technology';
import { TechIcon } from '../../components';
import { Card } from '../index';

interface IProps {
  requestTechnology: () => void,
  technology: ITechnology[],
} 

interface ITechnology extends ITech {
}

interface IState {
  referenceTechList: JSX.Element[],
  techList: JSX.Element[],
  toggleReference: boolean,
}

interface ITech {
  name: string,
  img_path: string,
  showSkill: boolean,
  referenceOnly: boolean,
}

class TechnologyContainer extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
    this.state = {
      referenceTechList: [],
      techList: [],
      toggleReference: false,
    };
  }
  componentWillMount() {
    this.props.requestTechnology();
  }
  componentWillReceiveProps(props: IProps) {
    const referenceTechList: JSX.Element[] = [];
    const techList = _.orderBy(props.technology, [tech => tech.name.toLowerCase()], ['asc']).map((tech: ITechnology) => {
      let el = (<></>);
      if (tech.showSkill && !tech.referenceOnly) {
        el = <TechIcon tech={tech} key={tech.name} />;
      } else if (tech.showSkill && tech.referenceOnly) {
        referenceTechList.push(<TechIcon tech={tech} key={tech.name} />);
      }
      return el;
    });
    this.setState({
      referenceTechList,
      techList,
    });
  }
  toggleReference = () => {
    this.setState({
      toggleReference: !this.state.toggleReference,
    });
  }
  render() {
    return (
      <Card title="Technology" icon="icon-code" showMore={false} onClick={() => this.toggleReference()} isMoreShown={this.state.toggleReference}>
        <TechIconsHolder>
          {this.state.techList}
        </TechIconsHolder>
        {this.state.toggleReference ? (
          <ReferenceTechIconsHolder>
            <ReferenceSpan>For Reference</ReferenceSpan>
            <TechIconsHolder>
              {this.state.referenceTechList}
            </TechIconsHolder>
          </ReferenceTechIconsHolder>
        ) : null}
      </Card>
    );
  }
}

const mapStateToProps = (state: any) => (
  {
    technology: state.technology.data,
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators({
    ...technologyActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyContainer);

const TechIconsHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,100px);
  justify-content: space-between;
`;
const ReferenceSpan = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
`;
const ReferenceTechIconsHolder = styled.div`
  margin-top: 50px;
`;