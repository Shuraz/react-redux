import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreaters} from "./state/index"
function App() {
  const account = useSelector((state )=> state.account)
  const dispach = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreaters, dispach);
  // console.log(AC);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>depositMoney(100)}>Deposit Money</button>
      <button onClick={()=>withdrawMoney(100)}>Withdraw Money</button>
    </div>
  );
}

export default App;
