import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Health = () => {
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

      <main>
        <section>
          <div className="dynamic-background">
            <h1 style={{ color: "#12ac8e" }}>
              Welcome To The Healthy Tips
              <br />
              For You.
            </h1>
            <p>Get ready to strive and achieve your perfect health goals!</p>
          </div>

          <div id="intro">
            <div>
              <img src="src/images/healthy.jpg" alt="image" width="" />
            </div>

            <div>
              <p>
                Empower your well-being with these invaluable healthy tips
                designed to invigorate your mind, body, and soul. Here's an
                example of transformative tips given on this page to fuel your
                journey towards optimal health and vitality.
              </p>
              <ul>
                <li>Diet and Nutrition Tips</li>
                <li>Skin Health Tips</li>
                <li>Weight Loss and Gain Tips</li>
                <li>Hydration Tips</li>
                <li>Younger Looks</li>
                <li>Hair Growth Tips</li>
                <li>Suplements for energy.*among others</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h1>1.Diet and Nutrition Tips </h1>
          <br />
          <div className="Tips">
            <h3>*Here are some specific diet tips to practice.*</h3>
          </div>

          <div id="diet">
            <img
              src="src/Images/diet-and-nutrition.jpg"
              alt="image"
              width="50"
            />
          </div>

          <h3>*Eat More Plant-Based Foods</h3>
          <p>
            Incorporate more fruits vegetables, legumes, nuts, and seeds into
            your meals for added nutrients and fiber.
          </p>
          <br />
          <h3>*Choose Whole Grains</h3>
          <p>
            Opt for whole grains like brown rice, quinoa, oats, and whole wheat
            bread instead of refined grains for more fiber and nutrients.
          </p>
          <br />
          <h3>*Healthy Fats</h3>
          <p>
            Include sources of healthy fats such as avocados, olive oil, nuts
            and fatty fish like salmon to support heart health and overall
            wellbeing.
          </p>
          <br />
          <h3>*Lean Proteins</h3>
          <p>
            Choose lean sources of proteins such as chicken, turkey, fish tofu,
            beans and lentils to help build and repair tissues in the body.
          </p>
          <br />
          <h3>*Limit Added Sugars</h3>
          <p>
            Minimize consumption of food and beverages high in added sugars like
            candies, patries, sugary drinks, and desserts.
          </p>
          <br />
          <h3>*Colorful Plate</h3>
          <p>
            Aim to have a colorful plate at each meal with a variety of fruits
            and vegetables, as different colors often indicate different
            nutrients.
          </p>
          <br />
          <h3>*Cook At Home</h3>
          <p>
            Cook more meals at home using fresh, whole ingredients to have
            better control over what you are eating and to avoid added sugars,
            unhealthy fat, and excess sodium.
          </p>
          <br />
          <h3>*Be Mindful Of Portions</h3>
          <p>
            Pay attention to portion sizes, especially when eating out or
            indulging in treats, to avoid consuming more calories than you need.
          </p>
          <br />
          <h3>*Plan Ahead</h3>
          <p>
            Plan your meals and snacks ahead of time to make healthier choices
            and avoid impulse eating.
          </p>
          <br />
          <h3>*Listen To Your Body</h3>
          <p>
            Pay attention to your body's hunger and fullness cues, and eat when
            you are hungry while stopping when you're satisfied, rather than
            eating out of boredom or emotions.
          </p>
          <br />
          <div className="Tips">
            <h3> Some Nutrition Tips To practice:</h3>
          </div>

          <br />
          <h3>*Balanced Diet</h3>
          <p>
            Ensure your meals include a variety of fruits, vegetables, whole
            grains, lean proteins, and healthy fats.
          </p>
          <br />
          <h3>*Hydration</h3>
          <p>
            Ofcourse drink plenty of water throughout the day to stay hydrated.
            Aim for at least 8 glasses a day.
          </p>
          <br />
          <h3>*Limit Processed Foods</h3>
          <p>
            Minimize intake of procssed foods high in added sugars, sodium, and
            unhealthy fats.
          </p>
          <br />
          <h3>*Regular Meals</h3>
          <p>
            Try to eat regular meals and snacks to maintain energy levels
            throughout the day.
          </p>
          <br />
          <h3>*Read Lebels</h3>
          <p>
            Pay attention to food lebels and ingredients to make informed
            choices about what you are eating.
          </p>
          <br />
          <h3>*Moderation</h3>
          <p>
            Enjoy your favorite treats in moderation rather than depriving
            yourself completely.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h1>2.Skin Health Tips</h1>
          <h3>*Heres What We Can Do For Clear And Healthy Skin*</h3>

          <div id="skin">
            <img src="src/Images/skin care.webp" alt="image" />
          </div>
          <h3>*Maintain a blanced diet rich in fruits and vegetables.</h3>

          <div>
            <h4>
              Several fruits offer great benefits for skin health. Here are 5 of
              them that come top on that list.
            </h4>
            <ul>
              <li>
                <span>Berries</span>: Rich in antioxidants like vitamin C,
                berries such as
                <br />
                strawberries, blueberries, and raspberries help fight free{" "}
                <br /> radicals that can damage skin cells and accelerate aging.
              </li>
              <li>
                <span>Oranges</span>: Loaded with vitamin C, oranges promote
                collagen
                <br /> production, which helps keep the skin firm and
                youthful-looking.
              </li>
              <li>
                <span>Avocado</span>: Packed with healthy fats and vitamin E,
                avocados
                <br /> moisturize and nourish the skin, promoting a healthy
                glow.
              </li>
              <li>
                <span>Papaya</span>: Contains an enzyme called papain, which
                acts as
                <br /> a natural exfoliant, removing dead skin cells and
                promoting
                <br />
                skin renewal.
              </li>
              <li>
                <span>Watermelon</span>: High in water content hydrates the
                skin, while <br /> vitamins A and C help repair and protect
                against sun damage.
              </li>
            </ul>
            <br />
            <h4>
              Vegetables play a crucial role in maintaining healthy skin, due to
              their abundance od vitamins, minerals and anti-oxidants.
              <br />
              Here are 5 vegetables known for their skin-nourishing properties.
            </h4>
            <ul>
              <li>
                <span>Spinach</span>: Rich in vitamina A, C and E, as well as
                antibiotics,
                <br /> spinach helps to repar and protect the skin from damage
                <br /> caused by UV rays and environmental polutants.
              </li>
              <li>
                <span>Sweet potatoes</span>: Loaded with beta-carotene, sweet
                potatoes
                <br /> are converted into vitaminA in the body, which protects
                skin
                <br /> cell turnover and contributes to a glowing complexion.
              </li>
              <li>
                <span>Bell papers</span>: High in vitamin C, bell papers help
                boost collagen
                <br /> production, which maintains skin elasticity premature
                aging.
              </li>
              <li>
                <span>Carrots</span>: Another excellent source of beta-carotene,
                carrots
                <br /> contribute to skin health by promoting cell renewal and{" "}
                <br />
                protected against sun damage.
              </li>
              <li>
                <span>Broccoli</span>: Packed with Vitamin A, C and K, as well
                as anti-biotics
                <br /> like sulphoraphane, broccoli helps detoxify the skin and
                commbat
                <br /> inflammation, leading to clearer complexion.
              </li>
            </ul>
          </div>

          <h3>
            *Maintain a diet rich in omega-3 fatty acids for skin nourishments.
          </h3>
          <p>
            Omega-3 fatty acids are type of polyunsaturated fat that are
            essential for overallhealth, including skin health. They primarily
            are found in fatty fish, certain nuts, seeds,
            <br /> and plant oils.Omega-3 fatty oils are crucial in maintaining
            the skin's lipid barrier which helps retain moisture and keep out
            irritants and toxins.
          </p>
          <br />
          <h4>
            The two main types of omega-3 fatty acids beneficial for skin health
            are:
          </h4>
          <ul>
            <li>
              <span>Eicosapentaenoic acid(EPA)</span>: EPA helps regulate oil
              production,
              <br /> reduce inflammation, and protect against sun damage. It can
              be
              <br /> found in fatty fish such as salmon, mackrel, and sardines.
            </li>
            <li>
              <span>Docosahexaenoic acid(DHA)</span>: DHA is essential for
              maintaining the
              <br /> structural integrity of skin cell membranes, promoting
              elasticity
              <br /> and smoothness like EPA, it is ambundant in fatty fish.
            </li>
          </ul>
          <h5>
            Both EPA nad DHA are important for maintaining healthy skin, so
            incorporating sources of omega-3 fatty acids into your diet, such as
            fish or plant-based alternatives like
            <br /> flaxseeds, chia seeds, and walnuts, can benefit your skin's
            overall health and appearance.
          </h5>
          <br />
          <h3>*Stay Hydrated</h3>
          <h3>*Moisturize daily</h3>
          <h3>*Get Enough Sleep For Skin Regeneration.</h3>
          <h3>
            *Additionally , Manage Stress level as stress can impact skin health
            negatively.
          </h3>
          <h3>
            *Regular Exercise also promotes healthy circulation, which benefits
            your skin.
          </h3>
        </section>
        <br />
        <section>
          <h1>3.Weight Loss Tips</h1>

          <div id="weight">
            <img src="src/Images/weightloss.webp" alt="image" />
          </div>
        </section>

        <section>
          <h1>4. Weight Gain Tips</h1>

          <div id="gain">
            <img src="src/Images/gainweight.jpg" alt="image" />
          </div>
        </section>

        <section>
          <h1>5. Hydration Tips</h1>

          <div id="hydration">
            <img src="src/Images/hydration.webp" alt="image" />
          </div>
        </section>

        <section>
          <h1>6. Tips For Younger Looks</h1>

          <div id="younger">
            <img src="src/Images/younger.jpg" alt="image" />
          </div>
        </section>

        <section>
          <h1>7. Hair Growth Tips</h1>

          <div id="hair">
            <img src="src/Images/hairgrowth.webp" alt="image" />
          </div>
        </section>

        <section>
          <h1>8.Energy Suplememts</h1>

          <div id="energy">
            <img src="src/Images/energy.webp" alt="image" />
          </div>
        </section>
      </main>
      <Footer/>

      
    </div>
  );
};

export default Health;
