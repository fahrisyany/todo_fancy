Vue.component("todo", {
  template: `<div class="container">
    <div class="row justify-content-center">
    <div class="col-md-6">
    <h1 class="text-center">Todolist</h1>
    <hr>
    <input type="text" class="form-control" placeholder="Input todolist & enter" v-model="task" v-on:keyup.enter="addTodo">
    <hr>
    <ul class="list-group">
    <div v-for="item,index in todos" v-bind:item="item" v-bind:key="index">
    
    <div class="card">
    <div class="card-body">
    {{item.task}}
    <button type="button" class="btn btn-success" @click="deleteTodo(index)">Done</button>
    <button type="button" class="btn btn-warning" v-on:click="edit(index),getOneTodo(index)">Edit</button>
    <br>
    <div class="form-group" v-if="editmode">
    <form @submit.prevent="editTask(index)">
    <label for="usr">Edit Task:</label>

    <input type="text" class="form-control" id="usr" :placeholder="item.task" v-model="taskEdit">
    <br>
    <button type="submit" class="btn btn-info">Info</button>
    
    </form>
    
    </div>
    </div>
    </div>
    
    
    </div>
    </ul>
    </div>
    </div>
    "</div>`,
  data: function() {
    return {
      todos: [],
      task: "",
      editmode: false,
      taskEdit: ""
    };
  },

  methods: {
    addTodo() {
      axios({
        method: "POST",
        url: "http://localhost:3000/todo",
        data: {
          task: this.task
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          token: localStorage.getItem("token")
        }
      })
        .then(() => {
          console.log("nice");
          this.getTodo();
          this.task = "";
        })
        .catch(err => {
          console.log(err);
        });
    },

    getTodo() {
      let token = localStorage.getItem("token");

      axios
        .get(
          "http://localhost:3000/todo",
          {},
          {
            headers: {
              token
            }
          }
        )
        .then(todo => {
          this.todos = todo.data.found;
        });
    },

    deleteTodo(index) {
      let choosenTaskId = this.todos[index]._id;
      console.log(`==>`, choosenTaskId);

      let token = localStorage.getItem("token");

      axios
        .delete(
          `http://localhost:3000/todo/${choosenTaskId}`,
          {},
          {
            headers: {
              token
            }
          }
        )
        .then(todo => {
          console.log("success");
          this.getTodo();
        })
        .catch(err => {
          console.log(err);
        });
    },
    edit: function(data) {
      this.editmode = !this.editmode;
    },

    getOneTodo(index) {
      let choosenTaskId = this.todos[index]._id;
      // console.log(choosenTaskId);

      axios({
        method: "GET",
        url: `http://localhost:3000/todo/${choosenTaskId}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          token: localStorage.getItem("token")
        }
      })
        .then(todo => {
          console.log(todo.data.found.task);

          // this.todos = todo.data.found;
        })
        .catch(err => {
          console.log(err);
        });
    },

    editTask: function(index) {
      let token = localStorage.getItem("token");
      let choosenTaskId = this.todos[index]._id;

      console.log(choosenTaskId);

      axios({
        method: "GET",
        url: `https://aws.random.cat/meow`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          token: localStorage.getItem("token")
        }
      })
        .then(result => {
          console.log(result);
          
          this.message = "success";
        })
        .catch(err => {
          console.log("gagal");

          this.message = err.message;
        });
    }
  },
  created() {
    this.getTodo();
  }
});

Vue.component("cat-image", {
  template: `
  <img :src="image" hspace="20">
  `,
  data: function() {
    return {
      image:"",
     
    };
  },
  methods: {
    getImageCat() {
      axios({
        method: "GET",
        url: `https://aws.random.cat/meow`,
        // headers: {
        //   "Access-Control-Allow-Origin": "*"
        // }
      })
        .then(image => {
          this.image=(image.data.file);

          // this.todos = todo.data.found;
        })
        .catch(err => {
          console.log(err);
        });
    }
    // toggleTodo() {
    //   this.$emit("toggleTodo", this.item);
    // },
    // deleteTodo() {
    //   this.$emit("deleteTodo", this.item);
    // }
  },
created(){
  this.getImageCat()
}
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello world"
  }
});
