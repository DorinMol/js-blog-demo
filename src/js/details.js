window.addEventListener('DOMContentLoaded', () => {
  const endpoint = 'http://localhost:3000'
  const root = document.querySelector('#root')
  const id = new URLSearchParams(window.location.search).get('id')

  document.addEventListener('submit', async (e) => {
    try {
      e.preventDefault()
      await fetch(`${endpoint}/blogs/${e.target.blogId.value}`, {
        method: 'DELETE',
      })
      // redirect
      window.location.replace('/src/pages/index.html')
    } catch (err) {
      alert(`Something went wrong - ${err.message}`)
    }
  })

  const render = async () => {
    const blogResponse = await fetch(`${endpoint}/blogs/${id}`)
    const blog = await blogResponse.json()

    // grab user information
    const userResponse = await fetch(`${endpoint}/users/${blog.userId}`)
    const user = await userResponse.json()

    const dataToRender = `
    <form>
      <div class="card col-md-8 mx-auto mt-3">
        <div class="card-body">
          <h5 class="card-title">${blog.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author: ${user.name}</h6>
          <p class="card-text">${blog.body}</p>
          <button class="btn btn-danger">Remove</button>
          <input type="hidden" name="blogId" value=${blog.id} />
        </div>
      </div>
    </form>
      `

    root.innerHTML = dataToRender
  }

  render()
})
