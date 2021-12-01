import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const initialBoard = [];

for (let i = 0; i < 10; i++) {
  let tempRow = []
  for (let j = 0; j < 10; j++) {
    //make an array of 10 0's
    const isBomb = Math.random() < .15;
    tempRow.push({
      bombs: isBomb ? 'B' : 0,
      id: i.toString() + j.toString(),
      row: i,
      col: j,
      hidden: true
    });
  }
  initialBoard.push(tempRow)
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // console.log(`i: ${i}, j: ${j}`);
    if (initialBoard[i][j].bombs !== 'B') {
      // Top row - k is the column num
      for (let k = j - 1; k <= j + 1; k++) {
        if (i - 1 >= 0 && i - 1 < 10 && k >= 0 && k < 10 && initialBoard[i - 1][k].bombs === 'B') {
          initialBoard[i][j].bombs++
        }
      }
      // left tile
      if (i >= 0 && i < 10 && j - 1 >= 0 && j - 1 < 10 && initialBoard[i][j - 1].bombs === 'B') {
        initialBoard[i][j].bombs++
      }
      // right tile
      if (i >= 0 && i < 10 && j + 1 >= 0 && j + 1 < 10 && initialBoard[i][j + 1].bombs === 'B') {
        initialBoard[i][j].bombs++
      }
      // Bottom row - k is the column num
      for (let k = j - 1; k <= j + 1; k++) {
        if (i + 1 >= 0 && i + 1 < 10 && k >= 0 && k < 10 && initialBoard[i + 1][k].bombs === 'B') {
          initialBoard[i][j].bombs++
        }
      }
    }
  }
}

const store = createStore(rootReducer, { board: initialBoard, gameOver: false });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
