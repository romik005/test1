import React, { useEffect, useState } from "react";
import axios from 'axios';
import Careeropening from './componets/careeropening.jsx';

function Career() {

    const [career, setCareer] = useState();

    useEffect(() => {
        document.title = 'Life';
        async function portfoiloapi() {
            const dd = await axios.get('/api/careerlife');
            setCareer(dd.data);
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

                 <section className="u-align-left u-clearfix u-section-1" id="sec-0fe2">
                    <div className="u-clearfix u-sheet u-sheet-1" style={{ marginTop: '100px',marginBottom:'100px' }}>
                        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                            <div class="u-layout">
                               <div>
                                  <div class="u-layout-row career_moniter">
                                     <div class="u-container-style u-layout-cell u-size-25">
                                        <div class="u-container-layout u-container-layout-1"><img alt="" class="life_images" src="http://134.209.103.120:5500/public/images/lifeimages-1621836280894.png"></div>
                                     </div>
                                     <div class="u-container-style u-layout-cell u-size-10">
                                        <div class="u-container-layout u-container-layout-2 careerlife_date">
                                           <div class="life_date_show">
                                              <div class="life_title">26 Jan</div>
                                           </div>
                                           <div class="life_line_show"></div>
                                        </div>
                                     </div>
                                     <div class="u-container-style u-layout-cell u-size-25">
                                        <div class="u-container-layout u-container-layout-3">
                                           <div class="u-container-layout u-valign-middle u-container-layout-1">
                                              <h2 class="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style="margin: 16px 0px 0px;">New Year celebration</h2>
                                              <div class="laravel_uiux_border" style="width: -webkit-fill-available;">
                                                 <div style="width: 80px; margin: auto; background: white;"><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i></div>
                                              </div>
                                              <div class="life_description"></div>
                                           </div>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="career_phone">
                                     <h2 class="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style="margin: 16px 0px 0px;">New Year celebration</h2>
                                     <div class="laravel_uiux_border" style="z-index: 1; position: relative;">
                                        <div style="width: 80px; margin: auto; background: white; position: absolute; left: 0px; right: 0px;"><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i></div>
                                     </div>
                                     <div class="life_description" style="text-align: center; padding: 40px 0px;"></div>
                                     <img alt="" class="life_images" src="http://134.209.103.120:5500/public/images/lifeimages-1621836280894.png">
                                  </div>
                               </div>
                               <div>
                                  <div class="u-layout-row career_moniter">
                                     <div class="u-container-style u-layout-cell u-size-25 u-container-layout-1">
                                        <div class="u-container-layout u-container-layout-1">
                                           <h2 class="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style="margin: 16px 0px 0px;">Charity trust</h2>
                                           <div class="laravel_uiux_border" style="width: -webkit-fill-available;">
                                              <div style="width: 80px; margin: auto; background: white;"><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i></div>
                                           </div>
                                           <div class="life_description"></div>
                                        </div>
                                     </div>
                                     <div class="u-container-style u-layout-cell u-size-10">
                                        <div class="u-container-layout u-container-layout-2 careerlife_date">
                                           <div class="life_date_show">
                                              <div class="life_title">26 Feb</div>
                                           </div>
                                           <div class="life_line_show"></div>
                                        </div>
                                     </div>
                                     <div class="u-container-style u-layout-cell u-size-25">
                                        <div class="u-container-layout u-container-layout-3">
                                           <div class="u-container-layout u-valign-middle "><img alt="" class="life_images" src="http://134.209.103.120:5500/public/images/lifeimages-1621835279608.png"></div>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="career_phone">
                                     <h2 class="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style="margin: 16px 0px 0px;">Charity trust</h2>
                                     <div class="laravel_uiux_border" style="z-index: 1; position: relative;">
                                        <div style="width: 80px; margin: auto; background: white; position: absolute; left: 0px; right: 0px;"><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i></div>
                                     </div>
                                     <div class="life_description" style="text-align: center; padding: 40px 0px;"></div>
                                     <img alt="" class="life_images" src="http://134.209.103.120:5500/public/images/lifeimages-1621835279608.png">
                                  </div>
                               </div>
                               <div>
                                  <div class="u-layout-row career_moniter">
                                     <div class="u-container-style u-layout-cell u-size-25">
                                        <div class="u-container-layout u-container-layout-1"><img alt="" class="life_images" src="http://134.209.103.120:5500/public/images/lifeimages-1621835174098.png"></div>
                                     </div>
                                     <div class="u-container-style u-layout-cell u-size-10">
                                        <div class="u-container-layout u-container-layout-2 careerlife_date">
                                           <div class="life_date_show">
                                              <div class="life_title">26 Mar</div>
                                           </div>
                                        </div>
                                     </div>
                                     <div class="u-container-style u-layout-cell u-size-25">
                                        <div class="u-container-layout u-container-layout-3">
                                           <div class="u-container-layout u-valign-middle u-container-layout-1">
                                              <h2 class="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style="margin: 16px 0px 0px;">Formhouse</h2>
                                              <div class="laravel_uiux_border" style="width: -webkit-fill-available;">
                                                 <div style="width: 80px; margin: auto; background: white;"><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i></div>
                                              </div>
                                              <div class="life_description">We believe in offering better rewards than just cash to encourage our employees to do better.</div>
                                           </div>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="career_phone">
                                     <h2 class="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style="margin: 16px 0px 0px;">Formhouse</h2>
                                     <div class="laravel_uiux_border" style="z-index: 1; position: relative;">
                                        <div style="width: 80px; margin: auto; background: white; position: absolute; left: 0px; right: 0px;"><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i><i class="fas fa-diamond"></i></div>
                                     </div>
                                     <div class="life_description" style="text-align: center; padding: 40px 0px;">We believe in offering better rewards than just cash to encourage our employees to do better.</div>
                                     <img alt="" class="life_images" src="http://134.209.103.120:5500/public/images/lifeimages-1621835174098.png">
                                  </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </section>
                 

//                 <section className="u-align-left u-clearfix u-section-1" id="sec-0fe2">
//                     <div className="u-clearfix u-sheet u-sheet-1" style={{ marginTop: '100px',marginBottom:'100px' }}>
//                         <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
//                             <div className="u-layout">
//                                 {career ?
//                                     (
//                                         <Careeropening data={career} />
//                                     ) :
//                                     (
//                                         ''
//                                     )}
//                             </div>
//                         </div>
//                     </div>
//                 </section>

            </div>
        </>
    )
}

export default Career
