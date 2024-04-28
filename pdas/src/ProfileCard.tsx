import { ReactElement } from "react"

interface ProfileCardProps {
    title: string,
    handle: string,
    image: string,
    content: string
}

function ProfileCard(props: ProfileCardProps): ReactElement {
    const { title, handle, image, content } = props
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img
                        src={image}
                        alt="pda logo"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{content}</div>
            </div>

        </div>

    )
}

export default ProfileCard