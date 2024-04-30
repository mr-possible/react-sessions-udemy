import { ReactElement } from "react"

interface ImageShowProps {
    image: Record<string, any>
}

function ImageShow({image}: ImageShowProps): ReactElement {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow
