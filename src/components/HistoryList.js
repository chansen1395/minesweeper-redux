import React from 'react';
import { connect } from 'react-redux';


export default function HistoryList(props) {

  const handleHistoryClick = (move) => {
    const { dispatch } = props;
    // send type of action & any data to be passed
    const action = { type: "SET_MOVE", move }
    dispatch(action)

  }

  // const histJsx = 

  return (<ul>
    {props.history.map((move, i) => { 
      return  <li key={i}>
        { i ? `Move ${i}` : 'Game Start'}: {move.time} 
        { i === props.history.length - 1 ? null : <button onClick={() => handleHistoryClick(i + 1)}>Go</button> }
      </li> 
    })}
  </ul>);

}
/*
1. click handler - get the move #
2. dispatch action with type: "SET_MOVE"
3. add that case to reducer
*/
const mapStateToProps = state => {
  return {
    history: state.history
  }
}

HistoryList = connect(mapStateToProps)(HistoryList);
