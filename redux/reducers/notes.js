import { NotesAction } from '../actions/notes';

const initialState = {
  isLoading: false,
  data: {}
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case NotesAction.INIT_NOTES:
      return {
        ...state,
        isLoading: true
      };
    case NotesAction.UPDATE_NOTES:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
