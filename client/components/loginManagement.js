Vue.component('form-login', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
        <div>
            <form class="form-signin">
                <img class="mb-4" v-bind:src="logo" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" v-model="username" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"> Remember me
                  </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login()">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
              </form>
        </div>
        `,
    data: function() {
        return {
            logo: "https://avatars2.githubusercontent.com/u/42405296?s=200&v=4",
            username: '',
            password: '',
            message: ''
        }
    }, 
    methods: {
      login() {
        axios.post('http://35.240.228.34/signin', {
          username: this.username,
          password: this.password,
        })
        .then( response => {
          this.message = 'Welcome to Stickers App'
          if(response.msg == 'success to login') {
            localStorage.setItem('token', response.token)
            window.location='index.html'
          }
        })
        .catch( err => {
          this.message = 'Fail to signin'
        })
      }
    }
  })