import React from 'react';

class App extends React.Component {
  constructor () {
    super();
    this.update = this.update.bind(this);
    this.state = {
      output: '/* Output */',
      errorClass: ''
    }
  }

  update (e) {
    let jsx = e.target.value;
    try {
      this.setState({
        output: babel.transform(jsx, {
          stage: 0,
          loose: 'all'
        }).code,
        errorClass: ''
      })
    }
    catch (err) {
      this.setState({
        output: err.message,
        errorClass: 'error'
      });
    }
   }

  render () {
    const outputClass = 'jsx-transformer__output ' + this.state.errorClass;
    return (
      <div className="jsx-transformer">
        <textarea className="jsx-transformer__input"
          onKeyDown={this.update}
          placeholder="Enter your JSX code here">
        </textarea>
        <div className={outputClass}>{this.state.output}</div>
      </div>
    )
  }
}

module.exports = App;
