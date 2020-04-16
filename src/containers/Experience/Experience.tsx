import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';
import * as dateUtils from '../../services/dateUtils';

import { actions as experienceActions } from '../../sagaDucks/experience/experience';
import { Timeline } from '../../components';
import { Card } from '../index';

interface IProps {
  requestExperience: () => void,
  experience: IExperience[],
}
interface IExperience {
  workForm?: string,
  workTo: string,
  workFrom: string,
  technologies?: string,
  id?: string,
  dateFrom?: string,
  dateDuration?: string,
  dateTo?: string | JSX.Element,
  title?: string,
  company_website?: string,
  description?: string,
  company?: string,
  tagLine?: string,
  tagLineLink?: string,
  mainContent?: string,
  subContent?: JSX.Element,
}

interface IState {
  experienceToTimeline: IExperience[],
  toggleAll: boolean,
}

class ExperienceContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      experienceToTimeline: [],
      toggleAll: false,
    };
  }

  componentWillMount() {
    this.props.requestExperience();
  }

  componentWillReceiveProps(props: IProps) {
    this.generate(props, this.state.toggleAll);
  }

  generate = (props: IProps, toggleAll: boolean) => {
    // manipulate experience data to match timeline expected data
    const newData = _.orderBy(props.experience, [exp => exp.id], ['desc']).reduce((newArr: IExperience[], obj, idx) => {
      const dateFrom = moment(obj.workFrom, 'MMMM-YYYY').format('MMM YYYY');
      const dateTo = (obj.workTo !== 'Present') ?
        moment(obj.workTo, 'MMMM-YYYY').format('MMM YYYY') : (<Present />);
      const dateDuration = dateUtils.getDuration(obj.workFrom, obj.workTo, 'MMMM-YYYY');
      const subContent = (
        <div>
          <SubContentMain>Technologies Used:</SubContentMain>
          <SubContentTag>{obj.technologies}</SubContentTag>
        </div>
      );
      const newDataStruct: IExperience = {
        id: obj.id,
        dateFrom,
        dateTo,
        dateDuration,
        workFrom: obj.workFrom,
        workTo: obj.workTo,
        title: obj.title,
        tagLine: obj.company,
        tagLineLink: obj.company_website,
        mainContent: obj.description,
        subContent,
      };

      if (toggleAll || idx < 1) {
        newArr.push(newDataStruct);
      }

      return newArr;
    }, []);
    this.setState({ experienceToTimeline: newData });
  }
  toggleAll = () => {
    this.setState(
      { toggleAll: !this.state.toggleAll },
      () => this.generate(this.props, this.state.toggleAll),
    );
  }
  render() {
    return (
      <Card title="Experience" icon="icon-suitcase" showMore onClick={() => this.toggleAll()} isMoreShown={this.state.toggleAll}>
        <Timeline data={this.state.experienceToTimeline} />
      </Card>
    );
  }
}

interface MData {
  data: IExperience,
}

interface MState {
  experience: MData,
}

const mapStateToProps = (state: any) => (
  {
    experience: state.experience.data,
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators({
    ...experienceActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceContainer);

const Present = styled.span`
  &:before {
          color: #B52E31;
  content: 'Present';
}
`;
const SubContentMain = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
const SubContentTag = styled.div`
  font-size: 11px;
`;