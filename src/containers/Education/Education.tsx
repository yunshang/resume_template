import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as educatioActions } from '../../sagaDucks/education/education';
import { Timeline } from '../../components';
import { Card } from '../index';

interface IProps {
  requestEducation?: () => void,
  education: IEducation[],
} 

interface IState {
  educationToTimeline: IEducation[],
  education?: IEducation
}

interface IData {
  id?: string,
  dateFrom?: string,
  dateTo?: string | JSX.Element,
  title?: string,
  tagLine?: string,
  subContent?: JSX.Element,
  dateDuration?: string,
  mainContent?: string,
  tagLineLink?: string,
}

interface IEducation extends IData {
  school?: string,
  studyFrom?: string,
  studyTo?: string,
  degree?: string,
}

class EducationContainer extends React.Component<IProps, IState> {
  public static defaultProps: IProps = {
    education: [],
  }
  constructor(props: IProps) {
    super(props);
    this.state = { educationToTimeline: [] };
  }

  componentWillMount() {
    if (this.props.requestEducation) {
      this.props.requestEducation();
    }
  }

  componentWillReceiveProps(props: IProps) {
    const newData = props.education.map((value: IEducation) => {
      const newDataStruct: IEducation = {
        id: value.school,
        dateFrom: value.studyFrom,
        dateTo: value.studyTo,
        title: value.title,
        tagLine: value.degree,
        mainContent: value.mainContent,
      };

      return newDataStruct;
    });
    this.setState({ educationToTimeline: newData });
  }
  render() {
    return (
      <Card title="教育经验" icon="icon-graduation-cap">
        <Timeline data={this.state.educationToTimeline} />
      </Card>
    );
  }
}

const mapStateToProps = (state: any) => (
  {
    education: state.education.data,
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators({
    ...educatioActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);