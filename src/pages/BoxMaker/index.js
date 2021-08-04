import { Component } from 'react';
import Form from './form.js';
import Box from'./box';
import './box.scss';

class BoxMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
     boxes : [],
    };
  }
  buildNewBox = data => {
    console.log('data box', data);
    this.setState({
      boxes: [...this.state.boxes, data]
    })
  }
  remove = id => {
    this.setState({
      boxes: this.state.boxes.filter(i => i.id !== id)
    })
  }
  render() {
    const {
      boxes
    } = this.state;
    console.log('boxes', boxes)
    return(
      <div className="box-container">
        <h1>Box maker</h1>
        <Form submitResult={data => this.buildNewBox(data)}/>
        <div className="box-place">
          {boxes.map(box => (
              <Box 
                height={box.height}
                width={box.width}
                id={box.id}
                key={box.id}
                backgroundColor={box.color}
                handleClick={() => this.remove(box.id)}
              />
            )
          )}
        </div>
      </div>
    )
  }
}

export default BoxMaker;

