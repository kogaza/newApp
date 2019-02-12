import * as React from 'react';
import {setValue} from '../../actions/Home';
import changeValue, {getFieldValueFromFormName} from '../../reducers/Home';
// import { AppState } from '../../reducers/index';
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";

interface INameProps extends RouteComponentProps {
    value: any;
    changeValue: string;
    setValue: (value: string) => any;
}

interface INameState {
    counter: number;
}

class MyName extends React.PureComponent<INameProps, INameState> {
    public static defaultState: INameState = {
        counter: 1
    };

    public constructor(props: INameProps) {
        super(props);

        this.state = MyName.defaultState;
    }

    public render(): JSX.Element {
        const {value} = this.props;

        return (
            <div>
                <input type="text" onChange={this.onChange}/>
                <div>{value}</div>
            </div>
        );
    }

    private onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.currentTarget.value;
        setValue(value);

    }


// const MyName: React.FC<IPropsName> = ({ value, onChange }) => {
//
//     return (
//         <div className="form">
//             <input type={"text"} value={value} placeholder={"Napisz coś"} onChange={onChange} />
//             <div>{value}</div>
//         </div>
//     );
// };
}
// const mapStateToProps = (state: AppState) => ({
//     value: getFieldValueFromFormName(state)
// });

    const
    mapDispatchToProps = {
        setValue
    };

    export default connect(undefined, mapDispatchToProps)(MyName);




// export default MyName;
