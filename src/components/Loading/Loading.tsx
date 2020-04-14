import React from 'react';
import CSS from 'csstype';

interface IProps {
    isLoading: boolean,
    error?: boolean,
    timedOut: boolean,
} 

const LoadingComponent = (props: IProps) => {

  const loadingStyle: CSS.Properties = {
    position: 'absolute',
    paddingTop: '45vh',
    left: '50%',
  };

  if (props.isLoading) {
    return <div style={loadingStyle}>Loading...</div>;
  } else if (props.error) {
    return <div>Something went wrong...</div>;
  } else if (props.timedOut) {
    return <div>Request timed out... </div>;
  }
  return null;
};

LoadingComponent.defaultProps = {
  error: null,
};

export default LoadingComponent;