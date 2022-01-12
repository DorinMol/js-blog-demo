window.addEventListener('DOMContentLoaded', () => {
  const endpoint = 'http://localhost:3000'
  const root = document.querySelector('#root')

  document.addEventListener('submit', async (e) => {
    const title = e.target.title.value
    const body = e.target.body.value
    try {
      e.preventDefault()
      await fetch(`${endpoint}/blogs`, {
        method: 'POST',
        body: JSON.stringify({
          userId: 1,
          title,
          body,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      // redirect
      window.location.replace('/src/pages/index.html')
    } catch (err) {
      alert(`Something went wrong - ${err.message}`)
    }
  })

  const render = async () => {
    const dataToRender = `
    <form>
      <div class="card col-md-8 mx-auto mt-3">
        <div class="card-body">
          <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" name="title" placeholder="Title">
          </div>
          <div class="mb-3">
          <label for="title" class="form-label">Body</label>
          <input type="text" class="form-control" name="body" placeholder="Body">
          </div>
          <button class="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
      `

    root.innerHTML = dataToRender
  }

  render()
})
