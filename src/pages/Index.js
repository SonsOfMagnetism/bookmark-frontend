import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Index(props) {
    // load bookmarks from api
    const bookmarks = useLoaderData()
    console.log(bookmarks)

    return (<>
      <div className="bookmarks-container">
          {bookmarks.map(bookmark => (
            <div className="bookmark-card" key={bookmark._id}>
              <Link to={bookmark.url}>
                <div className="bookmark-text">{bookmark.title}</div>
              </Link>
            </div>
          ))}
      </div>
    </>)
  }
  
  export default Index