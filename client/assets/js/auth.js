token = localStorage.getItem('token')
if(token) {
    window.location = 'index.html'
}

new Vue({ 
    el: '#app',
    data: {
        message: '',
        logo: "https://i.imgur.com/zJI0hWZ.png",
        email: '',
        password: ''
    },
    methods: {
        login: function() {
            axios({
                method:'POST',
                url:'http://35.240.228.34/signin',
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