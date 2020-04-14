export const types = {
    EDUCATION_REQUEST: 'EDUCATION/EDUCATION_REQUEST',
    EDUCATION_SUCCESS: 'EDUCATION/EDUCATION_SUCCESS',
    EDUCATION_FAIL: 'EDUCATION/EDUCATION_FAIL',
  };
  
  export const initialState = {
    data: {},
  };

  interface iAction {
    type: string,
    education: string,
  }
  
  export default (state = initialState, action: iAction) => {
    switch (action.type) {
      case types.EDUCATION_SUCCESS:
        return Object.assign({}, state, {
          data: action.education,
        });
      default:
        return state;
    }
  };
  
  export const actions = {
    requestEducation: () => ({ type: types.EDUCATION_REQUEST }),
  };