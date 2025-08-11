import "./Card.css";

export function Card() {
    const url = "../../../public/132.png";
    const image = new Image();
    image.src = url;

    return (
        <div className="card">
            <img src={url} alt="" />
        </div>
    )
}