import React from 'react'
import ReactDOM from 'react-dom'
// import文を使ってSassファイルを読み込む。
import '../stylesheets/main.scss';
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
