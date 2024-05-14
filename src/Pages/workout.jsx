import { Link } from "react-router-dom";

const Workout = () => {
  return (
    <div>
      <header>
        <nav className="section_container nav_container">
          <div className="nav-logo">
            Live<span>Good</span>
          </div>
          <ul className="nav-links">
          <Link to="/">
              <li className="link">HOME</li>
            </Link>
            <Link>
              <li className="link">SERVICES</li>
            </Link>
            <Link to="/health">
              <li className="link">HEALTHY TIPS</li>
            </Link>
            <Link to="/nutrition">
              <li className="link">NUTRITION PLAN</li>
            </Link>
            <Link to="/workout">
              <li className="link">WORKOUT ROUTINE</li>
            </Link>
          </ul>
          <button className="btn">Contact Us</button>
        </nav>
      </header>
      <div className="dynamic-background">
        <h1 style={{ color: "#12ac8e" }}>
          Welcome To The Workout Routine.
          <br />A Weekly Workout Seesion
          <br />
          For You.
        </h1>
        <p>Get ready to sweat and achieve your fitness goals!</p>
      </div>
      <div className="content-container">
        <p>
          Welcome to my weekly workout routine! Whether you're looking to lose
          weight, maintain your shape, or simply stay active, you've come to the
          right place. Below, you'll find sample workout plans tailored to
          different fitness goals. Feel free to customize them to fit your
          preferences and schedule. Let's get started on your journey to a
          healthier lifestyle!
        </p>
      </div>
      <div id="showcase">
        <div className="container">
          <h1
            className="sub-title"
            style={{ color: "#12ac8e", letterSspacing: "5px" }}
          >
            GOOD HEALTH STARTS NOW
          </h1>
          <div style={{ textAlign: "center" }} className="work">
            <img
              src="https://t4.ftcdn.net/jpg/01/79/81/77/360_F_179817756_QzTocli57q9G6a1Oe7kJtoMS5dNMU8cl.jpg"
              alt="30 mintime workout"
              style={{
                height: "400px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            />
            <div className="text-overlay">
              <h1>
                <a
                  style={{ color: "#fa9643" }}
                  href="https://darebee.com/workouts.html"
                >
                  {" "}
                  Workouts
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="motivation">
        <h1 style={{ color: "#12ac8e", letterSpacing: "5px" }}>
          Motivation Comes First....
        </h1>
        <h2>Embracing the Journey Towards Better Health</h2>
        <p>
          <strong>"Success is not final, failure is not fatal:</strong> It is
          the courage to continue that counts." - Winston Churchill. In the
          journey toward better health and fitness, setbacks are inevitable,
          whether it's missing a workout, struggling with consistency, or facing
          plateaus. However, it's not the setbacks that define us, but rather
          our resilience and determination to persevere. Every time we lace up
          our shoes or step onto the yoga mat, we demonstrate courage and
          commitment to our well-being.
        </p>{" "}
        <br />
        <p>
          {" "}
          Embracing this mindset, we acknowledge that progress is not linear;
          it's about showing up, giving our best, and staying the course despite
          challenges. With each workout, we build strength, endurance, and
          character, inching closer to our health goals and becoming the best
          version of ourselves. So, let us find courage in the face of
          adversity, knowing that every step forward, no matter how small,
          brings us closer to a healthier, happier life.
        </p>
        <h3>
          <strong> Monday: Running for 30 minutes</strong>
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://inhabitat.com/wp-content/blogs.dir/1/files/2018/02/Jogging-Environment-889x592.jpg"
            alt="running image"
            style={{ width: "50%", height: "50vh" }}
          />
          <p style={{ flexGrow: "1", color: "#12ac8e" }}>
            With its high-intensity nature, running elevates heart rate and
            promotes fat loss in a relatively short time. Whether on the
            treadmill or outdoors, this invigorating session leaves you feeling
            energized and accomplished, ready to tackle whatever comes your way.
          </p>
          <p style={{ color: "#f87103", flexGrow: "1" }}>
            Running for 30 minutes offers a quick and effective cardio workout,
            perfect for boosting endurance and burning calories. Engaging
            multiple muscle groups throughout the body, it strengthens the legs,
            core, and cardiovascular system.
          </p>
        </div>
        <h3>
          <strong> Tuesday: Cycling for 45 minutes</strong>
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.health.com/thmb/KIpMvWkBlA5sd5ouYCRJrylo3To=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-135537873-2000-3b57976b084d4731a41f801c6b1af884.jpg"
            alt="cycling image"
            style={{ width: "50%" }}
          />
          <p style={{ flexGrow: "1" }}>
            A 45-minute cycling session is a dynamic cardio workout that boosts
            fitness and burns calories efficiently. Engaging large muscle groups
            in the legs and core, it strengthens endurance and promotes fat
            loss.
          </p>
          <p style={{ color: "#f87103", flexGrow: "1" }}>
            With its low-impact nature, cycling is accessible to all fitness
            levels, offering a refreshing way to elevate heart rate and improve
            cardiovascular health. Whether indoors or outdoors, this energizing
            session leaves you feeling invigorated and ready to tackle the day
            ahead.
          </p>
        </div>
        <h3>
          <strong>
            {" "}
            Wednesday: HIIT (High-Intensity Interval Training) for 30 minutes
          </strong>
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://octanefitness.com/app/uploads/2016/01/elliptical-workouts-hiit.jpg"
            alt="HIIT image"
            style={{ width: "50%" }}
          />
          <p style={{ flexGrow: "1", color: "#12ac8e" }}>
            A HIIT (High-Intensity Interval Training) session is a powerful
            workout that combines bursts of intense exercise with short recovery
            periods. In just 20 minutes, HIIT delivers a full-body workout,
            torching calories and boosting metabolism. Alternating between
            high-intensity intervals and brief rest periods challenges the
            cardiovascular system and builds endurance.
          </p>
          <p style={{ color: "#f87103", flexGrow: "1" }}>
            HIIT is known for its efficiency, making it ideal for those with
            busy schedules. Whether you're doing bodyweight exercises,
            sprinting, or using equipment, this fast-paced session leaves you
            feeling exhilarated and accomplished, with benefits that extend
            beyond the workout.
          </p>
        </div>
        <marquee behavior="scroll" direction="left">
          KEEP ON PUSHING.....
        </marquee>
        <h3>
          <strong> Thursday:</strong> Jumping rope for 15 minutes
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://runningmagazine.ca/wp-content/uploads/2019/09/skipping-copy-e1568127526898.jpg"
            alt="jumping rope"
            style={{ width: "50%" }}
          />
          <p style={{ flexGrow: "1" }}>
            umping rope involves swinging a rope over the body and jumping over
            it repeatedly, engaging multiple muscle groups for a full-body
            workout. It's versatile, offering various techniques for all fitness
            levels, from basic jumps to advanced tricks.
          </p>
          <p style={{ color: "#f87103", flexGrow: "1" }}>
            This simple yet effective exercise improves cardiovascular health,
            coordination, and agility. With its portability and affordability,
            jumping rope is an excellent addition to any workout routine,
            providing a quick and challenging way to boost fitness and burn
            calories.
          </p>
        </div>
        <h3>
          <strong> Friday: Swimming for 30 minutes</strong>
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.monitor.co.ug/resource/image/1879340/landscape_ratio3x2/1620/1080/9a2fc6b029d0f6bb86f02100b8e4f6c3/TK/health07pix.jpg"
            alt="man swimming"
            style={{ width: "50%" }}
          />
          <p style={{ flexGrow: "1", color: "#12ac8e" }}>
            Swimming for 30 minutes is a fantastic cardiovascular workout that
            engages the entire body, offering numerous health benefits. This
            low-impact exercise improves cardiovascular endurance, muscle
            strength, and flexibility while reducing stress on the joints.
            Whether doing laps in a pool or swimming in open water.
          </p>
          <p style={{ color: "#f87103", flexGrow: "1" }}>
            It provides a full-body workout that targets muscles in the arms,
            legs, core, and back. Additionally, swimming enhances lung capacity
            and promotes relaxation, making it an excellent choice for both
            fitness and stress relief. Incorporating swimming into a regular
            exercise routine can help improve overall fitness levels and
            contribute to a healthy and active lifestyle
          </p>
        </div>
        <h3>
          <strong>
            {" "}
            Saturday: Circuit training (mix of cardio and strength exercises)
            for 40 minutes
          </strong>
        </h3>
        <p>
          Circuit training blends strength and cardio exercises in a
          time-efficient format. With minimal rest between drills, it targets
          multiple muscle groups and boosts heart rate for calorie burn and
          fitness gains. Here's a sample 10-drill circuit.
        </p>
        <img
          src="https://www.anytimefitness.com/wp-content/uploads/2023/09/Beginner-Circuit-Workout-1600x900-1.jpg"
          alt="lady doing circuit training"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "10%",
          }}
        />
        <p style={{ columnCount: "2" }}>
          <strong>
            {" "}
            1. Jumping jacks
            <br /> 2. Push-ups
            <br /> 3. Squats
            <br /> 4. Plank
            <br /> 5. Lunges
            <br /> 6. Mountain climbers
            <br />
            7. Burpees
            <br /> 8. Bicycle crunches
            <br /> 9. Tricep dips
            <br /> 10. High knees.
            <br />{" "}
          </strong>
          Rotate through each drill for a challenging full-body workout that
          enhances strength, endurance, and overall fitness.
        </p>
        <h3>
          <strong> Sunday: Rest day</strong>
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://images.ctfassets.net/0k812o62ndtw/1Mln8WZSFEVPMiHmV6Q7UA/b423e071cd0f056651979ea94b2b3ce4/FitnessHangover_endb1021678c8f2ed2ac0e7653d1ef5cd6.jpg?fm="
            alt="lady resting"
            style={{ width: "50%" }}
          />
          <p style={{ flexGrow: "1", color: "#12ac8e" }}>
            Rest days are crucial for allowing the body to recover and adapt to
            the stresses of exercise, preventing burnout and reducing the risk
            of injury. Sunday, often regarded as a traditional day of rest,
            provides the perfect opportunity to recharge both physically and
            mentally. By taking a break from structured workouts and allowing
            muscles to repair and replenish glycogen stores.
          </p>
          <p style={{ color: "#f87103", flexGrow: "1" }}>
            Rest days support muscle growth, recovery, and overall well-being.
            Whether spent engaging in light activities like walking or yoga, or
            simply relaxing and enjoying leisure time with family and friends,
            Sunday rest days are an essential component of a balanced fitness
            routine. Embracing rest days allows individuals to return to their
            workouts feeling refreshed, rejuvenated, and ready to tackle new
            challenges in the week ahead.
          </p>
        </div>
        {/*<div>
                    <h2>BELOW IS A 30 MINUTE WORKOUT THAT CAN BE FOLLOWED......</h2>
                    <div className="last-container">
                        <div className="video-container">
                            <iframe width="648" height="365" src="https://www.youtube.com/embed/jKTxe236-4U" title="30 MIN FULL BODY WORKOUT - Apartment & Small Space Friendly (No Equipment, No Jumping)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen><iframe/>     
                        <div/>
                    </div>
                </div>*/}
        <p>
          Got it! Here's a paragraph written in plain text: "After following
          along with the energizing workout video above, you'll feel invigorated
          and ready to take on the day! Whether you're exercising in a small
          apartment or spacious gym, this workout is designed to be apartment
          and small-space friendly,
          <br />
          requiring no equipment or jumping. Get ready to elevate your fitness
          routine and embrace a healthier lifestyle!"
        </p>
      </section>
      <div id="Services">
        <div className="container">
          <div className="services-list">
            <div>
              <h2>Wellness Practices</h2>
              <p>
                <strong>
                  Wellness practices like mindfulness meditation and yoga
                  promote overall well-being by reducing stress, enhancing
                  emotional balance, and fostering self-awareness. Stress
                  management techniques such as deep breathing and progressive
                  muscle relaxation help individuals cope with daily stressors.{" "}
                </strong>
              </p>
              <br />
              <a
                href="https://www.pennfoundation.org/news-events/articles-of-interest/5-wellness-practices/"
                style={{ color: "blue", fontSize: "20px" }}
              >
                Learn more
              </a>
            </div>
            <div>
              <h2>Benefits of Workout</h2>
              <p>
                <strong>
                  {" "}
                  Regular exercise improves cardiovascular health, aids in
                  weight management, and boosts mood by releasing endorphins.
                  Strength training builds muscle strength, enhances metabolism,
                  and improves bone health. Flexibility exercises reduce muscle
                  tension and prevent injuries. Balance and stability exercises
                  enhance coordination and postural control. .
                </strong>
              </p>
              <br />
              <a
                href="https://www.healthline.com/nutrition/10-benefits-of-exercise"
                style={{ color: "blue", fontSize: "20px" }}
              >
                Learn more
              </a>
            </div>
            <div>
              <h2>Exercise Types</h2>
              <p>
                <strong>
                  {" "}
                  Cardiovascular exercises like jogging and swimming improve
                  cardiovascular endurance. Strength training exercises,
                  including weightlifting, build muscle strength and enhance
                  metabolism. Flexibility exercises like stretching and yoga
                  improve joint range of motion and reduce muscle tension.{" "}
                </strong>
              </p>
              <br />
              <a
                href="https://www.health.harvard.edu/exercise-and-fitness/the-4-most-important-types-of-exercise"
                style={{ color: "blue", fontSize: "20px" }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="section_container footer_container">
          <div className="footer_col">
            <h3>
              Live<span>Good</span>
            </h3>
            <p>
              We are honored to be a part of your healthcare journey and
              committed to delivering compassionate, personalized, and top-notch
              care every step of the way.
            </p>
            <p>
              Trust us with your Health, and let us work together to achive the
              best possible outcomes for you and your loved ones.
            </p>
          </div>
          <div className="footer_col">
            <h4>About Us</h4>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Nutrition</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="footer_col">
            <h4>Services</h4>
            <p>Health Tips</p>
            <p>Nutrition Plans</p>
            <p>workout Routines</p>
          </div>
          <div className="footer_col">
            <h4>Contact Us</h4>
            <p>
              <i className="bx bx-map"></i> Bugolobi, Luthuli Avenue
            </p>
            <p>
              {" "}
              <i className="bx bxl-gmail"></i> livegood23@gamil.com
            </p>
            <p>
              <i className="bx bxs-phone"></i> (+256)753 574 262
            </p>
          </div>
          <div className="footer_bar">
            <div className="footer_bar_content">
              <p>Copyright © 2024 code crushers. All rights rescerved</p>
              <div className="footer_socials">
                <i className="bx bxl-twitter"></i>
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-whatsapp"></i>
                <i className="bx bxl-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Workout;
