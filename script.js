
const element = React.createElement(
  'h1',
  {
    className: 'title',
    onClick: () => {console.log('clicked')}
  },
  'Hello World!'
);

ReactDOM.render(
  element,
  document.getElementById('root')
);