import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Home = () => {
    return ( 
        <div>
            <header>
                                <nav className="section_container nav_container">
                    <div className="nav-logo">Live<span>Good</span></div>
                    <ul className="nav-links">
                        <Link to='/'><li className="link">HOME</li></Link>
                        <Link><li className="link">SERVICES</li></Link>
                        <Link to='/health'><li className="link">HEALTHY TIPS</li></Link>
                        <Link to='/nutrition'><li className="link">NUTRITION PLAN</li></Link>
                        <Link to='/workout'><li className="link">WORKOUT ROUTINE</li></Link>
                    </ul>
                    <button className="btn">Contact Us</button>
                </nav>
                <div className="section_container header_container">
                    <div className="header_container">
                        <h1>WELCOME TO A NEW BEGINNING</h1>
                        <p>
                        Welcome to the world of health and nutrition, where nourishing your body and mind is the key to unlocking a 
                        vibrant life. At the core of our existence lies the profound connection between what we consume and how we thrive. Optimal health isn't just 
                        about the absence of illness; it's a holistic journey 
                        encompassing balanced nutrition, regular physical activity,
                        mental well-being, and mindful choices.
                        </p>
                        <button className="btn">LEARN MORE</button>   
                    </div>
                    <div className="header_form">
                        <form>
                            <h4>Book Now</h4>
                            <input type="text" id="fName" placeholder="first Name" />
                            <input type="text" id="lName" placeholder="Last Name" />
                            <input type="text" id="address" placeholder="Address" />
                            <input type="text" id="phoneNo" placeholder="Phone No." />
                            <button className="btn form_btn">Book Appointment</button>
                        </form>
                    </div>
                </div>
            </header>
            <section className="section_container service_container">
                <div className="service_header">
                    <div className="service_header_content">
                        <h2 className="section_header">Our Services</h2>
                        <p>Beyond simply providing Health care tips, our commitment lies in delivering uparalleled 
                            service tailored 
                            to your unique needs
                        </p>
                        <div className="service_grid">
                            <div className="service_card">
                                <span><img src="src/images/nutrition.jpg" alt=""height="300"width="400" /></span>
                                <h4>NUTRITION PLANS</h4>
                                <p>Embarking on a nutrition plan is like planting seeds for a healthier you! Just imagine your body as a 
                                    vibrant garden, with each meal and snack nurturing your health blooms. Your personalized nutrition plan is 
                                    like the perfect recipe for growing strong and feeling amazing. It's like packing a picnic basket full of all the nutrients 
                                    your body needs to thrive. So, let's sprinkle in some leafy greens, a handful of colorful veggies, 
                                    and a dash of protein to create a delicious feast for your body and soul. With your nutrition plan as our compass, we'll cultivate wellness 
                                    together, one delightful bite at a time!
                                </p>
                                <Link to='/nutrition'>Learn More</Link>
                            </div>
                    
                    
                    
                    <div className="service_card">
                        <span><img src="src/images/healthy.jpg" alt=""height="300"width="400"/></span>
                        <h4>HEALTHY TIPS</h4>
                        <p>Let's dive into a treasure trove of adorable ways to boost your health! Picture yourself as a wellness 
                            explorer, discovering the secret paths to a happier, healthier life. Start your day with a giggle-filled 
                            stretch and a sunshine-smile breakfast, packed with fruity delights and whole grain wonders. Stay hydrated 
                            with sips of refreshing water—think of it as a mini waterfall for your body! Take playful walks through 
                            nature's playground, gathering colorful veggies and juicy fruits along the way. And when it's time to rest, cozy up like a 
                            snuggly bear for a peaceful night's sleep. Embrace these little adve ntures, and watch your wellness 
                            garden bloom with joy!
                        </p>
                        <Link to='/health'>Learn More</Link>
                        
                    </div>

                    <div className="service_card">
                        <span><img src="src/Images/workout.jpg" alt=""height="300"width="400"/></span>
                        <h4>WORKOUT ROUTINES</h4>
                        <p>Let's embark on a fitness journey that's as fun as a hopscotch game! When it comes to workouts, think
                            of yourself as a joyful athlete in training. Start with warm-up dances that make your heart skip with 
                            excitement, like a friendly game of musical chairs without the chairs! Embrace the magic of stretching—reach
                            for the stars and touch your toes with giggles. Explore workouts that feel like playful adventures, whether it's pretending to be a graceful dolphin in the pool or a bouncy kangaroo on a trampoline. Don't forget to celebrate each move with smiles and high-fives! And when it's time to cool down, imagine yourself floating gently on a cloud, letting your body unwind like a sleepy kitten. With these playful tips, exercising becomes a delightful journey to a stronger, 
                            happier you!
                        </p>
                        <Link to='/workout'>Learn More</Link>

                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section_container about_container">
                <div className="about_content">
                    <h2 className="section_header">About US</h2>
                    <p>At LiveGood, we are dedicated to empowering individuals to take control of their well-being 
                        and live healthier, happier lives. Whether you're looking for expert advice on nutrition, fitness tips, 
                        mindfulness practices, or holistic 
                        health approaches, we've got you covered.
                    </p>
                    <p>Our team of experienced health professionals and wellness enthusiasts curates and creates high-quality 
                        content that is informative, inspiring, and easy to understand. We believe in the power of education 
                    and strive to provide evidence-based information to help you make informed decisions about your health.
                    </p>
                    <p>What sets us apart is our commitment to promoting a holistic approach to wellness. We 
                        understand that true health encompasses not only physical fitness but also mental and emotional well-being. 
                    </p>
                </div>
                <div className="about_image">
                    <img src="src/Images/body photo.jpg" alt="" height="550" width="500"/>
               </div>        
            </section>
            <Footer/>
            

        </div>
     );
}
 
export default Home;

