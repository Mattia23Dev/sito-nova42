import GoTop from "./custom/GoTop";
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Footer = ({bg}) =>{

    return(
        <div className={bg || 'bg-white' + ' pt-5'}>

            <GoTop />

            <div className="col-12 col-md-10 mx-auto margin-gray p-4 p-md-0">
                <div className="row mt-4">
                    <div className="d-flex col-12 col-md-6">
                        <h5 className="w-100 text-gray size-14 text-center text-md-start h-3-rem">Copyright © 2022 Nova42 All rights reserved</h5>
                    </div>
                    <div className="d-flex flex-column flex-md-row col-12 col-md-6 space-around">
                        <p className="text-gray size-14 text-center text-md-start text-md-end pointer h-3-rem">Nova42 S.r.l. - Roma (RM) Viale dell'Arte 19/A - 00144 - P.iva 16709281006</p>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex flex-column flex-md-row col-12 col-md-6 mx-auto space-around order-1 order-md-2">
                        {/* <h5 className="text-gray size-14 text-center text-md-start text-md-end pointer h-3-rem">Disclaimer</h5> */}
                        <Link href={'/privacy'}>
                            <h5 className="text-gray size-14 text-center text-md-start text-md-end pointer h-3-rem"> Privacy Policy</h5>
                        </Link>
                        {/* <h5 className="text-gray size-14 text-center text-md-start text-md-end pointer h-3-rem">Terms & Conditions</h5> */}
                        {/* <Link href={'https://www.devben.app'}>
                            <h5 className="text-gray size-14 text-center text-md-start text-md-end pointer h-3-rem">dev<strong>Ben</strong></h5>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )


}


export default Footer;