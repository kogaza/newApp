import * as React from 'react';
import {setValue} from '../../actions/Home';
import {getValue} from '../../reducers/Home';
import {AppState} from '../../reducers/index';
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";

interface INameProps extends RouteComponentProps {
  value: any;
  setValue: (value: string) => any;
}

class MyName extends React.PureComponent<INameProps> {

  public constructor(props: INameProps) {
    super(props);

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
    this.props.setValue(value);
  }

}

const mapStateToProps = (state: AppState) => ({
  value: getValue(state)
});

const
  mapDispatchToProps = {
    setValue
  };

export default connect(mapStateToProps, mapDispatchToProps)(MyName);


// export default MyName;
