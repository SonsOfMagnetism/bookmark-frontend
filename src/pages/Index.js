import { useLoaderData } from 'react-router-dom'
import { Form } from "react-router-dom"

function Index(props) {

  // load bookmarks from api
  const bookmarks = useLoaderData()
  console.log(bookmarks)
  
  return (<>
    <div>
      <h2>Create a Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="bookmark name" />
        <input type="input" name="url" placeholder="add url" />
        

        <input type="submit" value="create bookmark" /> 
      </Form>
    </div>

    <div className="bookmarks-container">
        {bookmarks.map(bookmark => (
          <div className="bookmark-card" key={bookmark._id}>
            <a href={bookmark.url} target="_blank">
              <div className="bookmark-text">{bookmark.title}</div>
            </a>
          </div>
        ))}
    </div>

    </>)
}

export default Index