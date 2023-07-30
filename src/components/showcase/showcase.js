import Image from 'next/image'
import arrowRight from '../../img/arrowRight.svg'
import arrow from "../../icons/arrow-white.svg";
export default function showcase() {
    return (
        <div>
            {/* <h3 className="m">M</h3> */}
            <div className="page-section join-banner" style={{ background: "rgba(13, 55, 142, 0.8)", boxShadow: "rgba(11, 11, 57, 0.5) 0px 4px 12px", borderRadius: "18px", backdropFilter: "blur(30px)" }}>
                <div className="ittime">
                    <h1>It’s time to start <br />
                        investing in yourself! </h1>
                    <p>And acquire the free knowledge exchange</p>
                </div>
                <div className="join-banner-right">
                    <div className="droptext">
                        <span>Its totally free! </span>
                        <div className="arrow">
                            <Image src={arrowRight} alt='' width={30} height={30} loading="lazy" />
                        </div>
                    </div>
                    <div className="infos"> 
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email Address' />
                        <button>Join The Party 🎉
                            <Image src={arrow} width={15} height={15} loading="lazy" />
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}
