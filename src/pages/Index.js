
import {Form,  } from "react-router-dom"

function Index(props) {
  
  return (
    <div>
      <h2>Create a Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="bookmark name" />
        <input type="input" name="url" placeholder="add url" />
        

        <input type="submit" value="create bookmark" /> 
      </Form>

      </div>
  
  )
      }


      export default Index