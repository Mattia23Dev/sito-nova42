


const Box = ({title, text, style=''}) => {


    return (
        <div className={`p-4 box-message ${style}`}>
            <h4 className="size-22 weight-700 text-left">{title}</h4>
            <p className="size-16 weight-400 lh-28 mt-3 text-left">{text}</p>
        </div>
    )



}



export default Box