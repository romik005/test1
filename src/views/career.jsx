import React, { useEffect } from "react";

function Career() {

    useEffect(() => {
        document.title = 'Career';
    });

    return (
        <>
            <div className='carrerpage'>
                <section className="u-clearfix u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-white u-section-1 laravel_benner" id="carousel_7f69">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-gutter-0 u-layout">
                            <div className="u-layout-col">
                                <div className="u-size-60">
                                    <div className="u-layout-row laravel_slider" style={{ backgroundImage: 'url("/assets/images/BACK1.png")' }}>
                                        <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-left-cell u-size-22 u-white u-layout-cell-1 laravel_slider_text">
                                            <div className="u-container-layout u-container-layout-1">
                                                <h2 className="u-text u-text-custom-color-3 u-text-1" style={{ fontWeight: 600 }}>Join us</h2>
                                                <h1 className="u-custom-font u-text u-text-custom-color-2 u-text-2 laravel_heder">
                                                    <span id='demo'></span>
                                                    <span className="typewrite" data-period={2000} data-type="[ &quot;Find Your Next Perfect Role&quot; ]">
                                                    </span>
                                                </h1>
                                                <p className="u-custom-font u-text u-text-body-color u-text-3 laravel_servies_title_description" style={{ fontWeight: 500 }}>Having specialists who develop innovative solutions to deliver user friendly and perfectly organized products for every project.</p>
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-right-cell u-size-38 u-layout-cell-2">
                                            <div className="u-container-layout u-container-layout-2">
                                                <div className="laravel_leptop_slider">
                                                    <img src='/assets\images\contactus/image.png' className="laravel_career_images1" alt='' />
                                                </div>
                                                <div className="laravel_phone_slider">
                                                    <img src='/assets\images\contactus/image.png' alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-clearfix u-section-3" id="sec-58e6">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-expanded-width u-list u-list-1">
                            <div className="u-size-30">
                                <div className="u-layout-row">
                                    <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                                        <div className="u-container-layout u-valign-middle">
                                            <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title">Current Openings</h2>
                                            <div className="laravel_uiux_border" style={{marginBottom:'0px'}}>
                                                <div style={{ width: '80px', margin: 'auto', background: 'white' }}>
                                                    <i className="fas fa-diamond" />
                                                    <i className="fas fa-diamond" />
                                                    <i className="fas fa-diamond" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-size-30">
                                <div style={{marginBottom:'80px'}}>
                                    <div className="u-align-left u-container-style u-list-item u-repeater-item career_apply_box">
                                        <div className="u-container-layout u-similar-container u-container-layout-1" style={{ borderRadius: '20px',padding:'40px' }}>
                                            <h2 className='laravel_career_title'>Flutter Developer</h2>
                                            <button className='laravel_career_botton' id='careerpopupopen' applydata='flutter'>Apply</button>
                                        </div>
                                    </div>
                                    <div className="u-align-left u-container-style u-list-item u-repeater-item career_apply_box">
                                        <div className="u-container-layout u-similar-container u-container-layout-2" style={{ borderRadius: '20px',padding:'40px' }}>
                                            <h2 className='laravel_career_title'>Android Developer</h2>
                                            <button className='laravel_career_botton' id='careerpopupopen' applydata='android'>Apply</button>
                                        </div>
                                    </div>
                                    <div className="u-align-left u-container-style u-list-item u-repeater-item career_apply_box">
                                        <div className="u-container-layout u-similar-container u-container-layout-2" style={{ borderRadius: '20px',padding:'40px' }}>
                                            <h2 className='laravel_career_title'>Unity Developer</h2>
                                            <button className='laravel_career_botton' id='careerpopupopen' applydata='unity'>Apply</button>
                                        </div>
                                    </div>
                                    <div className="u-align-left u-container-style u-list-item u-repeater-item career_apply_box">
                                        <div className="u-container-layout u-similar-container u-container-layout-2" style={{ borderRadius: '20px',padding:'40px' }}>
                                            <h2 className='laravel_career_title'>React Developer</h2>
                                            <button className='laravel_career_botton' id='careerpopupopen' applydata='react'>Apply</button>
                                        </div>
                                    </div>
                                    <div className="u-align-left u-container-style u-list-item u-repeater-item career_apply_box">
                                        <div className="u-container-layout u-similar-container u-container-layout-2" style={{ borderRadius: '20px',padding:'40px' }}>
                                            <h2 className='laravel_career_title'>PHP Developer</h2>
                                            <button className='laravel_career_botton' id='careerpopupopen' applydata='php'>Apply</button>
                                        </div>
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