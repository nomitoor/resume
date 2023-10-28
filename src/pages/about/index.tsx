import Layout from "../layout";
import Navigation from "../layout/components/Navigation";
import AboutMeContainer from "./components/about-me-container";

const About = () => {
    return (
        <Layout>
            <Navigation />
            <section id="about" className="about">
                <AboutMeContainer />

                {/* <div className="counts container">

                <div className="row">

                    <div className="col-lg-3 col-md-6">
                    <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Happy Clients</p>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Projects</p>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                        <i className="bi bi-headset"></i>
                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Hours Of Support</p>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Awards</p>
                    </div>
                    </div>

                </div>

                </div>

                <div className="skills container">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">

                    <div className="progress">
                        <span className="skill">HTML <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar"></div>
                        </div>
                    </div>

                    <div className="progress">
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar"></div>
                        </div>
                    </div>

                    <div className="progress">
                        <span className="skill">JavaScript <i className="val">75%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar"></div>
                        </div>
                    </div>

                    </div>

                    <div className="col-lg-6">

                    <div className="progress">
                        <span className="skill">PHP <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar"></div>
                        </div>
                    </div>

                    <div className="progress">
                        <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar"></div>
                        </div>
                    </div>

                    <div className="progress">
                        <span className="skill">Photoshop <i className="val">55%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar"></div>
                        </div>
                    </div>

                    </div>

                </div>

                </div>

                <div className="interests container">
                    <div className="section-title">
                        <h2>Interests</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="ri-store-line"></i>
                                <h3>Lorem Ipsum</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-bar-chart-box-line"></i>
                                <h3>Dolor Sitema</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="ri-calendar-todo-line"></i>
                            <h3>Sed perspiciatis</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <i className="ri-paint-brush-line"></i>
                            <h3>Magni Dolores</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-database-2-line"></i>
                            <h3>Nemo Enim</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-gradienter-line"></i>
                            <h3>Eiusmod Tempor</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-file-list-3-line"></i>
                            <h3>Midela Teren</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-price-tag-2-line"></i>
                            <h3>Pira Neve</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-anchor-line"></i>
                            <h3>Dirada Pack</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-disc-line"></i>
                            <h3>Moton Ideal</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-base-station-line"></i>
                            <h3>Verdo Park</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-fingerprint-line"></i>
                            <h3>Flavor Nivelanda</h3>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials container">

                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        </div>
                    </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="owl-carousel testimonials-carousel">

                </div> 

                </div> */}

            </section>
        </Layout>
    );
}

export default About;