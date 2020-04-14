export const types = {
  ABOUT_REQUEST: 'ABOUT/ABOUT_REQUEST',
  ABOUT_SUCCESS: 'ABOUT/ABOUT_SUCCESS',
  ABOUT_FAIL: 'ABOUT/ABOUT_FAIL',
};
  
export const initialState = {
  data: {},
};

interface iAction {
  type: string,
  about: string,
}
  
export default (state = initialState, action: iAction) => {
  switch (action.type) {
    case types.ABOUT_SUCCESS:
      return Object.assign({}, state, {
        data: action.about,
      });
    default:
      return state;
  }
};
  
export const actions = {
  requestAbout: () => ({ type: types.ABOUT_REQUEST }),
};