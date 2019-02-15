import * as React from 'react';
import {setName, setSurname, newUser} from '../../actions/Home';
import {getName, getSurname} from '../../reducers/Home';
import {AppState} from '../../reducers/index';
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";

interface INameProps extends RouteComponentProps {
  name: any;
  surname: string;
  setName: (value: string) => any;
  setSurname: (value: string) => any;
  newUser: (user: object) => any;
}

interface IStateProps {
  users: any;
}

class MyName extends React.PureComponent<INameProps, IStateProps> {

  public constructor(props: INameProps) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(): void {
    let url = "http://localhost:3001/users"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let users = data.map((user: any, index: number) => {
          {this.newUser(user)};
          return (
            <div key={index}>
              <h1>{user.name} {user.surname}</h1>
              <p>{user.gender}</p>
            </div>
          )
        })
        this.setState({users});
      })
  }

  public render(): JSX.Element {
    const {name, surname} = this.props;
    console.warn('user', this.state.users);

    return (
      <div>
        <input type="text" name="name" placeholder="Imię" onChange={this.handleChangeName}/>
        <input type="text" name="surname" placeholder="Nazwisko" onChange={this.handleChangeSurname}/>
        <div>Imię: {name}</div>
        <div>Nazwisko: {surname}</div>
        <div>{this.state.users}</div>
      </div>
    );
  }

  private newUser = (user: object) => {
    console.warn('imię', user);
    this.props.newUser(user);
  }

  private handleChangeName = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = event.currentTarget.value;
    this.props.setName(value);
  }

  private handleChangeSurname = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = event.currentTarget.value;
    this.props.setSurname(value);
  }
}

const
  mapStateToProps = (state: AppState) => ({
    name: getName(state),
    surname: getSurname(state)
  });

const
  mapDispatchToProps = {
    setName: setName,
    setSurname: setSurname,
    newUser: newUser
  };

export default connect(mapStateToProps, mapDispatchToProps)

(
  MyName
);
