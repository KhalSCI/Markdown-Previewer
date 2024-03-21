import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
const defaultText = `# React Markdown Previewer
## Try it...
<br>

- This is a list
- i love pierogies

\`\`\`
Code Block B)
\`\`\`

\`This is an inline code\`

**This is a bolded text**

[This is a link](https://github.com/KhalSCI)

> “This is a quote in my project.”
―  Go confidently in the direction of your dreams. Live the life you have imagined.

### This is an image.

![freecodecamp logo](https://i.postimg.cc/28vgpwXR/q-Tg-TIejk-400x400.jpg)

Project created by **Khal** for [freeCodeCamp](https://www.freecodecamp.org) course.
`;
marked.setOptions({
  breaks: true });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText };

    // Bind handleChange method to the instance
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
      React.createElement("section", { id: "editor-section" }, /*#__PURE__*/
      React.createElement("h2", { className: "name" }, "Editor"), /*#__PURE__*/

      React.createElement("textarea", {
        id: "editor",
        onChange: this.handleChange,
        value: this.state.text,
        placeholder: "Enter markdown" })), /*#__PURE__*/


      React.createElement("section", { id: "preview-section" }, /*#__PURE__*/
      React.createElement("h1", { className: "name" }, "Preview"), /*#__PURE__*/
      React.createElement("section", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.text) } }))));










  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));