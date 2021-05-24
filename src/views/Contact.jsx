import React, { useEffect, useState } from "react";

function Contact() {

    const [formdata, setFormdata] = useState({});

    useEffect(() => {
        document.title = 'Contacts us';
    });

    const dataset = (e) => {
        let names = e.target.name;
        let value = e.target.value;
        setFormdata({ ...formdata, [names]:value});
    }

    const formdatasubmit = async (e) => {

        if (formdata.budget && formdata.companyname && formdata.contactno && formdata.emailid && formdata.firsname && formdata.interested && formdata.lastname && formdata.message) {

            const { firsname , lastname , budget , companyname , contactno , emailid , interested , message  } = formdata;
            await fetch('/api/contact',{
                method: 'POST',
                headers:{
                    "Content-Type" : 'application/json'
                },
                body:JSON.stringify({firsname , lastname , budget , companyname , contactno , emailid , interested , message})
            })
        }
        else{
            e.preventDefault();
            alert('all Filed is valid')
        }
    }
    return (
        <>
            <div className='contactsus'>
                <section className="u-align-left u-clearfix u-palette-1-light-1 u-section-1 contectus" id="sec-23dd" style={{backgroundImage:'url("assets/images/contactus/back.png")'}}>
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <h1 className="u-align-center u-text u-text-default u-text-1" style={{fontSize:'50px'}}>Contact Us</h1>
                        <p className="u-align-center u-text u-text-2" style={{fontWeight:400}}>We would love to answer your queries or doubts regarding our services or request a quote. Eager to hear from you, let`s talk.</p>
                    </div>
                </section>
                <section className="u-clearfix u-section-2" id="sec-3273">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-align-center u-container-style u-group u-radius-20 u-shape-round u-white u-group-1">
                            <div className="u-container-layout u-container-layout-1">
                                <form onSubmit={formdatasubmit}>
                                    <div className='contect_form'>
                                        <input type="text" name='firsname' placeholder='First Name' className='formfiled' onChange={dataset}/>
                                    </div>
                                    <div className='contect_form'>
                                        <input type="text" name='lastname' placeholder='Last Name' className='formfiled' onChange={dataset}/>
                                    </div>
                                    <div className='contect_form'>
                                        <input type="email" name='emailid' placeholder='Email ID' className='formfiled' onChange={dataset}/>
                                    </div>
                                    <div className='contect_form'>
                                        <input type="number" name='contactno' placeholder='Contact No / Whatsapp No.' className='formfiled number_arrow_remove' onChange={dataset}/>
                                    </div>
                                    <div className='contect_form'>
                                        <input type="text" name='companyname' placeholder='Company Name' className='formfiled' onChange={dataset}/>
                                    </div>
                                    <div className='contect_form'>
                                        <input type="text" name='interested' placeholder='Interested(Services)' className='formfiled' onChange={dataset}/>
                                    </div>
                                    <div className='contect_form_full'>
                                        <input type="text" name='budget' placeholder='Select a budget' className='formfiled' onChange={dataset}/>
                                    </div>
                                    <div className='contect_form_full'>
                                        <textarea name="message" placeholder='Your Message' className='formfiled' rows='5' onChange={dataset}></textarea>
                                    </div>
                                    <div className='contect_form_full'>
                                        <input type="submit" value='Submit Message' className='contectsubmit'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact