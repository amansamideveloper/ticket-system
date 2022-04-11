import React from 'react'

function index() {
    return (
        <div id="about">
            <div className="light-wrapper">
                <div className="container inner">
                    <div className="row">
                        <div className="text-center">
                            <h2 className="main-title">About our company</h2>
                            <hr />
                        </div>
                        <div className="divide50"></div>
                        <div className="col-sm-4">
                            <figure><img src="img/office.jpg" /></figure>
                        </div>
                        <div className="col-sm-8">
                            <h4>Our Working Place</h4>
                            <p>Vestibulum ligut praesent commodo cursus magna, consectetur et. Cum socis natoque penatibus et magnis dis tellus parturient pharetra montes. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                        </div>
                    </div>
                    <div className="divide50"></div>
                    <div className="row">
                        <div className="col-sm-4">
                            <h4>Our Journeys</h4><hr />
                            <p>Duis non lectus sit amet est imperdiet cursus elementum vitae eros. Etiam adipiscingmorbi vitae magna tellus.</p>
                            <div className="divide5"></div>
                            <ul className="progress-list">
                                <li>
                                    <p>Asia <em>90%</em></p>
                                    <div className="progress plain">
                                        <div className="bar" ></div>
                                    </div>
                                </li>
                                <li>
                                    <p>Australia <em>80%</em></p>
                                    <div className="progress plain">
                                        <div className="bar" ></div>
                                    </div>
                                </li>
                                <li>
                                    <p>America <em>85%</em></p>
                                    <div className="progress plain">
                                        <div className="bar" ></div>
                                    </div>
                                </li>
                                <li>
                                    <p>Europe <em>50%</em></p>
                                    <div className="progress plain">
                                        <div className="bar" ></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-4">
                            <h4>Why Choose Us?</h4><hr />
                            <p>Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. </p>
                            <div className="divide10"></div>
                            <ol className="color">
                                <li>Donec ullamcorper nulla non metus auctor.</li>
                                <li>Cras justo odio, dapibus ac facilisis in egestas.</li>
                                <li>Praesent commodo cursus magna.</li>
                                <li>Curabitur blandit tempus porttitor.</li>
                                <li>Sed posuere consectetur est at lobortis.</li>
                                <li>Aenean lacinia bibendum nulla sed consectetur.</li>
                            </ol>
                        </div>
                        <div className="col-sm-4">
                            <h4>Our Transports</h4><hr />
                            <div className="divide10"></div>
                            <div className="services-2">
                                <div className="icon"> <img src="img/icon-web.png" data-src="style/images/icons/icon-web.png" data-ret="style/images/icons/icon-web@2x.png" className="retina" alt="" /> </div>

                                <div className="text">
                                    <h5>Responsive Layout</h5>
                                    <p>Etiam porta malesuada magna.</p>
                                </div>

                                <div className="divide20"></div>
                                <div className="icon"> <img src="img/icon-heart.png" data-src="style/images/icons/icon-heart.png" data-ret="style/images/icons/icon-heart@2x.png" className="retina" alt="" /> </div>

                                <div className="text">
                                    <h5>Flat & Clean design</h5>
                                    <p>Etiam porta malesuada.</p>
                                </div>

                                <div className="divide20"></div>
                                <div className="icon"> <img src="img/icon-print.png" data-src="style/images/icons/icon-print.png" data-ret="style/images/icons/icon-print@2x.png" className="retina" alt="" /> </div>

                                <div className="text">
                                    <h5>Print Design</h5>
                                    <p>Etiam porta malesuada magna.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default index