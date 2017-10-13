import createReactClass from 'create-react-class';
import {TransitionMotion, Motion, spring} from 'react-motion'
import React, {Component} from 'react'

// export default class TransitionMotionTest extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       mounted: true
//     }
//   }
//   //   console.log('constructor');
//   // }
//   // // getInitialState() {
//   // //   console.log('getInitialState');
//   // //   return {
//   // //     mounted: true
//   // //   }
//   // // },
//   // componentDidMount() {
//   //   console.log('componentDidMount');
//   // }
//   componentWillUnmount() {
//     // this.setState({
//     console.log('componentWillUnmount');
//     this.setState({
//       mounted: false
//     })
//   }
//   //   return true
//   //   //   items: [{key: 'a', size: spring(0)}, {key: 'b', size: spring(0)},], // remove c.
//   //   // });
//   // }
//   // getMotionStyle() {
//   //   return ()
//   // }
//
//   render() {
//     const box = {
//       background: '#FD675F',
//     }
//     // console.log(this.componentWillUnmount())
//     const motionStyle = {
//       width: this.state.mounted ? spring(200) : spring(0),
//       height: spring(200),
//     }
//     const defaultStyle = {
//       width: 0,
//       height: 0,
//     }
//
//     // console.log(this.state)
//     return (
//       <Motion defaultStyle={defaultStyle} style={motionStyle}>
//         {(style) => {
//           console.log(style);
//           return(
//               <div style={Object.assign( {}, box, {
//                 width: `${style.width}px`,
//                 height: `${style.height}px`,
//               })}></div>
//           )
//         }}
//       </Motion>
//     )
//   }
// }







// const Demo = createReactClass({
//   willEnter() {
//     return {width: 0, height: 0, borderRadius: 0}
//   },
//   willLeave() {
//     return {width: spring(0), height: spring(0), borderRadius: spring(0)};
//   },
//   getStyles() {
//     return !this.props.isMounted ? [] : [{
//       key: 'Demo',
//       style: {width: spring(500), height: spring(500), borderRadius: spring(2000)},
//     }]
//   },
//   render() {
//     return (
//       <TransitionMotion
//         willEnter={this.willEnter}
//         willLeave={this.willLeave}
//         defaultStyles={[{
//           key: 'Demo',
//           style: {
//
//             width: 0, height: 0, borderRadius: 0
//           }
//         }]}
//         styles={this.getStyles()}>
//         { (items) => {
//           console.log(items);
//           return (
//             <div>
//               { items.map(item => {
//                 return (
//                   <div key={item.key} style={{...item.style, backgroundColor: '#4F87FB'}}>
//                   </div>
//                 )
//               })}
//             </div>
//           )}}
//       </TransitionMotion>
//     );
//   },
// });
//
// export default Demo









const slice = {
  key: 'x',
  style: {
    y: 15,
    height: 70,
  },
};


const buttons = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  justifyContent: 'space-between',
  width: '25%',
  height: '20%',
  margin: '0px auto',
}
const svg = {
width: '50%',
height: '50%',
}
const rect =  {
  fill: 'DarkTurquoise',
}


export default class Demo extends React.Component {
  // the constant, non-animated properties
  static defaultProps = {
    x: 45,
    width: 25,
  };

  constructor() {
    super();
    this.state = {
      slices: [slice],
    }
    this.changeValue = this.changeValue.bind(this);
    this.exitOrReenter = this.exitOrReenter.bind(this);
  }

  // an instance method for click handling
  // to show how the slice transitions when y and height change
  changeValue() {
    if (this.state.slices.length) {
      const random = Math.floor(Math.random() * 70);
      this.setState({
        slices: [Object.assign({}, slice, {
          style: {
            y: (100 - random) / 2,
            height: random,
          },
        })]
      });
    }
  }

  // an instance method for click handling
  // to simulate the slice being removed then re-added to the dataset
  exitOrReenter() {
    if (this.state.slices.length === 0) {
      this.setState({
        slices: [slice],
      });
    } else {
      this.setState({
        slices: [],
      });
    }
  }

  // content is essentially identical to defaultStyles
  // but this handles the *re*entry of the slice (after it has exited)
  willEnter() {
    return {
      y: 50,
      height: 0,
    };
  }

  // this is where we define how the slice exits
  // note than unlike willEnter, you use spring() here!
  willLeave() {
    return {
      y: spring(50),
      height: spring(0)
    };
  }

  render() {
    return (
      <div id="app">
      <svg style={svg}viewBox="0 0 100 100">
        <TransitionMotion
          // responsible for the animation on first load!
          defaultStyles={[{
            key: slice.key,
            style: {
              y: 50,
              height: 0,
            },
          }]}
          styles={this.state.slices.map((slice) => {
            console.log(slice);
            // const { style } = slice;
            const style = slice.style;
            // console.log({ style });
            // console.log(style);
            return {
              key: slice.key,
              style: {
                y: spring(style.y),
                height: spring(style.height),
              },
            };
          })}
          willEnter={this.willEnter}
          willLeave={this.willLeave}
        >
          {(slices) => {
            console.log(slices);
            if (slices.length === 0) {
              return null;
            }
            const { key, style } = slices[0];
            return (
              <rect style={rect}
                key={key}
                x={this.props.x}
                y={style.y}
                rx={2}
                ry={2}
                width={this.props.width}
                height={style.height}
              />
            );
          }}
        </TransitionMotion>
      </svg>
      <div style={buttons}>
        <button onClick={this.exitOrReenter}>{`${this.state.slices.length ? 'Exit' : 'Enter'} rect`}</button>
        <button onClick={this.changeValue}>Change value</button>
      </div>
      </div>
    )
  }
}
