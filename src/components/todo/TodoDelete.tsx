import React from "react"
import { FakeTodoService } from "../../services/FakeTodoService2";

export default class TodoDelete extends React.Component {

    todoService = new FakeTodoService()   
    
    constructor(props: any) {
        super(props)   
        let todoService = new FakeTodoService()     
        this.state = todoService;
    }

    render() {
        return (
            <form>
                <div className="uk-margin">
                    <label>Item</label>
                </div>

                {this.todoService.getById(1).title}

                <button className="uk-button uk-button-danger">Confirm</button>
            </form>
        );
    }
}
