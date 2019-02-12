import { action } from 'typesafe-actions';

// import { ChangeValue } from 'action-types/Home';
import { ChangeValue } from '../../action-types/Home';

// export interface IChangeValue {
//     text: string;
// }

export const setValue = (text: string) =>
    action(ChangeValue.CHANGE_VALUE, text);
