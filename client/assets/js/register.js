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
        password: '',
        fullname: ''
    },
    methods: {
        signup: function() {
            axios({
                method:'POST',
                url:'http://localhost:3000/signup',
                data: {
                    fullname: this.fullname,
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
                this.message = err.message
            })
        }
    }
})