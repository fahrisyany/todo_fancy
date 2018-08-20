token = localStorage.getItem('token')
if(!token) {
    window.location = 'auth.html'
}  