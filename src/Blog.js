import React from 'react';
import Entry from './Entry';

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
        <h1>Blog Title</h1>
        <p>blog entry goes here</p>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
        Count: {this.state.count}
        </button>
      </div>
    );
  }
}
export default Blog;
