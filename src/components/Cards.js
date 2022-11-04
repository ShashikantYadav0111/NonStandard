import "./Component.css"
export default function Cards(props) {
    return (
        <div className="maincard">
            <img style={{ width: '100%', height: "50%", borderRadius: '10px' }} src={props.charimg} alt='' />
            <div className="cardarea">
                <h2 style={{ margin: '10px 1px 20px 1px', height: '20%' }}>{props.title}</h2>
                <blockquote style={{ height: '50%' }}>
                    {props.quote}
                    <span> - {props.title}</span>
                </blockquote>
                <h3>{props.animename}</h3>

            </div>
            <div class="container">
                <a class="btn btn-1" href="google.com">FLIP</a>
            </div>
        </div>
    )
}