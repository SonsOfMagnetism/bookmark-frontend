import { useLoaderData } from 'react-router-dom'
import { Form, Link } from "react-router-dom"
import { useState } from 'react'

function Index(props) {

  // load bookmarks from api
  const bookmarks = useLoaderData()
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const [value, setValue] = useState("")

  const [sorted, setSort] = useState("")
  const sortByAlphOrder = () => {
    bookmarks.sort((a, b) => a.title.localeCompare(b.title))
    setSort(" ")
  }

  const onChange = (event) => {
      setValue(event.target.value)
  }

  return (<>
    <div className="parent">
      
      <header>
      <h2>Create a Bookmark</h2>
      </header>

      <div className="intro">
        <p>Welcome to the Bookmark'd App! Here you'll be able to save your favorite bookmarks and have them all listed. All you have to do it type a website's name and URL followed by clicking 'create bookmark' or hitting enter. Once you've added a bookmark you'll then have the ability to edit or delete a bookmark should you choose to.
        </p>
      </div>

      <div className='forminput'>
      <Form onSubmit={(event) =>{setTitle(''); setUrl('')}} action="/create" method="post">
        <input type="input" name="title" placeholder="bookmark title" value={title} onChange={e =>{setTitle(e.target.value)}} />
        <input type="input" name="url" placeholder="add url" value={url} onChange={e =>{setUrl(e.target.value)}} />
        <input type="submit" value="create bookmark" /> 
      </Form>
      </div>

      <div className='searchbox'>
      <input type="text" placeholder="Search..." value={value} onChange={onChange}/>
      <div>
        <button onClick={sortByAlphOrder}>Sort By Alphabetical Order {sorted}</button>
    </div>
        <div className="photo">
        <img src="data:image/png;base64,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" alt="Bookmark Icon"/>
      </div>
      </div>
  
    <div className="bookmarks-container">

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

</div>
    </>)
}

export default Index