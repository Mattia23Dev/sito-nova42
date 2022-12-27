


const Bouble = ({title, text, position='right'}) => {

    const arrow = position=='right'?'bouble-right':'bouble-left';

    return (
        <div className={`p-3 bouble ${arrow}`}>
            <h4 className="size-20 weight-700 text-left text-uppercase">{title}</h4>
            <p className="size-16 weight-400 text-left" dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    )



}



export default Bouble