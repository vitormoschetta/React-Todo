import { TodoService } from "../../services/TodoService";


interface TodoDeleteProps {
    todoService: TodoService
    children?: string
}

export default function TodoDelete(props: TodoDeleteProps) {

    const { todoService } = props

    return (
        <form>
            <div className="uk-margin">
                <label>Item</label>
            </div>

            <button className="uk-button uk-button-danger">Confirm</button>
        </form>
    );

}
