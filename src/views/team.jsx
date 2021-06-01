import React,{ useEffect, useState } from "react";
import axios from 'axios';
import Ssssss from './componets/team.jsx';

function Form() {

    const [team,setTeam] = useState();

    useEffect(() => {
        document.title = 'Team';

        async function dataget(){
            const dd = await axios('http://134.209.103.120:5500/api/team');
            
           await fetch('http://134.209.103.120:5500/api/team') .then(response => response.json()) .then(data => console.log(data));
//             console.log(dd);
            setTeam(dd.data);
        }
        dataget();
    },[]);

    return (
        <>  
            <section className="u-clearfix u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-white u-section-1 laravel_uiux_benner " id="carousel_7f69">
                <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                    <div className="u-gutter-0 u-layout">
                        <div className="u-layout-col">
                            <div className="u-size-60">
                                <div className="u-layout-row laravel_uiux_slider">
                                    <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-left-cell u-size-22 u-white u-layout-cell-1 laravel_slider_text">
                                        <div className="u-container-layout u-container-layout-1">
                                            <div className="u-text u-text-custom-color-3 u-text-1" style={{ fontWeight: 600 }} ></div>
                                            <h1 className="u-custom-font u-text u-text-custom-color-2 u-text-2 laravel_uiux_head_title">
                                                <span className="typewrite" data-period={2000} data-type="[ &quot;Meet The Team&quot; ]">
                                                </span>
                                            </h1>
                                            <p className="u-custom-font u-text u-text-body-color u-text-3" style={{ fontWeight: 500 }}>it's all avout minds, hardworking faces, and thoughts that work behind our success.</p>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-layout-cell u-right-cell u-size-38 u-layout-cell-2">
                                        <div className="u-container-layout u-container-layout-2">
                                            <div className="laravel_leptop_slider">
                                                <img src="/assets/images/uiux/10.png" className="laravel_uiux_back_1" alt=''/>
                                                <img src="/assets/images/uiux/11_.png" className="laravel_uiux_back_2" alt=''/>
                                                <img src="/assets/images/uiux/12.png" className="laravel_uiux_back_3" alt=''/>
                                                <img src="/assets/images/uiux/13.png" className="laravel_uiux_back_4" alt=''/>
                                                <img src="/assets/images/team/back21.png" className="laravel_team_1" alt=''/>
                                            </div>
                                            <div className="laravel_phone_slider">
                                                <img src="/assets/images/team/back21.png" alt=''/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-section-2" id="sec-d803">
                <div className="u-clearfix u-sheet u-sheet-1" style={{ height: 'fit-content',minHeight:'fit-content' }}>
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-col">
                                <div className="u-size-30">
                                    <div className="u-layout-row">
                                        <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                                            <div className="u-container-layout u-valign-middle u-container-layout-1">
                                                <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title">Company owner</h2>
                                                <div className="laravel_uiux_border">
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
                                    <div className="u-layout-row">
                                        <div className="u-align-center-sm u-align-center-xs u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-list u-repeater u-list-1 laravel_company_owner" style={{ minHeight: '200px' }}>
                                            <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white">
                                                <div className="laravel_company_owner_card">
                                                    <div className="laravel_company_owner_imges" style={{ backgroundImage: 'url("/assets/images/team/kardiklukhi.JPEG")' }}>
                                                    </div>
                                                    <div className="laravel_company_owner_backgraund">
                                                        <div className="laravel_company_owner_name">Hardik Lukhi</div>
                                                        <div className="laravel_company_owner_pojishan">CEO of Company</div>
                                                        <div className="laravel_company_owner_hover">
                                                            <div className="laravel_company_owner_name text_fff">Hardik Lukhi</div>
                                                            <div className="laravel_company_owner_pojishan text_fff">CEO of Company</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white ">
                                                <div className="laravel_company_owner_card">
                                                    <div className="laravel_company_owner_imges" style={{ backgroundImage: 'url("/assets/images/team/HardikKevadiya.JPEG")' }} />
                                                    <div className="laravel_company_owner_backgraund">
                                                        <div className="laravel_company_owner_name">Hardik Kevadiya</div>
                                                        <div className="laravel_company_owner_pojishan">CEO of Company</div>
                                                        <div className="laravel_company_owner_hover">
                                                            <div className="laravel_company_owner_name text_fff">Hardik Kevadiya</div>
                                                            <div className="laravel_company_owner_pojishan text_fff">CEO of Company</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-clearfix u-section-2" id="sec-d803">
                <div className="u-clearfix u-sheet u-sheet-1" style={{ minHeight: 'fit-content',marginBottom:'3%' }}>
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-col">
                                <div className="u-size-30">
                                    <div className="u-layout-row">
                                        <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                                            <div className="u-container-layout u-valign-middle u-container-layout-1">
                                                <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title">Team @ Work</h2>
                                                <div className="laravel_uiux_border">
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
                                    <div className="u-layout-row">
                                        <div className="u-align-center-sm u-align-center-xs u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-list u-repeater u-list-1 laravel_company_team" style={{ minHeight: '200px' }}>
                                           {team ? 
                                            (
                                                <Ssssss stude={team} />
                                            ):
                                            (
                                                ''
                                            )}
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

export default Form
