const Card = (props) => (
    <div className="card">
        <img className="card-img-top" style={{height:"200px", objectFit:"cover", }} src={props.img} alt="rand_img"/>
        <div className="card-body">
            <div className="card-text text-muted"> {props.text} </div>
        </div>
    </div>
);

export default Card;
