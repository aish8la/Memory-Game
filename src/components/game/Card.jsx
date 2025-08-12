import "./Card.css";

export function Card({ imageURL }) {

    return (
        <div className="card">
            <img src={imageURL} alt="" />
        </div>
    )
}