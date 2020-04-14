export const types = {
    PORTFOLIO_REQUEST: 'PORTFOLIO/PORTFOLIO_REQUEST',
    PORTFOLIO_SUCCESS: 'PORTFOLIO/PORTFOLIO_SUCCESS',
    PORTFOLIO_FAIL: 'PORTFOLIO/PORTFOLIO_FAIL',
  };
  
  export const initialState = {
    data: {},
  };

  interface iAction {
    type: string,
    portfolio: string,
  }
  
  export default (state = initialState, action: iAction) => {
    switch (action.type) {
      case types.PORTFOLIO_SUCCESS:
        return Object.assign({}, state, {
          data: action.portfolio,
        });
      default:
        return state;
    }
  };
  
  export const actions = {
    requestPortfolio: () => ({ type: types.PORTFOLIO_REQUEST }),
  };