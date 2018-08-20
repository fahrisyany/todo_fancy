token = localStorage.getItem('token')
if(token) {
    window.location = 'index.html'
}

new Vue({ 
    el: '#app',
    data: {
        message: '',
        logo: "https://avatars2.githubusercontent.com/u/42405296?s=200&v=4",
        email: '',
        password: ''
    },
    methods: {
        login: function() {
            axios({
                method:'POST',
                url:'http://localhost:3000/api/users/signin',
                data: {
                    email: this.email,
                    password: this.password
                },
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then( response => {
                localStorage.setItem('token', response.data.token)
                window.location = 'index.html'
            })
            .catch( err => {
                this.message = 'Username / password is wrong'
            })
        }
    }
})