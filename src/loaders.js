// this URL is the dev branch
const URL = "https://bookmark-backend-dev.onrender.com"

// loader for index route
export const bookmarksLoader = async () => {
    const response = await fetch(URL)
    const bookmarks = response.json()
    return bookmarks
}