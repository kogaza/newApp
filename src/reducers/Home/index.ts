import { Record } from 'immutable';
import { ChangeValue } from '../../action-types/Home';
import { AppState } from '../index';

export interface IHomeState {
    changeValue: string;
}

export type ChangeValueState = Record<IHomeState>;

const ChangeValueState = Record<IHomeState>({
    changeValue: '',
});

const initialState: ChangeValueState = new ChangeValueState();

export default function changeValue(state: ChangeValueState = initialState, action: any) {
    switch (action.type) {
        case ChangeValue.CHANGE_VALUE:
            return state.set( 'changeValue', action.payload.changeValue );
        default:
            return state;
    }
}

export const getFieldValueFromFormName = (state: AppState) => state.get('home');
