import Footerelements from "./Footerelements";

const Footer = () => {

    let data1 = [
        {titl: 'About Us'},
        {text: 'Home'},
        {text: 'Services'},
        {text: 'About Us'},
        {text: 'Nutrition'},
        {text: 'Terms and Conditions'},
    ]

    let data2 = [
        {titl: 'Services'},
        {text: 'Home'},
        {text: 'Health Tips'},
        {text: 'Nutrition Plans'},
        {text: 'workout Routines'},
    ]

    return ( 
        <footer id="contact-footer" className="footer">
                <div className="section_container footer_container">
                    <div className="footer_col">
                        <h3>Live<span>Good</span></h3>
                        <p>
                            We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and 
                            top-notch care every step of the way.
                        </p>
                        <p>
                            Trust us with your Health, and let us work together to achive the best possible outcomes for you and your loved ones.
                        </p>
                    </div>
                    <div className="footer_col">
                    {
                        data1.map((element, index)=>{
                            return <Footerelements key={index} titl={element.titl} text={element.text}/>
                        })
                    }


                    </div>
                    <div className="footer_col">
                    {
                        data2.map((element, index)=>{
                            return <Footerelements key={index} titl={element.titl} text={element.text}/>
                        })
                    }

                    </div>
                    <div className="footer_col">
                        <h4>Contact Us</h4>
                        <p><i className='bx bx-map'></i> Bugolobi, Luthuli Avenue</p>
                        <p> <i className='bx bxl-gmail' ></i> livegood23@gamil.com</p>
                        <p><i className='bx bxs-phone' ></i> (+256)753 574 262</p>
                    </div>
                    <div className="footer_bar">
                        <div className="footer_bar_content">
                            <p>Copyright © 2024 code crushers. All rights reserved</p>
                            <div className="footer_socials">
                                <i className='bx bxl-twitter'></i>
                                <i className='bx bxl-facebook'></i>
                                <i className='bx bxl-whatsapp'></i>
                                <i className='bx bxl-instagram' ></i> 
                            </div>
                        </div>
                     </div>
                </div>
            </footer>
     );
}
 
export default Footer;