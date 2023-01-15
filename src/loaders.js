// this URL is the dev branch
const URL = "http://localhost:4000"; //"https://bookmark-backend-dev.onrender.com"

// loader for index route
export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/bookmark")
    const bookmarks = response.json()
    return bookmarks
}