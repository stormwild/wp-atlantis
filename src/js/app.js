import '../scss/styles.scss';

function component() {
  const env = process.env.NODE_ENV;
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = [].join(['Hello', 'webpack', env], ' ');
  console.log(env);
  return element;
}

document.body.appendChild(component());
