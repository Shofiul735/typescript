import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

class ToDo {
    id: number = 0;
    title: string = '';
    completed: boolean = false;

    print(){
        console.log(this.id,this.title,this.completed);
    }
}

axios.get(url).then(res => {
    const data = res.data as ToDo;

    const ID = data.id;
    const title = data.title;
    const isCompleted = data.completed;

    console.log(ID, title, isCompleted);

})