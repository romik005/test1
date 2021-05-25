import React, { useEffect, useState } from "react";
import axios from 'axios';
import Protfoli from "./componets/Portfolio.jsx";


function Portfolio() {

    const [pport, setPport] = useState();

    useEffect(() => {
        document.title = 'Portfolio';
        
        async function portfoiloapi() {
            await axios.get('/api/application').then(response => { 
                console.log("response")
                setPport(response.data);
            })
            .catch(error => {
                console.log("error.response")
            });
            
        }
        portfoiloapi();
    }, []);
    return (
        <>  
            <section className="u-clearfix u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-white u-section-1 laravel_benner" id="carousel_7f69">
                <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                    <div className="u-gutter-0 u-layout">
                        <div className="u-layout-col">
                            <div className="u-size-60">
                                <div className="u-layout-row laravel_slider" style={{ backgroundImage: 'url("/assets/images/BACK1.png")' }}>
                                    <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-left-cell u-size-22 u-white u-layout-cell-1 laravel_slider_text">
                                        <div className="u-container-layout u-container-layout-1">
                                            <h2 className="u-text u-text-custom-color-3 u-text-1" style={{ fontWeight: 600 }}>Work directory </h2>
                                            <h1 className="u-custom-font u-text u-text-custom-color-2 u-text-2 laravel_heder">
                                                <span className="typewrite" data-period={2000} data-type="[ &quot;Curious, What We Did?&quot;, &quot;Game Development&quot;, &quot;Professional IT Services&quot;, &quot;Professional IT Services&quot; ]">
                                                </span>
                                            </h1>
                                            <p className="u-custom-font u-text u-text-body-color u-text-3 laravel_servies_title_description" style={{ fontWeight: 500 }}>Go through our last deployed project to know about our excellence and capabilities. We built values through our work.</p>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-layout-cell u-right-cell u-size-38 u-layout-cell-2">
                                        <div className="u-container-layout u-container-layout-2">
                                            <div className="laravel_leptop_slider">
                                                <img src="/assets/images/product/computerman.png" className="laravel_product_1" alt='' />
                                                <img src="/assets/images/product/camera.png" className="laravel_product_2" alt='' />
                                                <img src="/assets/images/product/game.png" className="laravel_product_3" alt='' />
                                                <img src="/assets/images/product/play.png" className="laravel_product_4" alt='' />
                                                <img src="/assets/images/product/gym.png" className="laravel_product_5" alt='' />
                                                <img src="/assets/images/animation/10.png" className="laravel_product10" alt='' />
                                                <img src="/assets/images/animation/9.png" className="laravel_icon9" alt='' />
                                                <img src="/assets/images/animation/11.png" className="laravel_product11" alt='' />
                                                <img src="/assets/images/animation/12.png" className="laravel_product12" alt='' />
                                                <img src="/assets/images/animation/10.png" className="laravel_product13" alt='' />
                                                <img src="/assets/images/animation/16.png" className="laravel_icon16" alt='' />
                                                <img src="/assets/images/animation/17.png" className="laravel_icon17" alt='' />
                                                <img src="/assets/images/animation/13.png" className="laravel_icon13" alt='' />
                                            </div>
                                            <div className="laravel_phone_slider">
                                                <img src="/assets/images/product/full_3.png" alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-section-6" id="sec-dc68">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-tab-links-align-justify u-tabs u-tabs-1">
                        <ul className="u-tab-list u-unstyled laravel_project_title laravel_stylist_scroller" role="tablist">
                            <li className="u-tab-item" role="presentation">
                                <a className="active u-border-3 u-border-active-custom-color-2 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-tab-link u-tab-link-1 laravel_portfolio" id="link-tab-6e68" href="#tab-6e68" role="tab" aria-controls="tab-6e68" aria-selected="true">Android</a>
                            </li>
                            <li className="u-tab-item" role="presentation">
                                <a className="u-border-3 u-border-active-custom-color-2 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-tab-link u-tab-link-2 laravel_portfolio" id="link-tab-17bd" href="#tab-17bd" role="tab" aria-controls="tab-17bd" aria-selected="false">ios</a>
                            </li>
                            <li className="u-tab-item" role="presentation">
                                <a className="u-border-3 u-border-active-custom-color-2 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-tab-link u-tab-link-3 laravel_portfolio" id="link-tab-1761" href="#tab-1761" role="tab" aria-controls="tab-1761" aria-selected="false">UI/UX Design</a>
                            </li>
                            <li className="u-tab-item" role="presentation">
                                <a className="u-border-3 u-border-active-custom-color-2 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-tab-link u-tab-link-4 laravel_portfolio" id="link-tab-bfd6" href="#tab-bfd6" role="tab" aria-controls="tab-bfd6" aria-selected="false">Game Development</a>
                            </li>
                            <li className="u-tab-item" role="presentation">
                                <a className="u-border-3 u-border-active-custom-color-2 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-tab-link u-tab-link-5 laravel_portfolio" id="link-tab-9f8b" href="#tab-9f8b" role="tab" aria-controls="tab-9f8b" aria-selected="false">Web Devlopment</a>
                            </li>
                            <li className="u-tab-item" role="presentation">
                                <a className="u-border-3 u-border-active-custom-color-2 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-tab-link u-tab-link-6 laravel_portfolio" id="link-tab-2eb6" href="#tab-2eb6" role="tab" aria-controls="tab-2eb6" aria-selected="false">Character Design</a>
                            </li>
                        </ul>
                        <div className="u-tab-content">
                            <div className="u-container-style u-tab-active u-tab-pane" id="tab-6e68" role="tabpanel" aria-labelledby="link-tab-6e68">
                                <div className="u-container-layout u-container-layout-1">
                                    <div className="u-align-center-md u-align-center-sm u-align-center-xs u-gallery u-layout-grid u-show-text-on-hover u-gallery-1">
                                        <div className="u-gallery-inner u-gallery-inner-1">

                                            {pport ?
                                                (
                                                    <Protfoli data={pport} type='android' />
                                                ) :
                                                (
                                                    ''
                                                )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-tab-pane" id="tab-17bd" role="tabpanel" aria-labelledby="link-tab-17bd">
                                <div className="u-container-layout u-container-layout-2">
                                    <div className="u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-2">
                                        <div className="u-gallery-inner u-gallery-inner-2">

                                            {pport ?
                                                (
                                                    <Protfoli data={pport} type='ios' />
                                                ) :
                                                (
                                                    ''
                                                )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-tab-pane" id="tab-1761" role="tabpanel" aria-labelledby="link-tab-1761">
                                <div className="u-container-layout u-container-layout-3">
                                    <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-3">
                                        <div className="u-gallery-inner u-gallery-inner-3">
                                            {pport ?
                                                (
                                                    <Protfoli data={pport} type='desing' />
                                                ) :
                                                (
                                                    ''
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-tab-pane" id="tab-bfd6" role="tabpanel" aria-labelledby="link-tab-bfd6">
                                <div className="u-container-layout u-container-layout-4">
                                    <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-4">
                                        <div className="u-gallery-inner u-gallery-inner-4">
                                            {pport ?
                                                (
                                                    <Protfoli data={pport} type='unity' />
                                                ) :
                                                (
                                                    ''
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-tab-pane" id="tab-9f8b" role="tabpanel" aria-labelledby="link-tab-9f8b">
                                <div className="u-container-layout u-container-layout-5">
                                    <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-5">
                                        <div className="u-gallery-inner u-gallery-inner-5">
                                            {pport ?
                                                (
                                                    <Protfoli data={pport} type='nodejs' />
                                                ) :
                                                (
                                                    ''
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-tab-pane" id="tab-2eb6" role="tabpanel" aria-labelledby="link-tab-2eb6">
                                <div className="u-container-layout u-container-layout-6">
                                    <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-6">
                                        <div className="u-gallery-inner u-gallery-inner-6">
                                            {pport ?
                                                (
                                                    <Protfoli data={pport} type='reactnative' />
                                                ) :
                                                (
                                                    ''
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
