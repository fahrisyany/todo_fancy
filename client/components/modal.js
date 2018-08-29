Vue.component('modal-upload', {
  template: `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Upload your Sticker</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Image Sticker</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="processFile($event.target)" accept="image/png, image/jpeg">
              </div>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="name" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary" @click="imageUpload">Upload</button>
          </div>
        </div>
      </div>
    </div>
  `,

  data: function() {
    return {
      image: '',
      name: ''
    }
  },
  methods: {
    // imageUpload() {
    //   let formData = new FormData()
    //   formData.append('image', this.image)
    //   axios.post('http://104.197.64.216/upload', formData)
    //     .then(result => {
    //       let imgUrl = result.data.link
    //       axios({
    //         method: 'POST',
    //         url: 'http://104.197.64.216/api/stickers',
    //         data: {
    //           name: this.name,
    //           imageUrl: imgUrl
    //         },
    //         headers: {
    //           'token': localStorage.getItem('token')
    //         }
    //       })
    //         .then(() => {
    //           swal(
    //             'Upload Success!',
    //             'Stickergram, Inc',
    //             'success'
    //           )
    //           setTimeout(() => {
    //             window.location = 'http://localhost:8080/index.html'
    //           }, 2000)
    //         })
    //         .catch(err => {
    //           swal({
    //             type: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong!',
    //             footer: '<a href>Why do I have this issue?</a>'
    //           })
    //         })
    //     })
    //     .catch(err => {
    //       swal({
    //         type: 'error',
    //         title: 'Oops...',
    //         text: 'Something went wrong!',
    //         footer: '<a href>Why do I have this issue?</a>'
    //       })
    //     })
    // },
    // processFile(data) {
    //   this.image = data.files[0]
    // },
    
  }
})