import React from 'react';

/**
* The main body containing the blog entries
*/
class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>LamFamBam Blog</h1>
        <p>Login goes here</p>

        {/* <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
        Count: {this.state.count}
        </button> */}
      </div>
    );
  }
}
export default Blog;
