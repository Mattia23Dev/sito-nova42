import Image from "next/image";
import Link from "next/link";

const Card = ({image,title,text, link='/', call})=>{
    return(
        <>
            <div className="col-12 col-md-4 p-4 relative box-center flex-column">
                <Image className="relative mx-auto" src={image} width={150} height={150} objectFit="cover" alt="nova web agency"/>
                <h3 className="size-22 weight-800 text-capitalize mt-3 text-center">{title}</h3>
                <p className="size-16 weight-400 text-center">{text}</p>
                <Link href={link}>
                    <button className="btn btn-nova-fill size-16">{call}</button>
                </Link>
            </div>
        </>
    )
}

export default Card