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
                                <div>
                                    <div className="u-layout-row career_moniter">
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-1">
                                                <img alt="" className='life_images' src='http://134.209.103.120:5500/public/images/lifeimages-1621836280894.png' />
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-10">
                                            <div className="u-container-layout u-container-layout-2 careerlife_date">
                                                <div className='life_date_show'>
                                                    <div className='life_title'>26 Jun</div>
                                                </div>
                                                <div className="life_line_show"></div>  
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-3">
                                                <div className="u-container-layout u-valign-middle u-container-layout-1">
                                                    <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>New Year celebration</h2>
                                                    <div className="laravel_uiux_border" style={{ width: '-webkit-fill-available' }}>
                                                        <div style={{ width: '80px', margin: 'auto', background: 'white' }}>
                                                            <i className="fas fa-diamond" />
                                                            <i className="fas fa-diamond" />
                                                            <i className="fas fa-diamond" />
                                                        </div>
                                                    </div>
                                                    <div className='life_description'>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='career_phone'>
                                        <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>New Year celebration</h2>
                                        <div className="laravel_uiux_border" style={{ zIndex: 1, position: 'relative' }}>
                                            <div style={{ width: '80px', margin: 'auto', background: 'white', position: 'absolute', left: 0, right: 0 }}>
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                            </div>
                                        </div>
                                        <div className='life_description' style={{ textAlign: 'center', padding: "40px 0px" }}>
                                            
                                        </div>
                                        <img alt="" className='life_images' src='http://134.209.103.120:5500/public/images/lifeimages-1621836280894.png' />
                                    </div>
                               </div>

                                <div>
                                    <div className="u-layout-row career_moniter">
                                        <div className="u-container-style u-layout-cell u-size-25 u-container-layout-1">
                                            <div className="u-container-layout u-container-layout-1">
                                                <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>Charity trust</h2>
                                                <div className="laravel_uiux_border" style={{ width: '-webkit-fill-available' }}>
                                                    <div style={{ width: '80px', margin: 'auto', background: 'white' }}>
                                                        <i className="fas fa-diamond" />
                                                        <i className="fas fa-diamond" />
                                                        <i className="fas fa-diamond" />
                                                    </div>
                                                </div>
                                                <div className='life_description'>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-10">
                                            <div className="u-container-layout u-container-layout-2 careerlife_date">
                                                <div className='life_date_show'>
                                                    <div className='life_title'>26 Feb</div>
                                                </div>
                                                <div className="life_line_show"></div>
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-3">
                                                <div className="u-container-layout u-valign-middle ">
                                                    <img alt="" className='life_images' src='http://134.209.103.120:5500/public/images/lifeimages-1621835279608.png' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='career_phone'>
                                        <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>Charity trust</h2>
                                        <div className="laravel_uiux_border" style={{ zIndex: 1, position: 'relative' }}>
                                            <div style={{ width: '80px', margin: 'auto', background: 'white', position: 'absolute', left: 0, right: 0 }}>
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                            </div>
                                        </div>
                                        <div className='life_description' style={{ textAlign: 'center', padding: "40px 0px" }}>
                                        </div>
                                        <img alt="" className='life_images' src='http://134.209.103.120:5500/public/images/lifeimages-1621835279608.png' />
                                    </div>
                                </div>

                                <div>
                                    <div className="u-layout-row career_moniter">
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-1">
                                                <img alt="" className='life_images' src='http://134.209.103.120:5500/public/images/lifeimages-1621835174098.png' />
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-10">
                                            <div className="u-container-layout u-container-layout-2 careerlife_date">
                                                <div className='life_date_show'>
                                                    <div className='life_title'>26 Mar</div>
                                                </div>
                                                <div className="life_line_show"></div>  
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-3">
                                                <div className="u-container-layout u-valign-middle u-container-layout-1">
                                                    <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>Formhouse</h2>
                                                    <div className="laravel_uiux_border" style={{ width: '-webkit-fill-available' }}>
                                                        <div style={{ width: '80px', margin: 'auto', background: 'white' }}>
                                                            <i className="fas fa-diamond" />
                                                            <i className="fas fa-diamond" />
                                                            <i className="fas fa-diamond" />
                                                        </div>
                                                    </div>
                                                    <div className='life_description'>
                                                        We believe in offering better rewards than just cash to encourage our employees to do better.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='career_phone'>
                                        <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>Formhouse</h2>
                                        <div className="laravel_uiux_border" style={{ zIndex: 1, position: 'relative' }}>
                                            <div style={{ width: '80px', margin: 'auto', background: 'white', position: 'absolute', left: 0, right: 0 }}>
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                            </div>
                                        </div>
                                        <div className='life_description' style={{ textAlign: 'center', padding: "40px 0px" }}>
                                            We believe in offering better rewards than just cash to encourage our employees to do better.
                                        </div>
                                        <img alt="" className='life_images' src='http://134.209.103.120:5500/public/images/lifeimages-1621835174098.png' />
                                    </div>
                               </div>


                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Career
