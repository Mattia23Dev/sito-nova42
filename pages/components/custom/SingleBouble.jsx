const SingleBouble = ({title, text }) => {

    return (
        <div className={`p-4 bouble`}>
            <h4 className="size-20 weight-700 text-left text-uppercase color-violet">{title}</h4>
            <p className="size-16 weight-400 text-left" dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    )

}

export default SingleBouble