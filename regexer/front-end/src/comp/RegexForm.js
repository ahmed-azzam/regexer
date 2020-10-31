import React from 'react';
import axios from 'axios';
class RegexForm extends React.Component {
  state = {
    regexText: '',
    text: '',
    modText: '',
    replaceWith: '',
  };

  handleChangeRegex(e) {
    this.setState({
      regexText: e.target.value,
    });
    //console.log(e.target.value);
    //console.log('---------->', e.target);
  }
  handleChangeText(e) {
    this.setState({
      text: e.target.value,
    });
    //console.log(e.target.value);
    //console.log('---------->', e.target);
  }
  handleChangeReplace(e) {
    this.setState({
      replaceWith: e.target.value,
    });
    //console.log(e.target.value);
    //console.log('---------->', e.target);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { regexText, text } = this.state;
    axios
      .post('api/helloRegex/', {
        regexText,
        text,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log(regexText);
  }

  replace(e) {
    e.preventDefault();
    const { regexText, text, replaceWith } = this.state;
    axios
      .post('api/replacetext/', {
        regexText,
        text,
        replaceWith,
      })
      .then((res) => {
        this.setState({ modText: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log(regexText);
  }

  render() {
    //console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          regex:
          <textarea
            value={this.state.regexText}
            onChange={this.handleChangeRegex.bind(this)}
          />
        </label>
        <br />
        <label>
          Text:
          <textarea
            value={this.state.text}
            onChange={this.handleChangeText.bind(this)}
          />
        </label>
        <br />
        <label>
          replacWith:
          <textarea
            value={this.state.replaceWith}
            onChange={this.handleChangeReplace.bind(this)}
          />
        </label>
        <br />
        <label>
          replacedText:
          <textarea value={this.state.modText} />
        </label>
        <input type='submit' value='Hilight' />
        <button onClick={this.replace.bind(this)} value='replace'>
          replace
        </button>
      </form>
    );
  }
}

export default RegexForm;
