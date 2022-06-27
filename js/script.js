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
                    
                    // creo l'obj
                    this.newTodoObj = {
                        'text': this.newTodoText,
                        'done': false,
                    };
                    // creo una copia dell'array
                    this.copyTodoObj = {...this.newTodoObj};
                    // Pushare nell'array newTodoText
                    this.todos.push(this.copyTodoObj);
                    this.newTodoText = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
        }
    }
);