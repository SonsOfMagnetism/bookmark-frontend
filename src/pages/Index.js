import { useLoaderData } from 'react-router-dom'
import { Form, Link } from "react-router-dom"
import { useState } from "react"

function Index(props) {

  // load bookmarks from api
  const bookmarks = useLoaderData()
  console.log(bookmarks)


  const [value, setValue] = useState("")
  

  const onChange = (event) => {
      setValue(event.target.value)
  }

  return (<>
    <div>
      <h2>Create a Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="bookmark title" />
        <input type="input" name="url" placeholder="add url" />
        <input type="submit" value="create bookmark" /> 
      </Form>
      
    </div>

    <div className="bookmarks-container">

    <div>
        <input type="text" placeholder="Search..." value={value} onChange={onChange}/>
    </div>

      {bookmarks.filter(item => {

        const searchWord = value.toLowerCase()
        const title = item.title.toLowerCase()

        return title.startsWith(searchWord)
      })
        .map(bookmark => (
          <div  className="bookmark-card" key={bookmark._id}>
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              <div className="bookmark-text">{bookmark.title}</div>
            </a>
            <Link to={`update/${bookmark._id} `} >
              <button>&#9998;</button>
            </Link>
            <Form action={`/delete/${bookmark._id}`} method="post">
              <input type="submit" value='delete' />
            </Form>

          </div>
        ))}
    </div>

    </>)
}

export default Index