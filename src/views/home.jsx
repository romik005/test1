import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import Protfoli from "./componets/Portfolio.jsx";


function Home() {

    const [port, setPort] = useState();

    useEffect(() => {
        document.title = 'Home';

        async function portfoiloapi() {
            const dd = await axios.get('/api/application');
            setPort(dd.data);
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
                                            <h2 className="u-text u-text-custom-color-3 u-text-1" style={{ fontWeight: 600 }}>We Provide Best IT Solution </h2>
                                            <h1 className="u-custom-font u-text u-text-custom-color-2 u-text-2 laravel_heder">
                                                <span id='demo'></span>
                                                <span className="typewrite" data-period={2000} data-type="[ &quot;Web Development&quot;, &quot;Game Development&quot;, &quot;Professional IT Services&quot;, &quot;Professional IT Services&quot; ]">
                                                </span>
                                            </h1>
                                            <p className="u-custom-font u-text u-text-body-color u-text-3 laravel_servies_title_description" style={{ fontWeight: 500 }}>Having specialists who develop innovative solutions to deliver user friendly and perfectly organized products for every project.</p>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-layout-cell u-right-cell u-size-38 u-layout-cell-2">
                                        <div className="u-container-layout u-container-layout-2">
                                            <div className="laravel_leptop_slider">
                                                <img src='/assets/images/animation/1.png' className="laravel_data" alt='' />
                                                <img src='/assets/images/animation/4.png' className="laravel_server" alt='' />
                                                <img src='/assets/images/animation/3.png' className="laravel_tebel" alt='' />
                                                <img src='/assets/images/animation/7.png' className="laravel_keybord" alt='' />
                                                <img src='/assets/images/animation/8.png' className="laravel_man8" alt='' />
                                                <img src='/assets/images/animation/2.png' className="laravel_leptop" alt='' />
                                                <img src='/assets/images/animation/19.png' className="laravel_men19" alt='' />
                                                <img src='/assets/images/animation/20.png' className="laravel_men20" alt='' />
                                                <img src='/assets/images/animation/9.png' className="laravel_icon9" alt='' />
                                                <img src='/assets/images/animation/10.png' className="laravel_icon10" alt='' />
                                                <img src='/assets/images/animation/11.png' className="laravel_icon11" alt='' />
                                                <img src='/assets/images/animation/12.png' className="laravel_icon12" alt='' />
                                                <img src='/assets/images/animation/13.png' className="laravel_icon13" alt='' />
                                                <img src='/assets/images/animation/14.png' className="laravel_icon14" alt='' />
                                                <img src='/assets/images/animation/15.png' className="laravel_icon15" alt='' />
                                                <img src='/assets/images/animation/16.png' className="laravel_icon16" alt='' />
                                                <img src='/assets/images/animation/17.png' className="laravel_icon17" alt='' />
                                                <img src='/assets/images/animation/18.png' className="laravel_icon18" alt='' />
                                            </div>
                                            <div className="laravel_phone_slider">
                                                <img src='/assets/images/Vector.png' alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-clearfix u-custom-color-5 u-section-2" id="sec-0e36">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-1">We bring the best things For you</h2>
                    <p className="u-align-center u-custom-font u-text u-text-body-color u-text-2">
                        <span style={{ fontWeight: 400 }}>
                            <span style={{ fontWeight: 700 }} />
                        </span>Having specialists who develop innovative solutions to deliver user friendly and perfectly organized products ​for every project. </p>
                    <div className="u-align-center-sm u-align-center-xs u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-list u-repeater u-list-1">
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-1 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                                <img src="/assets/images/android_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-1 laravel_product_hidden" />
                                <img src="/assets/images/android.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-1 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-3">Android </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-2 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-2">
                                <img src="/assets/images/ios_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_product_hidden" />
                                <img src="/assets/images/ios.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-4">ios </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-3 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-3">
                                <img src="/assets/images/unity_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3 laravel_product_hidden" />
                                <img src="/assets/images/unity.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-5">Unity </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-4 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-4">
                                <img src="/assets/images/flutter_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4 laravel_product_hidden" />
                                <img src="/assets/images/flutter.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-6">Flutter </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-5 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-5">
                                <img src="/assets/images/rectnative_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 laravel_product_hidden" />
                                <img src="/assets/images/rectnative.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-7">Rect </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-6 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-6">
                                <img src="/assets/images/laravel_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-6 laravel_product_hidden" />
                                <img src="/assets/images/laravel.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-6 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-8">Laravel </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-7 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-7">
                                <img src="/assets/images/wordpress_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-7 laravel_product_hidden" />
                                <img src="/assets/images/wordpress.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-7 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-9"> Wordpress</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-8 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-8">
                                <img src="/assets/images/nodejs_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8 laravel_product_hidden" />
                                <img src="/assets/images/nodejs.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-10">Node js</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-9 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-9">
                                <img src="/assets/images/php_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-9 laravel_product_hidden" />
                                <img src="/assets/images/php.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-9 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-11">PHP </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-1 larave_hover">
                            <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-10">
                                <img src="/assets/images/2D3DDesign_2.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-10 laravel_product_hidden" />
                                <img src="/assets/images/2D,3DDesign.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-10 laravel_product_show" />
                                <h4 className="u-align-center u-custom-font u-text u-text-custom-color-3 laravel_color_666 u-text-12">2D,3D Design</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-align-center u-clearfix u-section-3" id="sec-13fd">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-text u-text-custom-color-2 u-text-default u-text-1">Get Shape Your Ideas with us.</h2>
                    <div className="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-gutter-24 u-layout-wrap u-layout-wrap-1">
                        <div className="u-gutter-0 u-layout">
                            <div className="u-layout-row">
                                <div className="u-align-center u-container-style u-layout-cell u-radius-30 u-shape-round u-size-15 u-size-30-md u-layout-cell-1">
                                    <div className="u-border-1 u-border-white u-container-layout u-container-layout-1">
                                        <img src="/assets/images/upwork.png" alt="" className="u-align-center u-image u-image-default u-preserve-proportions u-image-1" data-image-width={170} data-image-height={51} />
                                        <p className="u-text u-text-2"><i className="fas fa-star" style={{ color: '#686868' }} />&nbsp;<span className="u-text-custom-color-3 laravel_ideas_text">Top Rated</span></p>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-radius-30 u-shape-round u-size-15 u-size-30-md u-layout-cell-2">
                                    <div className="u-border-1 u-border-white u-container-layout u-container-layout-2">
                                        <img src="/assets/images/yearsofexperience.png" alt="" className="u-align-center-md u-align-center-sm u-align-center-xs u-image u-image-default u-preserve-proportions u-image-2" data-image-width={80} data-image-height={103} />
                                        <h2 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-3">05+<span style={{ fontWeight: 700 }} /></h2>
                                        <h5 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-4 laravel_ideas_text">
                                            Years of Experience</h5>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-radius-30 u-shape-round u-size-15 u-size-30-md u-layout-cell-3">
                                    <div className="u-border-1 u-border-white u-container-layout u-container-layout-3">
                                        <img src="/assets/images/growthrate.png" alt="" className="u-image u-image-default u-preserve-proportions u-image-3" data-image-width={80} data-image-height={96} />
                                        <h5 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-default u-text-5 laravel_ideas_text">
                                            Growth Ra​te</h5>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-radius-30 u-shape-round u-size-15 u-size-30-md u-layout-cell-4">
                                    <div className="u-border-1 u-border-white u-container-layout u-container-layout-4">
                                        <img src="/assets/images/project.png" alt="" className="u-image u-image-default u-preserve-proportions u-image-4" data-image-width={89} data-image-height={88} />
                                        <h2 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-6">1200+</h2>
                                        <h5 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-7 laravel_ideas_text">
                                            Projects Accomplished</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-clearfix u-image u-section-4" id="sec-c6c2">
                <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-1">DEVELOPMENT PROCESS</h2>
                    <p className="u-align-center u-custom-font u-text u-text-body-color u-text-2">From inception to execution, we follow the most suited way of web development and involve you in the process to make everything transparent</p>
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-size-19 u-layout-cell-1">
                                    <div className="u-container-layout u-container-layout-1 laravel_process">
                                        <img src="/assets/images/design_back_2.png" alt="" className="u-align-center u-image u-image-contain u-image-default u-image-1" />
                                        <img src="/assets/images/design_back.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_process_open" data-image-width={208} data-image-height={240} />
                                        <img src="/assets/images/design.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_process_image" data-image-width={208} data-image-height={240} />
                                        <h3 className="u-align-center u-text u-text-custom-color-2 u-text-3">DESIGN<span style={{ fontWeight: 700 }} />
                                        </h3>
                                    </div>
                                </div>
                                <div className="u-container-style u-hidden-sm u-hidden-xs u-layout-cell u-size-22 u-layout-cell-2 laravel_home_pase_box">
                                    <div className="u-container-layout u-container-layout-2" />
                                </div>
                                <div className="u-container-style u-layout-cell u-size-19 u-layout-cell-3">
                                    <div className="u-container-layout u-container-layout-3 laravel_process">
                                        <img src="/assets/images/design_back_2.png" alt="" className="u-align-center u-image u-image-contain u-image-default u-image-1" />
                                        <img src="/assets/images/design_back.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_discussion_open" data-image-width={208} data-image-height={240} />
                                        <img src="/assets/images/discussion.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_discussion_image" data-image-width={208} data-image-height={240} />
                                        <h3 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-4">DISCUSSION</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2 laravel_home_row_up">
                        <div className="u-layout" style={{}}>
                            <div className="u-layout-row" style={{}}>
                                <div className="u-container-style u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-4">
                                    <div className="u-container-layout u-container-layout-4" />
                                </div>
                                <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-5 ">
                                    <div className="u-container-layout u-container-layout-5 laravel_process">
                                        <img src="/assets/images/design_back_2.png" alt="" className="u-align-center u-image u-image-contain u-image-default u-image-1" />
                                        <img src="/assets/images/design_back.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_development_open" data-image-width={208} data-image-height={240} />
                                        <img src="/assets/images/DEVELOPMENT.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_development_image" data-image-width={208} data-image-height={240} />
                                        <h3 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-5">DEVELOPMENT<span style={{ fontWeight: 700 }} />
                                        </h3>
                                    </div>
                                </div>
                                <div className="u-container-style u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-6 laravel_home_pase_box">
                                    <div className="u-container-layout u-container-layout-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-3">
                        <div className="u-layout" style={{}}>
                            <div className="u-layout-row" style={{}}>
                                <div className="u-container-style u-layout-cell u-size-19 u-layout-cell-9">
                                    <div className="u-container-layout u-container-layout-9 laravel_process">
                                        <img src="/assets/images/design_back_2.png" alt="" className="u-align-center u-image u-image-contain u-image-default u-image-1" />
                                        <img src="/assets/images/design_back.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_testing_open" data-image-width={208} data-image-height={240} />
                                        <img src="/assets/images/testing.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_testing_image" data-image-width={208} data-image-height={240} />
                                        <h3 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-7">TESTING</h3>
                                    </div>
                                </div>
                                <div className="u-container-style u-hidden-sm u-hidden-xs u-layout-cell u-size-22 u-layout-cell-8 laravel_home_pase_box">
                                    <div className="u-container-layout u-container-layout-8" />
                                </div>
                                <div className="u-container-style u-layout-cell u-size-19 u-layout-cell-9">
                                    <div className="u-container-layout u-container-layout-9 laravel_process">
                                        <img src="/assets/images/design_back_2.png" alt="" className="u-align-center u-image u-image-contain u-image-default u-image-1" />
                                        <img src="/assets/images/design_back.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_delivery_open" data-image-width={208} data-image-height={240} />
                                        <img src="/assets/images/delivery.png" alt="" className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2 laravel_delivery_image" data-image-width={208} data-image-height={240} />
                                        <h3 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-7">DELIVERY</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-clearfix u-video u-section-5" id="sec-e542">
                <div style={{}} className="u-background-video u-expanded u-video-cover">
                    <div style={{ position: 'absolute', width: '178%', left: '-39%', height: '178%', top: '-39%' }} className="embed-responsive">
                        <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className="embed-responsive-item" src="assets/bg/background.html" frameBorder={0} allowFullScreen title='background279' />
                    </div>
                </div>
                <div className="u-clearfix u-sheet u-valign-top u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-text u-text-white u-text-1">Our Verticals</h2>
                    <p className="u-align-center u-text u-text-body-alt-color u-text-2">We have served all industry verticals with our scalable and robust mobile enterprise web, and cloud services. Our approach and work with the client play an essential role in providing the most efficient outcomes.</p>
                    <div className="u-expanded-width u-list u-repeater u-list-1">
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-1 laravel_icon">
                                        <img src="/assets/images/endastry/1.png" width={65} className="laravel_icon_show" alt='' />
                                        <img src="/assets/images/endastry/1_.png" width={65} className="laravel_icon_hidden" alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-3">Communication</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-2 laravel_icon">
                                        <img src="/assets/images/endastry/2.png" width={65} className="laravel_icon_show" style={{ marginTop: '10px' }} alt='' />
                                        <img src="/assets/images/endastry/2_.png" width={65} className="laravel_icon_hidden" style={{ marginTop: '10px' }} alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-4">Education</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-3 laravel_icon">
                                        <img src="/assets/images/endastry/3.png" width={65} className="laravel_icon_show" alt='' />
                                        <img src="/assets/images/endastry/3_.png" width={65} className="laravel_icon_hidden" alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-5">Media &amp; Entertainment </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-4 laravel_icon">
                                        <img src="/assets/images/endastry/4.png" width={65} className="laravel_icon_show" style={{ marginTop: '5px' }} alt='' />
                                        <img src="/assets/images/endastry/4_.png" width={65} className="laravel_icon_hidden" style={{ marginTop: '5px' }} alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-6">Hospitality</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-5 laravel_icon">
                                        <img src="/assets/images/endastry/5.png" width={65} className="laravel_icon_show" alt='' />
                                        <img src="/assets/images/endastry/5_.png" width={65} className="laravel_icon_hidden" alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-7">Consumer-Retail Services </h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-6">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-6 laravel_icon">
                                        <img src="/assets/images/endastry/6.png" width={65} className="laravel_icon_show" alt='' />
                                        <img src="/assets/images/endastry/6_.png" width={65} className="laravel_icon_hidden" alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-8">Utilities</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-7 laravel_icon">
                                        <img src="/assets/images/endastry/7.png" width={65} className="laravel_icon_show" style={{ marginTop: '10px' }} alt='' />
                                        <img src="/assets/images/endastry/7_.png" width={65} className="laravel_icon_hidden" style={{ marginTop: '10px' }} alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-9">Game</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-8">
                                <div className="laravel_animation_round_our">
                                    <span className="u-icon u-icon-circle u-palette-1-base laracel_back_color u-spacing-25 u-icon-8 laravel_icon">
                                        <img src="/assets/images/endastry/8.png" width={65} className="laravel_icon_show" alt='' />
                                        <img src="/assets/images/endastry/8_.png" width={65} className="laravel_icon_hidden" alt='' />
                                    </span>
                                </div>
                                <h4 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-10">Financial Services</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-clearfix u-section-6" id="sec-dc68">
                <div className="u-clearfix u-sheet u-sheet-1" >
                    <h2 className="u-align-center u-custom-font u-text u-text-custom-color-2 u-text-default u-text-1">We Have A Great Portfolio To C <span style={{ fontWeight: 700 }} />heck</h2>
                    <h5 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-2">Awesome Portfolio</h5>
                    <div className="u-tab-links-align-justify u-tabs u-tabs-1">
                        <ul className="u-tab-list u-unstyled laravel_stylist_scroller" role="tablist" style={{ height: 'fit-content' }}>
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
                        <div className="u-tab-content" style={{ height: '100px' }}>
                            <div className="u-container-style u-tab-active u-tab-pane" id="tab-6e68" role="tabpanel" aria-labelledby="link-tab-6e68">
                                <div className="u-container-layout u-container-layout-1">
                                    <div className="u-align-center-md u-align-center-sm u-align-center-xs u-gallery u-layout-grid u-show-text-on-hover u-gallery-1">
                                        <div className="u-gallery-inner u-gallery-inner-1">

                                            {port ?
                                                (
                                                    <Protfoli data={port} type='android' />
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
                                    <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-2">
                                        <div className="u-gallery-inner u-gallery-inner-2">

                                            {port ?
                                                (
                                                    <Protfoli data={port} type='ios' />
                                                ) :
                                                (
                                                    ''
                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-tab-pane" id="tab-1761" role="tabpanel" aria-labelledby="link-tab-1761">
                                <div className="u-container-layout u-container-layout-3">
                                    <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-3">
                                        <div className="u-gallery-inner u-gallery-inner-3">

                                            {port ?
                                                (
                                                    <Protfoli data={port} type='desing' />
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

                                            {port ?
                                                (
                                                    <Protfoli data={port} type='unity' />
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

                                            {port ?
                                                (
                                                    <Protfoli data={port} type='nodejs' />
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

                                            {port ?
                                                (
                                                    <Protfoli data={port} type='reactnative' />
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
                    <Link to='#' className="u-btn u-btn-round u-button-style u-custom-color-2 u-custom-font u-hover-palette-1-light-1 u-radius-50 u-btn-1">View All Project</Link>
                    <Link to='#' className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-custom-font u-none u-text-palette-1-base u-btn-2">Testimonial</Link>
                </div>
            </section>

            <section className="u-carousel u-slide u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-block-409f-1" id="carousel_899a" data-interval={4250} data-u-ride="carousel">
                <ol className="u-absolute-hcenter u-carousel-indicators u-block-409f-2">
                    <li data-u-target="#carousel_899a" className="u-active u-active-custom-color-2 u-palette-1-light-2" data-u-slide-to={0} />
                    <li data-u-target="#carousel_899a" className="u-active-custom-color-2 u-palette-1-light-2" data-u-slide-to={1}>
                    </li>
                    <li data-u-target="#carousel_899a" className="u-active-custom-color-2 u-palette-1-light-2" data-u-slide-to={2}>
                    </li>
                </ol>
                <div className="u-carousel-inner" role="listbox">
                    <div className="u-active u-carousel-item u-clearfix u-image u-image-contain u-section-7-1">
                        <div className="u-clearfix u-sheet u-sheet-1">
                            <div className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-1">
                                <div className="u-container-layout u-container-layout-1">
                                    <img src="/assets/images/1.png" alt="" className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-image u-image-default u-image-1" data-image-width={428} data-image-height={509} />
                                    <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-1"> Sahajanand Infotech is a company that deals with every project as its own. Their AI-based mobile application and smart devices are among the best in the industy.</h5>
                                    <img src="/assets/images/2.png" alt="" className="u-image u-image-default u-preserve-proportions u-image-2" data-image-width={68} data-image-height={48} />
                                    <img src="/assets/images/2.png" alt="" className="u-flip-horizontal u-image u-image-default u-preserve-proportions u-image-3" data-image-width={68} data-image-height={48} />
                                    <h3 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-custom-color-2 u-text-2"> Heather Benett</h3>
                                    <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-custom-color-3 u-text-3"> Mobile App Developer</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-carousel-item u-clearfix u-image u-image-contain u-section-7-2">
                        <div className="u-clearfix u-sheet u-sheet-1">
                            <div className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-1">
                                <div className="u-container-layout u-container-layout-1">
                                    <img src="/assets/images/1.png" alt="" className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-image u-image-default u-image-1" data-image-width={428} data-image-height={509} />
                                    <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-1">Sahajanand Infotech is a company that deals with every project as its own. Their AI-based mobile application and smart devices are among the best in the industy.</h5>
                                    <img src="/assets/images/2.png" alt="" className="u-image u-image-default u-preserve-proportions u-image-2" data-image-width={68} data-image-height={48} />
                                    <img src="/assets/images/2.png" alt="" className="u-flip-horizontal u-image u-image-default u-preserve-proportions u-image-3" data-image-width={68} data-image-height={48} />
                                    <h3 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-custom-color-2 u-text-2"> Heather Benett</h3>
                                    <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-custom-color-3 u-text-3"> Mobile App Developer</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-carousel-item u-clearfix u-image u-image-contain u-section-7-3">
                        <div className="u-clearfix u-sheet u-sheet-1">
                            <div className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-1">
                                <div className="u-container-layout u-container-layout-1">
                                    <img src="/assets/images/1.png" alt="" className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-image u-image-default u-image-1" data-image-width={428} data-image-height={509} />
                                    <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-1"> Sahajanand Infotech is a company that deals with every project as its own. Their AI-based mobile application and smart devices are among the best in the industy.</h5>
                                    <img src="/assets/images/2.png" alt="" className="u-image u-image-default u-preserve-proportions u-image-2" data-image-width={68} data-image-height={48} />
                                    <img src="/assets/images/2.png" alt="" className="u-flip-horizontal u-image u-image-default u-preserve-proportions u-image-3" data-image-width={68} data-image-height={48} />
                                    <h3 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-custom-color-2 u-text-2"> Heather Benett</h3>
                                    <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-custom-color-3 u-text-3">  Mobile App Developer</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-custom-color-2 u-icon-circle u-spacing-15 u-block-409f-3" href="#carousel_899a" role="button" data-u-slide="prev">
                    <span aria-hidden="true" style={{ marginLeft: '-5px' }}>
                        <svg viewBox="0 0 451.847 451.847">
                            <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z">
                            </path>
                        </svg>
                    </span>
                    <span className="sr-only" style={{ marginRight: '-3px' }}>
                        <svg viewBox="0 0 451.847 451.847">
                            <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z">
                            </path>
                        </svg>
                    </span>
                </a>
                <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-custom-color-2 u-icon-circle u-spacing-15 u-block-409f-4" href="#carousel_899a" role="button" data-u-slide="next">
                    <span aria-hidden="true">
                        <svg viewBox="0 0 451.846 451.847">
                            <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z">
                            </path>
                        </svg>
                    </span>
                    <span className="sr-only">
                        <svg viewBox="0 0 451.846 451.847">
                            <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z">
                            </path>
                        </svg>
                    </span>
                </a>
            </section>

        </>
    )
}

export default Home
