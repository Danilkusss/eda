

export default function Item(props){
    return(
        <div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="price">
                <h3>{props.price}</h3>
            </div>
            <div className="Info-item">
                <p>{props.about}</p>
            </div>
        </div>
    )
}