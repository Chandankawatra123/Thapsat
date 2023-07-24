import Image from 'next/image'
import arrowRight from '../../img/arrowRight.svg'
import arrow from "../../icons/arrow-white.svg";
export default function showcase() {
    return (
        <div>
            {/* <h3 className="m">M</h3> */}
            <div className="page-section join-banner">
                <div className="ittime">
                    <h1>It’s time to start <br />
                        investing in yourself! </h1>
                    <p>And acquire the free knowledge exchange</p>
                </div>
                <div className="join-banner-right">
                    <div className="droptext">
                        <span>Its totally free! </span>
                        <div className="arrow">
                            <Image src={arrowRight} alt='' width={30} height={30} />
                        </div>
                    </div>
                    <div className="infos"> 
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email Address' />
                        <button>Join The Party 🎉
                            <Image src={arrow} width={15} height={15} />
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}
