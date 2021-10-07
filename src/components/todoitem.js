import React,{Component} from 'react';
import classNames from 'classnames';

class Todolist extends Component{
    render(){
        let {item,onClick} = this.props;
        return(
            <div onClick={onClick} className={classNames({"isComplete":item.isComplete})}>{item.name}</div>
        );
    }
}

export default Todolist;