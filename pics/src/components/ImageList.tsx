import { ReactElement } from "react"
import ImageShow from "./ImageShow"
import '../css/ImageList.css'

interface ImageListProps {
    images: Record<string, any>[]
}

function ImageList({ images }: ImageListProps): ReactElement {
    const renderedImages = images.map(
        (image) => {
            return <ImageShow key={image.id} image={image}/>
        }
    )
    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}

export default ImageList
