import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading__blink">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 188.25 151.91"
          >
            <polygon points="94.13 151.91 62.43 78.2 94.13 0 125.83 78.2 94.13 151.91" />
            <polygon points="163.73 68.91 162.17 108.87 130.9 137.46 159.25 126.31 188.25 58.67 163.73 68.91" />
            <polygon points="128.3 50.37 139.99 79.2 118.34 129.53 145.91 104.36 148.82 30.82 128.3 50.37" />
            <polygon points="24.52 68.91 26.08 108.87 57.35 137.46 29 126.31 0 58.67 24.52 68.91" />
            <polygon points="59.95 50.37 48.26 79.2 69.91 129.53 42.34 104.36 39.43 30.82 59.95 50.37" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Loading;
