// this URL is the dev branch
const URL = "https://bookmark-backend-dev.onrender.com"

// loader for index route
export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/bookmark")
    const bookmarks = response.json()
    return bookmarks
}

// loader for update route
export const bookmarkLoader = async ({params}) => {
    const response = await fetch(URL + '/bookmark/' + params.id)
    const bookmark = await response.json()
    
    return bookmark
}