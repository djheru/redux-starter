export default function courseReducer(state = [], action = { type: '' }) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
