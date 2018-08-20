const url = 'http://localhost:3000/api/darksky'
axios.get(url)
  .then(result => {
    console.log(result.data.currently)
    $('#weather').append(`
      <h5 class="text-white">${result.data.currently.summary}</h5>
      <img src="http://www.clker.com/cliparts/D/q/H/o/9/m/partly-sunny-weather-icon-md.png" width="100" alt="">
      <h5 class="text-white">${result.data.currently.temperature} °F</h5>
    `)
  })
  .catch(err => {
    console.log(err)
  })