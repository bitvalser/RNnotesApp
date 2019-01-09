import { NotesAction } from '../actions/notes';

const initialState = {
  isLoading: false,
  data: null
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case NotesAction.INIT_NOTES:
      return {
        ...state,
        isLoading: true,
        data: null
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
