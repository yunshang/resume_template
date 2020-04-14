export const types = {
    EXPERIENCE_REQUEST: 'EXPERIENCE/EXPERIENCE_REQUEST',
    EXPERIENCE_SUCCESS: 'EXPERIENCE/EXPERIENCE_SUCCESS',
    EXPERIENCE_FAIL: 'EXPERIENCE/EXPERIENCE_FAIL',
  };
  
  export const initialState = {
    data: {},
  };

  interface iAction {
    type: string,
    experience: string,
  }
  
  export default (state = initialState, action: iAction) => {
    switch (action.type) {
      case types.EXPERIENCE_SUCCESS:
        return Object.assign({}, state, {
          data: action.experience,
        });
      default:
        return state;
    }
  };
  
  export const actions = {
    requestExperience: () => ({ type: types.EXPERIENCE_REQUEST }),
  };