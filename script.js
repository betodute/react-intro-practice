
const element = React.createElement(
  'h1',
  {
    className: 'title',
    onClick: () => {console.log('clicked')},
    style: {fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}
  },
  'Hello World!'
);

const element2 = React.createElement(
  'h2',
  {
    className: 'title',
    onClick: () => {console.log('clicked 2')},
    style: {fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}
  },
  'Hello World 2'
)

const element3 = React.createElement(
  'h3',
  {
    className: 'title',
    onClick: () => {console.log('clicked3')},
    style: {fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'},
  },
  'Hello World 3'
)

ReactDOM.render(
  element,
  document.getElementById('root')
);

ReactDOM.render(
  element2,
  document.getElementById('root2')
);

ReactDOM.render(
  element3,
  document.getElementById('root3')
)