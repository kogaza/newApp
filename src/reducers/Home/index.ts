import { ChangeValue } from '../../action-types/Home';

export type HomeState = Object;

const HomeState = 'test';

export default function changeValue(state: HomeState = HomeState, action: any) {
    switch (action.type) {
        case ChangeValue.CHANGE_VALUE:
            return state = action.payload;
        default:
            return state;
    }
}

export const getValue = (state: any) => {
    return state.home;
};
