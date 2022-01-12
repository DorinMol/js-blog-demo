window.addEventListener('DOMContentLoaded', () => {
  const blogsEndpoint = 'http://localhost:3000/blogs'
  const root = document.querySelector('#root')

  const render = async () => {
    const response = await fetch(blogsEndpoint)
    const blogs = await response.json()

    const dataToRender = blogs.map((blog) => {
      return `
      <div class="card col-md-8 mx-auto mt-3">
      <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${blog.body.slice(1, 10)}</h6>
        <p class="card-text">${blog.body.slice(10, 50)}</p>
        <a href="../pages/details.html?id=${
          blog.id
        }" class="card-link">read more...</a>
      </div>
    </div>
      `
    })

    root.innerHTML = dataToRender.join('')
  }

  render()
})
