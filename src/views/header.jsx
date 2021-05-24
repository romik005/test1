import React, {useState} from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function Header() {

    const [name, setName] = useState({activeters:''});

    let state = {
        active: ''
    }
    
    if (window.location.pathname === '/') {
        state['active'] = 'home';
    }
    else if (window.location.pathname === '/portfolio') {
        state['active'] = 'portfolio';
    }
    else if (window.location.pathname === '/service/android' || window.location.pathname === '/service/ios' || window.location.pathname === '/service/flutter' || window.location.pathname === '/service/uiux' || window.location.pathname === '/service/react' || window.location.pathname === '/service/unity' || window.location.pathname === '/service/web' ) {
        var submenuurl = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
        state['active'] = 'service';
        state['submenu'] = submenuurl;
    }
    else if (window.location.pathname === '/blog') {
        state['active'] = 'blog';
    }
    else if (window.location.pathname === '/career') {
        state['active'] = 'career';
    }
    else if (window.location.pathname === '/team') {
        state['active'] = 'team';
    }
    else if (window.location.pathname === '/about') {
        state['active'] = 'about';
    }
    else if (window.location.pathname === '/contact') {
        state['active'] = 'contact';
    }
    else if (window.location.pathname === '/career/careeropenings' || window.location.pathname === '/career/life') {
        var submenuurls = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
        state['active'] = 'career';
        state['submenu'] = submenuurls;
    }


    function addActiveClass(e){
        const clicked = e.target.id;
        setName({activeters:clicked});
        setTimeout(function(){typwwritingsss()},100);
        setTimeout(function(){addpagehight()},150);
        console.log(name)
    }

    function mobilmenu(){
        document.getElementById('mobile_menu_close').click();
        setTimeout(function(){typwwritingsss()},100);
    }

    function addpagehight(){
        var heght = $('#testing div').height();
        $('#testing').css('height',heght)
    }

    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
    
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span>' + this.txt + '</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
    
        setTimeout(function () {
            that.tick();
        }, delta);
    };
    function typwwritingsss() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };
    return (
        <>
            <header className="u-clearfix u-header u-white u-header laravel_header" id="sec-f8c5">
                <div className="laravel_spesing_header">
                    <Link to='' className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-image u-image-default u-logo u-image-1">
                        <img src={global.appurl + '/assets/images/SAHAJANANDLOGO.png'} alt='logo' className="u-logo-image u-logo-image-1" data-image-width={223} />
                    </Link>
                    <nav className="u-menu u-menu-dropdown u-menu-open-right u-offcanvas u-menu-1" id='closepopup'>
                        <div className="menu-collapse" style={{ fontSize: '1rem', letterSpacing: '0px', fontWeight: 700, textTransform: 'uppercase', marginRight: '20px' }}>
                            <Link to='#' className="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-border-radius u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-text-shadow u-custom-text-shadow-x u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#" style={{ padding: '4px', fontSize: 'calc(1em + 8px)' }}>
                                <svg>
                                    <use xlinkHref="#menu-hamburger" />
                                </svg>
                                <svg version="1.1">
                                    <defs>
                                        <symbol id="menu-hamburger" viewBox="0 0 16 16" style={{ width: '16px', height: '16px' }}>
                                            <rect y={1} width={16} height={2} />
                                            <rect y={7} width={16} height={2} />
                                            <rect y={13} width={16} height={2} />
                                        </symbol>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                        <div className="u-custom-menu u-nav-container">
                            <ul className="u-nav u-spacing-30 u-unstyled u-nav-1" style={{padding:'27px 0px',lineHeight: '2'}}>
                            <li className="u-nav-item">
                                    <Link to='/' id='home' className={state['active'] === 'home'? 'menuactive':''} onClick={addActiveClass} style={{ padding: '28px 0px' }}>Home</Link>
                                </li>
                                <li className="u-nav-item">
                                    <Link to='/portfolio' id='portfolio' className={state['active'] === 'portfolio'? 'menuactive':''} onClick={addActiveClass} style={{ padding: '28px 0px' }}>Protfolio</Link>
                                </li>
                                <li className="u-nav-item">
                                    <Link to='#' className={"laravel_menu_text" + (state['active'] === 'service'? ' menuactive':'')} style={{ padding: '28px 0px 33px' }}>Service</Link>
                                    <div className="u-nav-popup" style={{top:'58px'}}>
                                        <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2" style={{ marginTop: '0px' }}>
                                            <li className={"submenu_pading "+(state['submenu'] === 'android'?'subactive':'')}>
                                                <Link to='/service/android' id='service' className='laravel_header_submenu' onClick={addActiveClass}>ANDROID APP DEVELOPMENT</Link>
                                            </li>
                                            <li className={"submenu_pading "+(state['submenu'] === 'ios'?'subactive':'')}>
                                                <Link to='/service/ios' id='service' onClick={addActiveClass} className="laravel_header_submenu ">ios APP DEVELOPMENT</Link>
                                            </li>
                                            <li className={"submenu_pading "+(state['submenu'] === 'react'?'subactive':'')}>
                                                <Link to='/service/react' id='service' onClick={addActiveClass} className="laravel_header_submenu ">REACT NATIVE APP DEVELOPMENT</Link>
                                            </li>
                                            <li className={"submenu_pading "+(state['submenu'] === 'flutter'?'subactive':'')}>
                                                <Link to='/service/flutter' id='service' onClick={addActiveClass}  className='laravel_header_submenu ' >FLUTTER APP DEVELOPMENT</Link>
                                            </li>
                                            <li className={"submenu_pading "+(state['submenu'] === 'unity'?'subactive':'')}>
                                                <Link to='/service/unity' id='service' onClick={addActiveClass} className="laravel_header_submenu ">UNITY GAME DEVELOPMENT</Link>
                                            </li>
                                            <li className={"submenu_pading "+(state['submenu'] === 'web'?'subactive':'')}>
                                                <Link to='/service/web' id='service' onClick={addActiveClass} className="laravel_header_submenu ">WEBSITE APP DEVELOPMENT</Link>
                                            </li>
                                            <li className={"submenu_pading "+(state['submenu'] === 'uiux'?'subactive':'')}>
                                                <Link id='service' onClick={addActiveClass}  className='laravel_header_submenu ' to='/service/uiux'>UI / UX DESIGN</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* <li className="u-nav-item">
                                    <Link to='/blog' id='blog' className={state['active'] === 'blog'? 'menuactive':''} onClick={addActiveClass} style={{ padding: '28px 0px' }}>Blogs</Link>
                                </li> */}
                                <li className="u-nav-item">
                                    <Link to='#' className={"laravel_menu_text" + (state['active'] === 'career'? ' menuactive':'')} style={{ padding: '28px 0px 33px' }}>Career</Link>
                                    <div className="u-nav-popup" style={{top:'58px'}}>
                                        <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2" style={{ marginTop: '0px' }}>
                                            <li className={"submenu_pading "+(state['submenu'] === 'careeropenings'?'subactive':'')}>
                                                <Link to='/career/careeropenings' id='career' className='laravel_header_submenu' onClick={addActiveClass}>Career Openings</Link>
                                            </li>
                                            <li className={"submenu_pading "+(state['submenu'] === 'life'?'subactive':'')}>
                                                <Link to='/career/life' id='career' onClick={addActiveClass} className="laravel_header_submenu ">Life @ Sahajanand</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="u-nav-item">
                                    <Link to='/about' id='about' className={state['active'] === 'about'? 'menuactive':''} onClick={addActiveClass} style={{ padding: '28px 0px' }}>About US</Link>
                                </li>
                                <li className="u-nav-item">
                                    <Link to='/team' id='team' className={state['active'] === 'team'? 'menuactive':''} onClick={addActiveClass} style={{ padding: '28px 0px' }}>Team</Link>
                                </li>
                                <li className="u-nav-item">
                                    <Link to='/contact' id='contact' className={state['active'] === 'contact'? 'menuactive':''} onClick={addActiveClass} style={{ padding: '28px 0px' }}>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="u-custom-menu u-nav-container-collapse" id='menuwidth' >
                            <div className="u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav u-white">
                                <div className="u-sidenav-overflow">
                                    <div className="u-menu-close u-menu-close-1" id='mobile_menu_close'/>
                                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2 ">
                                        <li className="u-nav-item">
                                            <Link to='/' id='home' onClick={mobilmenu} className='u-button-style u-nav-link' style={{ padding: '32px 0px' }}>Home</Link>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link to='/portfolio' id='portfolio' onClick={mobilmenu} className='u-button-style u-nav-link' style={{ padding: '32px 0px' }}>Protfolio</Link>
                                        </li>
                                        <li className="u-nav-item"><Link to='#' className="u-button-style u-nav-link" style={{ padding: '32px 0px' }}>Servies</Link>
                                            <div className="u-nav-popup">
                                                <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4">
                                                    <li className="u-nav-item">
                                                        <Link to='/service/android' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">ANDROID APP DEVELOPMENT</Link>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <Link to='/service/ios' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">ios APP DEVELOPMENT</Link>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <Link to='/service/react' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">REACT NATIVE APP DEVELOPMENT</Link>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <Link to='/service/flutter' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">FLUTTER APP DEVELOPMENT</Link>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <Link to='/service/unity' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">UNITY GAME DEVELOPMENT</Link>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <Link to='/service/web' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">WEBSITE APP DEVELOPMENT</Link>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <Link to='/service/uiux' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">UI / UX DESIGN</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className="u-nav-item">
                                            <Link to='/blog' onClick={mobilmenu} className="u-button-style u-nav-link" style={{ padding: '32px 0px' }}>Blogs</Link>
                                        </li> */}
                                        <li className="u-nav-item"><Link to='#' className="u-button-style u-nav-link" style={{ padding: '32px 0px' }}>Career</Link>
                                            <div className="u-nav-popup">
                                                <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4">
                                                    <li className="u-nav-item">
                                                        <Link to='/career/careeropenings' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">Career Openings</Link>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <Link to='/career/life' onClick={mobilmenu} className="u-button-style u-nav-link laravel_mobail_menu">Life @ Sahajanand</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link to='/about' onClick={mobilmenu} className="u-button-style u-nav-link" style={{ padding: '32px 0px' }}>About Us</Link>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link to='/team' onClick={mobilmenu} className="u-button-style u-nav-link" style={{ padding: '32px 0px' }}>Team</Link>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link to='/contact' onClick={mobilmenu} className="u-button-style u-nav-link" style={{ padding: '32px 0px' }}>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="u-custom-color-6 u-menu-overlay u-opacity u-opacity-70" />
                        </div>
                    </nav>
                </div>
                <div className="laravel_page_scroller" />
            </header> 
        </>
    )
}

export default Header
