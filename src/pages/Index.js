import { useLoaderData } from 'react-router-dom'

function Index(props) {
    // load bookmarks from api
    const bookmarks = useLoaderData()
    console.log(bookmarks)

    return (<>
      <div className="bookmarks-container">
          {bookmarks.map(bookmark => (
            <div className="bookmark-card" key={bookmark._id}>
              <a href={bookmark.url}>
                <div className="bookmark-text">{bookmark.title}</div>
              </a>
            </div>
          ))}
      </div>
    </>)
  }
  
  export default Index