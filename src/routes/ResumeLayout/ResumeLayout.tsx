import React from 'react';
import styled from 'styled-components';

const ResumeLayoutGrid = styled.div`
  display: grid;
  grid-template-areas: "l-pad main-area r-pad";
  grid-template-columns: auto 1200px auto;
  margin-top: 5px;
  @media only screen and (max-width: 1200px) and (min-width: 600px) {
    grid-template-columns: 0px auto 0px;
  }
  @media only screen and (max-width: 599px) {
    grid-template-areas: "main-area";
    grid-template-columns: auto;
  }
`;

interface IProps {
  children: React.ReactNode
} 

class ResumeLayout extends React.Component<IProps> {
  // constructor(prop: IProps) {
  //   super(prop);
  // };
  render() {
    return (
      <ResumeLayoutGrid>
        {this.props.children}
      </ResumeLayoutGrid>
    );
  }
}

export default ResumeLayout;