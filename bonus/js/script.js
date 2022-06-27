var app = new Vue(
    {
        el: '#root',
        data: {
            
            copyTodoObj: {},
            newTodoObj: {},
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
                    this.newTodoObj = {
                        'text': this.newTodoText,
                        'done': false,
                    }
                    this.copyTodoObj = {...this.newTodoObj}
                    this.todos.push(this.copyTodoObj);
                    this.newTodoText = '';
                    this.copyTodoObj = {};
                    this.newTodoObj = {};
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