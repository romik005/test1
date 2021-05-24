import React from "react";

function Portfolio(props) {

    const student = props;

    return (
        <>
            {student.data.map((post, index) => (

                (student.type === post.type && 6 > index) ?
                    (
                        <div className="u-effect-fade u-gallery-item" key={index}>
                            <div className="u-back-slide" data-image-width={900} data-image-height={690}>
                                <img className="u-back-image u-expanded" src={post.images[0].path} alt='' />
                            </div>
                            <div className="u-over-slide u-shading u-over-slide-2">
                                <h3 className="u-gallery-heading laravel_image_title">{post.name}</h3>
                                <p className="u-gallery-text" />
                                <div className="laravel_portfoliyo_view">
                                    <div className="laravel_portfoliyo_view_button" rel="group1" href={post.images[0].path}>view</div>
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        ''
                    )
            ))}
        </>
    )
}

export default Portfolio