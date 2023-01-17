import { useLoaderData } from 'react-router-dom'
import { Form, Link } from "react-router-dom"
import { useState } from 'react'
import React from 'react'


function Index(props) {

  // load bookmarks from api
  const bookmarks = useLoaderData()
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  console.log(bookmarks)
  
  
  return (<>
    <div>
      <h2>Create a Bookmark</h2>
      <Form onSubmit={(event) =>{setTitle(''); setUrl('')}} action="/create" method="post">
        <input type="input" name="title" placeholder="bookmark title" value={title} onChange={e =>{setTitle(e.target.value)}} />
        <input type="input" name="url" placeholder="add url" value={url} onChange={e =>{setUrl(e.target.value)}} />
        <input type="submit" value="create bookmark" /> 
      </Form>
    </div>
    <div className="bookmarks-container">
        {bookmarks.map(bookmark => (
          <div className="bookmark-card" key={bookmark._id}>
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