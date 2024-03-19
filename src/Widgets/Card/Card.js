import './Card.css'

function Card(img, title) {
    return (
        <h1>
            <div className="title">{title}</div>
            <img src={img} alt="" className="card" />
        </h1>
    )
}

export default Card;