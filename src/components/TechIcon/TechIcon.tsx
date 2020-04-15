import React from 'react';
import styled from 'styled-components';

interface ITech {
  name: string,
  img_path: string,
  showSkill: boolean,
  referenceOnly?: boolean,
}

interface IProps {
  tech: ITech,
  key: string,
} 

interface IState {
}

class TechIconComponent extends React.Component<IProps, IState> {
  render() {
    return (
      <TechIcon>
        <TechImageContainer>
          <TechImage src={this.props.tech.img_path} alt="" />
        </TechImageContainer>
        <TechName>{this.props.tech.name}</TechName>
      </TechIcon>
    );
  }
}

export default TechIconComponent;

const TechIcon = styled.div`
  text-align: center;
`;
const TechImageContainer = styled.div`
  height: 70px;
  position: relative;
`;
const TechImage = styled.img`
  max-height: 60%;
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const TechName = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
`;