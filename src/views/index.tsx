import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
  dispatch: any;
  number: number;
}
interface IState {
  // number: number;
  data: number;
  flag: boolean;
}
export const ThemeContext = React.createContext("green");
class App extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/about/">1、关于</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
