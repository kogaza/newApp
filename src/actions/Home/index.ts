import { action } from 'typesafe-actions';

import { ChangeValue, NewUser } from '../../action-types/Home';

export const setName = (name: string) =>
    action(ChangeValue.CHANGE_NAME, name);

export const setSurname = (surname: string) =>
    action(ChangeValue.CHANGE_SURNAME, surname);

export const newUser = (user: any) =>
  action(NewUser.NEW_USER, user);