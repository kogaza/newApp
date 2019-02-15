import {ChangeValue, NewUser} from '../../action-types/Home';

export type HomeState = Object;

const HomeState = {
  name: '',
  surname: '',
  user: []
};

export default function changeValue(state: HomeState = HomeState, action: any) {
  switch (action.type) {
    case ChangeValue.CHANGE_NAME:
      return {...state, name: action.payload}
    case ChangeValue.CHANGE_SURNAME:
      return {...state, surname: action.payload}
    case NewUser.NEW_USER:
      return {...state, user: action.payload}
    default:
      return state;
  }
}

export const getName = (state: any) => {
  return state.home.name
};
export const getSurname = (state: any) => {
  return state.home.surname
};
