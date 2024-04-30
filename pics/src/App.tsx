import { ReactElement, useState } from "react"
import SearchBar from "./components/SearchBar"
import searchImages from "./api"
import ImageList from "./components/ImageList"

function App(): ReactElement {
  const [images, setImages] = useState([])

  async function handleSubmit(term: string) {
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App
