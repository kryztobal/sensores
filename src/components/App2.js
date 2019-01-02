import React, {Component} from 'react'
import './App.css'
import Draggable from 'react-draggable';

class Drag extends Component {
    state = {
        tasks:[
            {name:"dos", category:"wip", bgcolor:"yellow"},
            {name:"uno", category:"wip", bgcolor:"pink"}
        ]
    }

    onDragOver = e => {
        e.preventDefault()
    }

    onDrop = (e, cat) => {
        let id = e.dataTransfer.getData("id")
        let tasks = this.state.tasks.filter((task)=>{
            if (task.name == id){
                task.category = cat;
            }
            return task
        })
        this.setState({
            ...this.state, tasks
        })
    }
    onDragStart = (ev,id)=>{
        console.log("dragstart: ", id)
        ev.dataTransfer.setData("id", id)
    }
    render() {
        let tasks = {
            wip:[],
            complete:[]
        }

        this.state.tasks.forEach((t) =>{
            tasks[t.category].push(
                <div 
                    onDragStart = {e=>this.onDragStart(e,t.name)}
                    key={t.name}
                    draggable={true}
                    className="draggable"
                    style={{backgroundColor:t.color}}
                >
                    {t.name}
                </div>
            )
        })
        return (
            <div className="container-drag">
                <h2>DRAG AND DROP</h2>
                <div className="wip">
                    <span className="task-header">wip</span>
                    {tasks.wip}
                </div>
                <div 
                    className="droppable" 
                    onDragOver={e=>this.onDragOver(e)} 
                    onDrop={e=>this.onDrop(e,"complete")}
                >
                    <span className="task-header">complete</span>
                    {tasks.complete}
                </div>
            </div>    
        );
    }
}

export default Drag;