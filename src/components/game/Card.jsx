import "./Card.css";

export function Card({ id, imageURL, scoreSetter, cardArraySetter, clickHandler }) {

    return (
        <div className="card"
            id={id}
            onClick={ e => {
                clickHandler(e.target.id, scoreSetter, cardArraySetter);
            }}
        >
            <img src={imageURL} alt="" />
        </div>
    )
}