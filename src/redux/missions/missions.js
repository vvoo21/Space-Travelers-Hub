// actions
const GET_MISSIONS = 'missions/GET_MISSIONS';

// reducer
const initialSatate = [];

const missionsReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

// action creator
export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export default missionsReducer;
