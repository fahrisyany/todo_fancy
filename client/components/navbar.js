Vue.component('navbar-home', {
  template: `
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" :style="{ backgroundColor: color }">
        <a class="navbar-brand text-white" href="#"> Todo-fancy </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <button class="btn btn-outline-light" @click="logout" style="margin-left: 5px">Logout</button>
        </div>
      </nav>
    </div>
  `,

  data: function() {
    return {
      color: '#ff5c5c',
    }
  },

  methods: {
    logout: function() {
      localStorage.removeItem('token')
      window.location = 'http://localhost:8080/auth.html'
    },
  },
}) 