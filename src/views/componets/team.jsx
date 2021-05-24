import React from "react";

function Form(props) {
    
    const student = props;

    return ( 
        <>
            {student.stude.map((post,index)=>(
                <div key={index} className="u-container-style u-list-item u-repeater-item u-shape-rectangle u-white ">
                    <div className="laravel_company_team_card">
                        <div className="laravel_company_team_imges">
                            <img src={post.imges} alt="" height='120' width='120' style={{borderRadius:'10px',objectFit:'cover',objectPosition:'top'}}/>
                        </div>  
                        <div className="laravel_company_team_backgraund">
                            <div className="laravel_company_team_name">{post.name}</div>
                            <div className="laravel_company_team_pojishan">{post.designation}</div>
                            <div className="laravel_company_owner_hover">
                                <div className="laravel_company_team_name text_fff">{post.name}</div>
                                <div className="laravel_company_team_pojishan text_fff">{post.designation}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Form