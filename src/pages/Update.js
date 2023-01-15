import { useLoaderData, Form } from "react-router-dom"


function Update(props) {

  const bookmark = useLoaderData()


    return (
      <div className="update-container">
        <h3>Update {bookmark.title}</h3>
            <Form action={`/update/${bookmark._id}`} method="post">
                <input type="input" name="title" defaultValue={bookmark.title} />
                <input type="input" name="url" defaultValue={bookmark.url} />
                <input type="submit" value="Update" />
            </Form>
      </div>
    )
  }
  
  export default Update