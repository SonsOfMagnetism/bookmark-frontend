import { redirect } from "react-router-dom"

const URL = "https://bookmark-backend-dev.onrender.com"   

export const createAction = async ({ request }) => {
  const formData = await request.formData()
  
  const newBookmark = {
    title: formData.get("title"),
    url: formData.get("url"),
  }
  
  await fetch(URL + "/bookmark", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBookmark),
  })
  return redirect("/")
}

// update
export const updateAction = async ({ request, params }) => {
    const formData = await request.formData()

    const updateBookmark = {
      title: formData.get("title"),
      url: formData.get("url")
    }

    await fetch(URL + "/bookmark/" + params.id, {
       method: "put",
       headers: {
          "Content-Type": "application/json"
       },
       body: JSON.stringify(updateBookmark) 
    })
    return redirect("/")
}


export const deleteAction = async ({params}) => {
  await fetch(URL + "/bookmark/" + params.id,{
    method:"delete"})
    return redirect("/")
}