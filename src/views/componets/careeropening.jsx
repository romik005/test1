import React from "react";

function Portfolio(props) {

    const student = props;

    const data = student.data.length - 1;

    return (
        <>
            {student.data.map((post, index) => (
                (index === data) ?
                    (
                        <div>
                            <div className="u-layout-row career_moniter" key={index}>
                                <div className="u-container-style u-layout-cell u-size-25">
                                    <div className="u-container-layout u-container-layout-1">
                                        <img alt="" className='life_images' src={global.server + '' + post.images} />
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-size-10">
                                    <div className="u-container-layout u-container-layout-2 careerlife_date">
                                        <div className='life_date_show'>
                                            <div className='life_title'>{post.lifedate}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-size-25">
                                    <div className="u-container-layout u-container-layout-3">
                                        <div className="u-container-layout u-valign-middle u-container-layout-1">
                                            <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>{post.name}</h2>
                                            <div className="laravel_uiux_border" style={{ width: '-webkit-fill-available' }}>
                                                <div style={{ width: '80px', margin: 'auto', background: 'white' }}>
                                                    <i className="fas fa-diamond" />
                                                    <i className="fas fa-diamond" />
                                                    <i className="fas fa-diamond" />
                                                </div>
                                            </div>
                                            <div className='life_description'>
                                                {post.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='career_phone'>
                                <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>{post.name}</h2>
                                <div className="laravel_uiux_border" style={{ zIndex: 1, position: 'relative' }}>
                                    <div style={{ width: '80px', margin: 'auto', background: 'white', position: 'absolute', left: 0, right: 0 }}>
                                        <i className="fas fa-diamond" />
                                        <i className="fas fa-diamond" />
                                        <i className="fas fa-diamond" />
                                    </div>
                                </div>
                                <div className='life_description' style={{ textAlign: 'center', padding: "40px 0px" }}>
                                    {post.description}
                                </div>
                                <img alt="" className='life_images' src={global.server + '' + post.images} />
                            </div>
                        </div>
                    ) :
                    (
                        (index % 2 === 0) ?
                            (
                                <div>
                                    <div className="u-layout-row career_moniter" key={index}>
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-1">
                                                <img alt="" className='life_images' src={global.server + '' + post.images} />
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-10">
                                            <div className="u-container-layout u-container-layout-2 careerlife_date">
                                                <div className='life_date_show'>
                                                    <div className='life_title'>{post.lifedate}</div>
                                                </div>
                                                <div className="life_line_show"></div>
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-3">
                                                <div className="u-container-layout u-valign-middle u-container-layout-1">
                                                    <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>{post.name}</h2>
                                                    <div className="laravel_uiux_border" style={{ width: '-webkit-fill-available' }}>
                                                        <div style={{ width: '80px', margin: 'auto', background: 'white' }}>
                                                            <i className="fas fa-diamond" />
                                                            <i className="fas fa-diamond" />
                                                            <i className="fas fa-diamond" />
                                                        </div>
                                                    </div>
                                                    <div className='life_description'>
                                                        {post.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='career_phone'>
                                        <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>{post.name}</h2>
                                        <div className="laravel_uiux_border" style={{ zIndex: 1, position: 'relative' }}>
                                            <div style={{ width: '80px', margin: 'auto', background: 'white', position: 'absolute', left: 0, right: 0 }}>
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                            </div>
                                        </div>
                                        <div className='life_description' style={{ textAlign: 'center', padding: "40px 0px" }}>
                                            {post.description}
                                        </div>
                                        <img alt="" className='life_images' src={global.server + '' + post.images} />
                                    </div>
                                </div>
                            ) :
                            (
                                <div>
                                    <div className="u-layout-row career_moniter" key={index}>
                                        <div className="u-container-style u-layout-cell u-size-25 u-container-layout-1">
                                            <div className="u-container-layout u-container-layout-1">
                                                <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>{post.name}</h2>
                                                <div className="laravel_uiux_border" style={{ width: '-webkit-fill-available' }}>
                                                    <div style={{ width: '80px', margin: 'auto', background: 'white' }}>
                                                        <i className="fas fa-diamond" />
                                                        <i className="fas fa-diamond" />
                                                        <i className="fas fa-diamond" />
                                                    </div>
                                                </div>
                                                <div className='life_description'>
                                                    {post.description}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-10">
                                            <div className="u-container-layout u-container-layout-2 careerlife_date">
                                                <div className='life_date_show'>
                                                    <div className='life_title'>{post.lifedate}</div>
                                                </div>
                                                <div className="life_line_show"></div>
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-25">
                                            <div className="u-container-layout u-container-layout-3">
                                                <div className="u-container-layout u-valign-middle ">
                                                    <img alt="" className='life_images' src={global.server + '' + post.images} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='career_phone'>
                                        <h2 className="u-align-center u-custom-font u-text u-text-1 laravel_uiux_disk_title" style={{ margin: '16px 0 0 0' }}>{post.name}</h2>
                                        <div className="laravel_uiux_border" style={{ zIndex: 1, position: 'relative' }}>
                                            <div style={{ width: '80px', margin: 'auto', background: 'white', position: 'absolute', left: 0, right: 0 }}>
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                                <i className="fas fa-diamond" />
                                            </div>
                                        </div>
                                        <div className='life_description' style={{ textAlign: 'center', padding: "40px 0px" }}>
                                            {post.description}
                                        </div>
                                        <img alt="" className='life_images' src={global.server + '' + post.images} />
                                    </div>
                                </div>
                            )
                    )
            ))}
        </>
    )
}

export default Portfolio