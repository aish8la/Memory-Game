import "./Card.css";

export function Card({ id, imageURL, scoreSetter, cardArraySetter, clickHandler }) {

    return (
        <div className="card"
            id={id}
            onClick={ e => {
                const cardID = e.target.closest(".card").id; 
                clickHandler(cardID, scoreSetter, cardArraySetter);
            }}
        >
            <img src={imageURL} alt="" />
        </div>
    )
}