import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';

import { actions as aboutActions } from '../../sagaDucks/about/about';

import { Button, IconLink } from '../../components';

interface IAbout {
  social_links?: IValue[],
  email?: string,
  skype?: string,
  mobile?: string,
  address?: string,
  website?: string,
  first_name?: string,
  last_name?: string,
  role?: string,
  pdf_url?: string,
  updated_at?: string,
  data?: IAbout,
}

interface IProps {
  requestAbout: () => void,
  about: IAbout,
} 

interface IState {
  socialLinks?: JSX.Element[],
  about?: IAbout,
}

interface IValue {
  show: boolean,
  name: string,
  url: string,
  icon: string,
}

class AboutContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { socialLinks: [] };
  }
  componentWillMount() {
    this.props.requestAbout();
  }
  componentWillReceiveProps(props: IProps) {
    const socialLinks = _.orderBy(props.about.social_links, ['order'], ['asc']).map((value: IValue) => {
      let el: JSX.Element = (<></>);
      if (value.show) {
        el = (
          <li key={value.name}><IconLink href={value.url} icon={value.icon} /></li>
        );
      }
      return el;
    });
    this.setState({ socialLinks });
  }
  // Class Properties (Stage 3 Proposal)
  openFile = (url: string) => {
    window.open(url);
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ fontSize: '14px', textAlign: 'center', marginBottom: '5px' }}>
          Moving soon to <a href="https://devlin.ph/">https://devlin.ph/</a>
        </div>
        <AboutGrid>
          <AvatarSection>
            {/* <Avatar src={this.props.about.profile_photo_url} alt="profile" /> */}
            <Avatar src="https://res.cloudinary.com/dfrhytey3/image/upload/v1551529389/icons/logo.png" alt="profile" />
          </AvatarSection>
          <NameTitle>
            <Name>{this.props.about.first_name}
              <LastName>{this.props.about.last_name}</LastName>
            </Name>
            <Title>{this.props.about.role}</Title>
          </NameTitle>
          {this.props.about.email ? <Info>{this.props.about.email}<InfoIcon className="icon-mail" /></Info> : null}
          {this.props.about.skype ? <Info>{this.props.about.skype}<InfoIcon className="icon-skype" /></Info> : null}
          {this.props.about.mobile ? <Info>{this.props.about.mobile}<InfoIcon className="icon-phone" /></Info> : null}
          {this.props.about.address ? <Info>{this.props.about.address}<InfoIcon className="icon-home" /></Info> : null}
          {this.props.about.website ? <Info><Url href={this.props.about.website}>{this.props.about.website}<InfoIcon className="icon-rocket" /></Url></Info> : null}
          <AboutFooter>
            <SocialLinks>
              {this.state.socialLinks}
            </SocialLinks>

            <Button onClick={() => this.openFile(this.props.about.pdf_url ?? '')}><i className="icon-download" /> PDF</Button>
            <FooterTag>Updated at {moment(this.props.about.updated_at, 'YYYY-MM-DD').format('DD MMM, YYYY')}</FooterTag>
            <FooterTag>© 2018 iamdevlinph</FooterTag>
          </AboutFooter>
        </AboutGrid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => (
  {
    about: state.about ? state.about.data : {},
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators({
    ...aboutActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);

const AboutGrid = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.12),0 1.5px 1px 0 rgba(0,0,0,.24) !important;
  background: white;
  text-align: right;
`;
const AvatarSection = styled.div`
  text-align: center;
`;
const Avatar = styled.img`
  vertical-align: middle;
  /* height: auto; */
  /* remove when using the smiley avatar */
  width: 100%;
`;
const NameTitle = styled.div`
  background: #B52E31;
  color: white;
  text-transform: uppercase;
  padding: 15px 25px;
  font-weight: bold;
`;
const Name = styled.div`
  font-size: 25px;
`;
const LastName = styled.span`
  margin-left: 5px;
  color: #333131;
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
const Info = styled.div`
  background: #33373D;
  color: #85878B;
  padding: 7px 25px;
  font-size: 12px;
  border-bottom: 1px solid #26292e;
  font-weight: bold;
`;
const AboutFooter = styled.div`
  margin-top: 12px;
  text-align: center;
`;
const SocialLinks = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  li {
    display: inline-block;
    margin-right: 2px;
    text-align: center;
  }
`;
const InfoIcon = styled.i`
  margin-left: 5px;
`;
const FooterTag = styled.div`
  font-size: 12px;
  color: #999;
`;
const Url = styled.a`
  color: #85878B;
  text-decoration: none;
`;