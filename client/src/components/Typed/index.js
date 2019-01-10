import React, { Component } from 'react';
import Typed from 'typed.js';

import './styles.css';

class TypedReactDemo extends Component {
  componentDidMount() {
    const { strings } = this.props;
    // other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
    this.typed.start();
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    this.typed.destroy();
  }

  render() {
    return (
      <div className='wrap'>
        <div className='type-wrap'>
          <span
            style={{ whiteSpace: 'pre' }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}

const About = () => (
  <TypedReactDemo
    strings={[
      `import { useState, useReducer } from 'react';

				const initialState = {count: 0};

				function reducer(state, action) {
					switch (action.type) {
						case 'reset':
							return initialState;
						case 'increment':
							return {count: state.count + 1};
						case 'decrement':
							return {count: state.count - 1};
						default:
							// A reducer must always return a valid state.
							// Alternatively you can throw an error if an invalid action is dispatched.
							return state;
					}
				}

				function Counter({initialCount}) {
					const [state, dispatch] = useReducer(reducer, {count: initialCount});
					return (
						<>
							Count: {state.count}
							<button onClick={() => dispatch({type: 'reset'})}>
								Reset
							</button>
							<button onClick={() => dispatch({type: 'increment'})}>+</button>
							<button onClick={() => dispatch({type: 'decrement'})}>-</button>
						</>
					);
				}`,
      `import { useState, useEffect } from 'react';

		function Example() {
			const [count, setCount] = useState(0);
		
			// Similar to componentDidMount and componentDidUpdate:
			useEffect(() => {
				// Update the document title using the browser API
				document.title = \`You clicked \${count\} times\`;
			});
		
			return (
				<div>
					<p>You clicked {count} times</p>
					<button onClick={() => setCount(count + 1)}>
						Click me
					</button>
				</div>
			);
		}`,
      `import { useState } from 'react';

			function Example() {
				// Declare a new state variable, which we'll call "count"
				const [count, setCount] = useState(0);
			
				return (
					<div>
						<p>You clicked {count} times</p>
						<button onClick={() => setCount(count + 1)}>
							Click me
						</button>
					</div>
				);
			}`,
    ]}
  />
);
export default About;
