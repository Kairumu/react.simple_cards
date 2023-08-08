const Component = (props) => {
    const color =
        (props.options.type === 'success') ? "rgba(110, 255, 140, 0.9)" :
        (props.options.type === 'warn') ? "rgba(252, 227, 0, 0.9)" :
        (props.options.type === 'error') ? "rgba(255, 6, 0, 0.9)" :
        (props.options.type === 'info') ? "rgba(110, 255, 200, 0.9)" : "rgba(900, 90, 90, 0.9)";

    return (
        <div className="common alarm p-1">
            <div className="card container p-3 click" style={{ maxWidth : "500px", }}>
                <div className="row">
                    <div className="col-auto vertical-center">
                        <small style={{ fontSize:"6px", lineHeight : "20px", color : color, }}>
                            <i className="fas fa-circle"/> 
                        </small>
                    </div>
                    <div className="col-auto pre-line" style={{ color : "rgba(10, 10, 10, 0.8)" }}>
                        { props.message }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component;
