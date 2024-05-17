import { Link } from "react-router-dom";

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

      <main className="main section">
        <section>
      <div>
        <div className="color-b">
          <h1 id="welc">
            Welcome to Tour Daily <span className="nut">Healthy Tips</span> Plan
          </h1>
          <p>Get ready to strive and achieve your perfect health goals!</p>
        </div>
        </div>


          <div id="intro">
            <div><img src="src/Images//healthy.jpg" alt="image" width=""/></div>

            <div>
              <p>
                Empower your well-being with these invaluable healthy tips designed to invigorate your mind, body, and soul.
                Here's an example of transformative tips given on this page to fuel your journey towards optimal health and vitality.
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
          <div className="service_card ">
            <h1><span>1.Diet and Nutrition Tips</span></h1>
            <br/>
            <div class="Tips">
              <h3>*Here are some specific diet tips to practice.*</h3>
            </div>
            
            <div id="diet"><img src="src/Images//diet-and-nutrition.jpg" alt="image" width=""/></div>
            

            <h3>Eat More Plant-Based Foods</h3>
            <p>
              Incorporate more fruits vegetables, legumes, nuts, and seeds into your meals for added nutrients and fiber.
            </p>
            <br/>
            <h3>-Choose Whole Grains</h3>
            <p>
              Opt for whole grains like brown rice, quinoa, oats, and whole wheat bread instead of refined grains for more fiber and nutrients.
            </p>
            <br/>
            <h3>-Healthy Fats</h3>
            <p>
              Include sources of healthy fats such as avocados, olive oil, nuts and fatty fish like salmon to support heart health and overall wellbeing.
            </p>
            <br/>
            <h3>-Lean Proteins</h3>
            <p>
              Choose lean sources of proteins such as chicken, turkey, fish tofu, beans and lentils to help build and repair tissues in the body.
            </p>
            <br/>
            <h3>-Limit Added Sugars</h3>
            <p>
              Minimize consumption of food and beverages high in added sugars like candies, patries, sugary drinks, and desserts.
            </p>
            <br/>
            <h3>-Colorful Plate</h3>
            <p>
              Aim to have a colorful plate at each meal with a variety of fruits and vegetables, as different colors often indicate different nutrients.
            </p>
            <br/>
            <h3>-Cook At Home</h3>
            <p>
              Cook more meals at home using fresh, whole ingredients to have better control over what you are eating and to avoid added sugars, unhealthy fat, and excess sodium.
            </p>
            <br/>
            <h3>-Be Mindful Of Portions</h3>
            <p>
              Pay attention to portion sizes, especially when eating out or indulging in treats, to avoid consuming more calories than you need.
            </p>
            <br/>
            <h3>-Plan Ahead</h3>
            <p>
              Plan your meals and snacks ahead of time to make healthier choices and avoid impulse eating.
            </p>
            <br/>
            <h3>-Listen To Your Body</h3>
            <p>
              Pay attention to your body's hunger and fullness cues, and eat when you are hungry while stopping when you're satisfied, rather than eating out of boredom or emotions.
            </p>
            <br/>
            <div className="Tips">
              <h3>Some Nutrition Tips To practice:</h3>
            </div>

            <br/>
            <h3>-Balanced Diet</h3>
            <p>
              Ensure your meals include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.
            </p>
            <br/>
            <h3>-Hydration</h3>
            <p>
              Ofcourse drink plenty of water throughout the day to stay hydrated. Aim for at least 8 glasses a day.
            </p>
            <br/>
            <h3>-Limit Processed Foods</h3>
            <p>
              Minimize intake of procssed foods high in added sugars, sodium, and unhealthy fats.
            </p>
            <br/>
            <h3>-Regular Meals</h3>
            <p>
              Try to eat regular meals and snacks to maintain energy levels throughout the day.
            </p>
            <br/>
              <h3>-Read Lebels</h3>
              <p>
                Pay attention to food lebels and ingredients to make informed choices about what you are eating.
              </p>
              <br/>
                <h3>-Moderation</h3>
                <p>
                  Enjoy your favorite treats in moderation rather than depriving yourself completely.
                </p>
              </div>
            </section>
            <br/>
            <section>

              <div className="service_card ">
                <h1><span>2.Skin Health Tips</span></h1>
                <h3>*Heres What We Can Do For Clear And Healthy Skin*</h3>

                <div id="skin"><img src="src/Images//skin care.webp" alt="image"/></div>
                <h3>-Maintain a blanced diet rich in fruits and vegetables.</h3>

                <div>
                  <h4>Several fruits offer great benefits for skin health. Here are 5 of them that come top on that list.</h4>
                  <ul>
                    <li>Berries: Rich in antioxidants like vitamin C, berries such as strawberries, blueberries, and raspberries help fight free radicals that can damage skin cells and accelerate aging.</li>
                    <li>Oranges: Loaded with vitamin C, oranges promote collagen production, which helps keep the skin firm and youthful-looking.</li>
                    <li>Avocado: Packed with healthy fats and vitamin E, avocados moisturize and nourish the skin, promoting a healthy glow.</li>
                    <li>Papaya: Contains an enzyme called papain, which acts as a natural exfoliant, removing dead skin cells and promoting skin renewal.</li>
                    <li>Watermelon: High in water content hydrates the skin, while vitamins A and C help repair and protect against sun damage.</li>
                  </ul>
                  <br/>
                  <h4>Vegetables play a crucial role in maintaining healthy skin, due to their abundance od vitamins, minerals and anti-oxidants.<br/>Here are 5 vegetables known for their skin-nourishing properties.</h4>
                  <ul>
                    <li>Spinach: Rich in vitamina A, C and E, as well as antibiotics, spinach helps to repar and protect the skin from damage caused by UV rays and environmental polutants.</li>
                    <li>Sweet potatoes: Loaded with beta-carotene, sweet potatoes are converted into vitaminA in the body, which protects skin cell turnover and contributes to a glowing complexion.</li>
                    <li>Bell papers: High in vitamin C, bell papers help boost collagen production, which maintains skin elasticity premature aging.</li>
                    <li>Carrots: Another excellent source of beta-carotene, carrots contribute to skin health by promoting cell renewal and protected against sun damage.</li>
                    <li>Broccoli: Packed with Vitamin A, C and K, as well as anti-biotics like sulphoraphane, broccoli helps detoxify the skin and commbat inflammation, leading to clearer complexion.</li>
                  </ul>
                </div>

                <h3>-Maintain a diet rich in omega-3 fatty acids for skin nourishments.</h3>
                <p>Omega-3 fatty acids are type of polyunsaturated fat that are essential for overallhealth, including skin health. They primarily are found in fatty fish, certain nuts, seeds,<br/> and plant oils.Omega-3 fatty oils are crucial in maintaining the skin's lipid barrier which helps retain moisture and keep out irritants and toxins.</p>
                <br/>
                  <h4>The two main types of omega-3 fatty acids beneficial for skin health are:</h4>
                  <ul>
                    <li>Eicosapentaenoic acid(EPA): EPA helps regulate oil production, reduce inflammation, and protect against sun damage. It can be found in fatty fish such as salmon, mackrel, and sardines.</li>
                    <li>Docosahexaenoic acid(DHA): DHA is essential for maintaining the structural integrity  of skin cell membranes, promoting elasticity and smoothness like EPA, it is ambundant in fatty fish.</li>
                  </ul>
                  <h5>
                    Both EPA nad DHA are important for maintaining healthy skin, so incorporating sources of omega-3 fatty acids into your diet, such as fish or plant-based alternatives like flaxseeds, chia seeds, and walnuts, can benefit your skin's overall health and appearance.
                  </h5>
                  <br/>
                    <h3>-Stay Hydrated</h3>
                    <h3>-Moisturize daily</h3>
                    <h3>-Get Enough Sleep For Skin Regeneration.</h3>
                    <h3>-Additionally , Manage Stress level as stress can impact skin health negatively.</h3>
                    <h3>-Regular Exercise also promotes healthy circulation, which benefits your skin.</h3>

                  </div>
                </section>

                <br/>

                  <section>
                  <div className="service_card ">
                      <h1><span>3.Weight Loss Tips</span></h1>
                      <h3>*Lets Dive Into Our Simple Weight Loss Tips.</h3>


                      <div id="weight"><img src="src/Images//weightloss.webp" alt="image"/></div>
                      <h5>
                        Embarking on a weight loss journey can be both exciting and challenging. Whether you're looking to shed a few pounds for health reasons or to feel more confident in your ownskin, it's important to approach weight loss in a sustainable and healthy way. With that in mind, here are some practical tips to help you achieve your weight loss goals and improve your overall wellbeing.
                      </h5>
                      <ul>
                        <li>Stay Hydrated: Drink plenty of water throughout the day to stay hydrated and keep your metabolism functioning properly.</li>
                        <li>Eat Mindfully: Pay attention toyour body's hunger and fullness cues, which will help you to prevent overeating and allow you to eat only when your body truly needs nourishment. Also avoid distractions while eating.</li>
                        <li>Include Protein: Incorporate lean protein sources into your meals to help you feel ful and satisfied, for example; skinless chicken breast, turkey breast, fish, eggs, tofu, greek yogurt,lean beef, cottage cheese among others.</li>
                        <li>Choose Whole foods: Opt for whole, unprocessed foods like fruits, vegetables, whole grains, and lean proteins instead of processed and packaged foods.</li>
                        <li>Portion Control: Be mindful of portion sizes to avoid overeating, and use smaller plates and bowls to help control portions.</li>
                        <li>Regular Exercise: Aim for atleast 30 minutes of moderate-intensity exercise most days of the week to help burn calories and improve overall health.</li>
                        <li>Get Adequate Sleep: Aim for 7-9 hours of sleep per night, as inadequate sleep can disrupt hunger hormones and lead to weight gain.</li>
                        <li>Manage Stress: Practice stress-reducing techniques such as meditation, deep breathing, or silence to help prevent emotional eating and promote weight loss.</li>
                        <li>Limit Sugary Beverages: Cut back on sugary drinks like soda, and juice, opting for water, herbal tea, or sparkling water instead.</li>
                        <li>Be Patient and Consistent: Rememeber that weight loss takes time and consistency, so be patient with yourself and stay committed to your healthy habits.</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                  <div className="service_card ">
                      <h1><span>4. Weight Gain Tips</span></h1>

                      <div id="gain"><img src="src/Images//gainweight.jpg" alt="image"></img></div>

                      
                        <h5>
                          Remember, it's essential to focus on gaining weight in a healthy way by prioritizing nutrient-dense foods and regular excersice. Consulting with a healthcare professional or nutritionist can also provide personalized guidance. However, here are some weight gain tips that can do the perfect weight gain for you.
                        </h5>
                        
                          <h3>-Increase Caloric Intake:</h3> 
                          <p>
                            Consume more calories than your body burns to promote weight gain. Focus on Nutrient-dense foods like nuts, avocados, and lean meats.
                          </p>
                          <h3>-Eat Frequently:</h3>
                          <p>
                             Aim for smaller, more frequent meals throughout the day to ensure you're consistently fueling your body.
                          </p>
                          <h3>-Include Protein:</h3>
                          <p> 
                            Protein is essential for building muscle mass. Incorporate protein-rich foods like chicken, fish, eggs, and dairy into your diet. 
                          </p>
                          <h3>-Strength Training:</h3>
                          <p>
                            Incorporate strength training exercises into your workout routine to build muscle mass, which can contribute to weight gain.
                          </p>
                          <h3>-Healthy Fats:</h3>
                          <p>
                            Healthy fats like olive oil, nuts seeds, and fatty fish in your diet to increase calorie intake without filling up on large volumes of food.
                          </p>
                          <h3>-Stay Hydrated:</h3>
                          <p>
                            Take plenty of water throughout the say to support overall health and digestion.
                          </p>
                          <h3>-Track Progress:</h3>
                          <p>
                            Keep track of your calorie intake and weight gain progress to adjust your diet and exercise routine accordingly.
                          </p>
                          
                    </div>
                  </section>

                  <section>
                  <div className="service_card ">
                      <h1><span>5. Hydration Tips</span></h1>

                      <div id="hydration"><img src="src/Images//hydration.webp" alt="image"/></div>

                      <h3>I know many of us have persnally struggled with keeping ourselves hydrated, especially with water. And thats why our wellness site is here to solve this task with you.</h3>
                      <p>
                        *Drink water regularly throught the day, even if you arent feeling thirsty.<br/>
                        *Carry a reusable water bottle with you to encourage drinking water on the go.<br/>
                        *Set reminders on your phone or use apps to remind you to drink water at regular intervals.<br/>
                        *Eat foods with high water content, such as fruits and vegetables, to help stay hydrated.<br/>
                        *Monitor the color of your urine; pale yellow or clear urine usually indicates good hydration<br/>
                        *Limit caffeine and alcohol intake, as they can dehydrate the body.<br/>
                        *Consider electrolyte-enhanced drinks, especially after intense workouts or prolonged physical activity, to replenish lost minerals.<br/>
                        *And finally, adjust your water intake based on factors like weather, activity level, and individual hydration needs.
                      </p>
                    </div>
                  </section>

                  <section>
                  <div className="service_card ">
                      <h1><span>6. Tips For Younger Looks</span></h1>

                      <div id="younger"><img src="src/Images//younger.jpg" alt="image"/></div>
                    </div>
                  </section>

                  <section>
                  <div className="service_card ">
                      <h1><span>7. Hair Growth Tips</span></h1>

                      <div id="hair"><img src="src/Images//hairgrowth.webp" alt="image"/></div>
                    </div>

                  </section>

                  <section>
                  <div className="service_card ">
                      <h1><span>8.Energy Suplememts</span></h1>

                      <div id="energy"><img src="src/Images//energy.webp" alt="image"/></div>
                    </div>
                  </section>
                </main>

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
              )
};






              export default Health;
