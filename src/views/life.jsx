import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import Careeropening from './componets/careeropening.jsx';

function Career() {

    // const [career, setCareer] = useState();

    useEffect(() => {
        document.title = 'Life';
        async function portfoiloapi() {
            // const dd = await axios.get('/api/careerlife');
            // setCareer(dd.data);
        }
        portfoiloapi();
    }, []);

    return (
        <>
            <div className='carrerpage'>
                <section className="u-align-left u-clearfix u-section-1" id="sec-0fe2" style={{ minHeight: '0px' }}>
                    <div className="u-clearfix u-sheet u-sheet-1" style={{ minHeight: '0px' }}>
                        <h1 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-1" style={{ fontWeight: '600', fontSize: '40px', margin: '200px 0px 0px 0px' }}>Life @ Sahajanand</h1>
                        <p className="u-align-center u-text u-text-body-color life_main_description" style={{ width: '60%', margin: '16px auto' }}>We Work With the motto of "The higher engagement of&nbsp; staff enhances talent, inspires loyalty, and increased corporate results".</p>
                    </div>
                </section>
                <section className="u-align-left u-clearfix u-section-1" id="sec-0fe2" style={{minHeight:'fit-content'}}>
                    <div className="u-clearfix u-sheet u-sheet-1" style={{ marginTop: '100px',marginBottom:'100px',minHeight:'fit-content' }}>
                        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                


                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Career
