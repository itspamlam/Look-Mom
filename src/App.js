import React from 'react';

/**
* The main body containing the blog entries
*/
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [],
    };
  }

  render() {
    return (
      <div>
        <h1>LamFamBam Blog</h1>
        <p>Where we post what we did...</p>

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
