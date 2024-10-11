import React, { Component } from "react";
import style from "./TaskList.module.css"

class TaskList extends Component {
    tasks = [
        { id: 1, text: 'Перше завдання' },
        { id: 2, text: 'Друге завдання' },
        { id: 3, text: 'Третє завдання' },
        { id: 4, text: 'Четверте завдання' },
        { id: 5, text: 'П`яте завдання' },
        { id: 6, text: 'Шосте завдання' },
    ]
    delete = (id) => {
        const task = document.getElementById(`${id}`);
        task.remove()
    }

    add = () => {
        const newTaskText = this.input.value;
        const newTask = {
            id: this.tasks.length + 1,
            text: newTaskText
        };
        this.tasks.push(newTask);
        this.forceUpdate();
        this.input.value = "";
    };

    render() {
        return (
            <div className={style.container}>
                <h1>Список завдань</h1>
                <ul className={style.taskList}>
                    {this.tasks.map((task) => (
                        <li key={task.id} id={task.id} className={style.taskItem}>
                            <p>{task.text}</p>
                            <button
                                className={style.buttonDelete}
                                onClick={() => this.delete(task.id)}
                            >
                                Видалити
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    <input
                        type="text"
                        placeholder="Нове завдання"
                        ref={(input) => (this.input = input)}
                        className={style.inputTask}
                    />
                    <button onClick={this.add} className={style.buttonAdd}>
                        Додати завдання
                    </button>
                </div>
            </div>
        );
    }
}

export default TaskList;