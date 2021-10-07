import React,{Component} from 'react';


import Todolist from "./components/todoitem";
import "./components/app.css";

class App extends Component{
  constructor(){
    super();
    this.state = {
      todoItem:[
        {
          'name': "đi ỉa",
          'isComplete': false
        },
        {
          'name': "đi ăn",
          'isComplete': false
        },
        {
          'name': "đi ngủ",
          'isComplete': false
        }
      ]
    }
  } 
  onClickedItem(item) {
    return(event) => {
      let isComplete = item.isComplete;
      let {todoItem} = this.state;
      let index = todoItem.indexOf(item);
      this.setState({todoItem:[
        ...todoItem.slice(0,index),
        {...item,isComplete:!isComplete},
        ...todoItem.slice(index+1)
      ]});
    }
  }
  render(){
    let {todoItem} = this.state;
    return(
      <div className="App">
        {
          todoItem.length && todoItem.map((item,index) => 
            <Todolist 
              item={item} 
              key={index} 
              onClick={this.onClickedItem(item)}
            />)
        }
      </div>
    );
  }
}


export default App;
