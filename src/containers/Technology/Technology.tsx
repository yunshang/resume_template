import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import _ from 'lodash';

import { actions as technologyActions } from '../../sagaDucks/technology/technology';
// import { TechIcon } from '../../components';
import { Card } from '../index';

interface IProps {
  requestTechnology: () => void,
  technology: ITechnology[],
} 

interface ITechnology extends ITech {
  id: number,
  name: string,
  img_path: string,
  showskill: boolean,
  introduction: string,
  duration: IDuration[],
  referenceOnly: boolean,
}

interface IState {
  referenceTechList: ITechnology[],
  techList: ITechnology[],
  toggleReference: boolean,
}

interface IDuration {
  hideDurationText: string
}

interface ITech {
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
    // const referenceTechList: ITechnology[] = [];
    const techList = _.orderBy(props.technology, [tech => tech.name.toLowerCase()], ['asc']).map((tech: ITechnology) => {
      return tech;
    });
    this.setState({
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
      <Card title="项目经历" icon="icon-code" showMore={false} onClick={() => this.toggleReference()} isMoreShown={true}>
        {
           _.orderBy(this.state.techList, [exp => exp.id], ['asc']).map((value, index) => {
            if (value.showskill) {
              return (
                <Project key={index}>
                  <Title>{value.name}</Title>
                  <Content>
                    <MainContent>{value.introduction}</MainContent>
                  </Content>
                  <Item>
                    {
                      value.duration.map((_duration, ind) =>{
                        return (
                          <Li key={ind}>{_duration.hideDurationText}</Li>
                        )
                      })
                    }
                  </Item>
                </Project>
              )
            }
            return (<></>)
          })
        }
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

// const TechIconsHolder = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill,100px);
//   justify-content: space-between;
// `;

const Period = styled.div`
  grid-area: timeline-period;
  -moz-border-radius: 50px/50px;
  -webkit-border-radius: 50px 50px;
  border-radius: 50px/50px;
  border: solid 3px #FF6B6B;
  width: 40%;
  height: 40%;
  margin: auto;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
`;

const Item = styled.ul`
  font-size: 14px;
  padding-left: 30px;
`;
const Project = styled.li`
  display: contents;
  grid-template-areas: "timeline-marker timeline-event";
  grid-template-columns: 25px auto;
  &:hover ${Period} {
    background: #FF6B6B;
  }
`;

const Li = styled.li`
  grid-template-areas: "timeline-marker timeline-event";
  grid-template-columns: 25px auto;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  // text-transform: uppercase;
  margin-top: .5em;
`;

const Content = styled.div`
  margin-top: .9em;
  font-size: 14px;
`;
const MainContent = styled.p`
  line-height: 22px;
`;