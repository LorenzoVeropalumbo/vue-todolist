var app = new Vue(
    {
        el: '#root',
        data: {

            newTodoText: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                }
            ]
        },
        methods: {
            addNewTodo() {
                if(this.newTodoText.length > 0) {
                    // Pushare nell'array newTodoText
                    const newTodoObj = {
                        'text': this.newTodoText,
                        'done': false,
                    }
                    this.todos.push(newTodoObj);
                    this.newTodoText = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            TodoOrNotTodo(singleTodo) {
                singleTodo.done = ! singleTodo.done;
            }
        }
    }
);