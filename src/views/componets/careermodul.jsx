import React, {  useState } from "react";

function Career() {

    const [career, setcareer] = useState({});

    const careerdata = (e) => {
        let names = e.target.name;
        let value = e.target.value;
        setcareer({ ...career, [names]:value});

    }

    const imagesupload = (e) => {
        var applyname = document.getElementById('applyname').value;
        let value = e.target.files[0];
        setcareer({ ...career, 'resumefile':value,'apply':applyname});
    }

    const formdatasubmit = async(e) => {

        if (career.resumefile && career.fullname && career.emailid && career.number && career.apply && career.fresher && career.position && career.qualification && career.vocation && career.joinwithin && career.message ) {

            const datatssss = new FormData();
            datatssss.append('resumefile',career.resumefile)
            datatssss.append('fullname',career.fullname)
            datatssss.append('emailid',career.emailid)
            datatssss.append('number',career.number)
            datatssss.append('apply',career.apply)
            datatssss.append('fresher',career.fresher)
            datatssss.append('position',career.position)
            datatssss.append('qualification',career.qualification)
            datatssss.append('vocation',career.vocation)
            datatssss.append('joinwithin',career.joinwithin)
            datatssss.append('message',career.message)


            await fetch('/api/career',{
                method: 'POST',
                body: datatssss
            })
        }else{
            e.preventDefault();
            alert('all filed are requed');
        }
        
    }

    return (
        <>
            <div className="career_apply_popup" id='careermodelopen'>
                <div className="career_applay_model">
                    <div className='careermodel_' style={{ padding: '30px', position: 'relative' }}>
                        <div style={{ position: 'absolute', right: '40px', cursor: 'pointer', fontSize: '25px', zIndex: 99999 }} id="career_model_colse">
                            <i className="fas fa-times"></i>
                        </div>
                        <div style={{marginBottom:'40px'}}>
                            <div className="u-container-layout u-valign-middle">
                                <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{color:'#111',fontWeight:700}}>Apply Now!</h2>
                                <div className="laravel_uiux_border" style={{zIndex:1}}>
                                    <div style={{ width: '80px', margin: 'auto', background: 'white',position:'absolute',left:0,right:0 }}>
                                        <i className="fas fa-diamond" />
                                        <i className="fas fa-diamond" />
                                        <i className="fas fa-diamond" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'relative', overflow: 'auto' }}>
                            <form onSubmit={formdatasubmit}  encType="multipart/form-data">
                                <div className='contect_form career_forms_data '>
                                    <div className='formfiled'>
                                        <i className="far fa-user career_filed_icon"></i>
                                        <input type="text" name='fullname' placeholder='Enter Your Full Name' className='career_text_filed' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form career_forms_data'>
                                    <div className='formfiled'>
                                        <i className="fal fa-envelope career_filed_icon"></i>
                                        <input type="email" name='emailid' placeholder='Enter Your Email ID' className='career_text_filed' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form career_forms_data'>
                                    <div className='formfiled'>
                                        <i className="far fa-mobile career_filed_icon"></i>
                                        <input type="number" name='number' placeholder='Mobile number' className='career_text_filed number_arrow_remove' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form career_forms_data'>
                                    <div className='formfiled'>
                                        <i className="fal fa-user-graduate career_filed_icon"></i>
                                        <input type="text" name='fresher' placeholder='Fresher' className='career_text_filed' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form career_forms_data'>
                                    <div className='formfiled'>
                                        <img src="/assets/images/career/Group6.PNG" alt="" className='career_filed_icon' style={{height:'23px',float:'left'}}/>
                                        <input type="text" name='position' placeholder='Select Position' className='career_text_filed' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form career_forms_data'>
                                    <div className='formfiled'>
                                        <img src="/assets/images/career/group7.PNG" alt="" className='career_filed_icon' style={{height:'23px',float:'left'}}/>
                                        <input type="text" name='qualification' placeholder='Select Qualification' className='career_text_filed' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form career_forms_data'>
                                    <div className='formfiled'>
                                    <i className="fal fa-briefcase career_filed_icon"></i>
                                        <input type="text" name='vocation' placeholder='Enter Your Vocation' className='career_text_filed' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form career_forms_data'>
                                    <div className='formfiled'>
                                        <img src="/assets/images/career/bell.PNG" alt="" className='career_filed_icon' style={{height:'22px',float:'left'}}/>
                                        <input type="text" name='joinwithin' placeholder='Join with in' className='career_text_filed' onChange={careerdata} />
                                    </div>
                                </div>
                                <div className='contect_form_full career_forms_data'>
                                    <div className='formfiled'>
                                        <img src="/assets/images/career/9.PNG" alt="" className='career_filed_icon' style={{height:'22px',float:'left'}}/>
                                        <input type="file" className='form-files' name='resume' onChange={imagesupload}/>
                                    </div>
                                </div>
                                <div className='contect_form_full career_forms_data'>
                                    <div className='formfiled'>
                                        <textarea name="message" rows="5" className='formfiled' placeholder='Enter Your Message' onChange={careerdata} style={{color: '#8e8e8e'}}></textarea>
                                    </div>
                                </div>
                                <div className='contect_form_full'>
                                    <input type="hidden" name="applyname" id='applyname'/>
                                    <input type="submit" value="Submit Now" className='career_form_submit'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career
