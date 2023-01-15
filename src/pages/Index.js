import { useLoaderData } from 'react-router-dom'

function Index(props) {
    // load bookmarks from api
    const bookmarks = useLoaderData()

    return (<>
      <div className="bookmarks">
          <h1>Index Page</h1>
      </div>
    </>)
  }
  
  export default Index