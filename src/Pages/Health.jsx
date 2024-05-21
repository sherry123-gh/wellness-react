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

          <div className="intro">
            <img src="src/Images//healthy.jpg" alt="image" width="400" height="600"/>

            
              <p>
                Empower your well-being with these invaluable healthy tips designed to invigorate your mind, body, and soul.
                Here's an example of transformative tips given on this page to fuel your journey towards optimal health and vitality.
                            Diet and Nutrition Tips,
                            Skin Health Tips,
                            Weight Loss and Gain Tips,
                            Hydration Tips,
                            Younger Looks,
                            Hair Growth Tips,
                            Suplements for energy among others,
              </p>
            </div>
          
        </section>

        <section>
          <div className="service_card2 ">
            <h1><span><b>1.Diet and Nutrition Tips</b></span></h1>
            <br/>
            <div className="Tips">
              <h3>*Here are some specific diet tips to practice.*</h3>
            </div>
            
            <div id="diet"><img src="src/Images//diet-and-nutrition.jpg" alt="image" width=""/></div>
            
            <h3>-Eat More Plant-Based Foods</h3>
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
              <h3><b>Some Nutrition Tips To practice:</b></h3>
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

              <div className="service_card2 ">
                <h1><span>2.Skin Health Tips</span></h1>
                <h3>*Heres What We Can Do For Clear And Healthy Skin*</h3>

                <div id="skin"><img src="src/Images//skin care.webp" alt="image"/></div>
                <h3>-Maintain a blanced diet rich in fruits and vegetables.</h3>

                <div>
                  <h4>Several fruits offer great benefits for skin health. Here are 5 of them that come top on that list.</h4>
                  
                    <h3>Berries:</h3><p> Rich in antioxidants like vitamin C, berries such as strawberries, blueberries, and raspberries help fight free radicals that can damage skin cells and accelerate aging.</p>
                    <h3>Oranges:</h3><p> Loaded with vitamin C, oranges promote collagen production, which helps keep the skin firm and youthful-looking.</p>
                    <h3>Avocado:</h3><p> Packed with healthy fats and vitamin E, avocados moisturize and nourish the skin, promoting a healthy glow.</p>
                    <h3>Papaya:</h3><p> Contains an enzyme called papain, which acts as a natural exfoliant, removing dead skin cells and promoting skin renewal.</p>
                    <h3>Watermelon:</h3><p> High in water content hydrates the skin, while vitamins A and C help repair and protect against sun damage.</p>
                  
                  <br/>
                  <h4>Vegetables play a crucial role in maintaining healthy skin, due to their abundance od vitamins, minerals and anti-oxidants.<br/>Here are 5 vegetables known for their skin-nourishing properties.</h4>
                  
                    <h3>Spinach: </h3><p>Rich in vitamina A, C and E, as well as antibiotics, spinach helps to repar and protect the skin from damage caused by UV rays and environmental polutants.</p>
                    <h3>Sweet potatoes:</h3><p> Loaded with beta-carotene, sweet potatoes are converted into vitaminA in the body, which protects skin cell turnover and contributes to a glowing complexion.</p>
                    <h3>Bell papers:</h3><p> High in vitamin C, bell papers help boost collagen production, which maintains skin elasticity premature aging.</p>
                    <h3>Carrots: </h3><p>Another excellent source of beta-carotene, carrots contribute to skin health by promoting cell renewal and protected against sun damage.</p>
                    <h3>Broccoli:</h3><p> Packed with Vitamin A, C and K, as well as anti-biotics like sulphoraphane, broccoli helps detoxify the skin and commbat inflammation, leading to clearer complexion.</p>
                  
                </div>

                <h3>-Maintain a diet rich in omega-3 fatty acids for skin nourishments.</h3>
                <p>Omega-3 fatty acids are type of polyunsaturated fat that are essential for overallhealth, including skin health. They primarily are found in fatty fish, certain nuts, seeds,<br/> and plant oils.Omega-3 fatty oils are crucial in maintaining the skin's lipid barrier which helps retain moisture and keep out irritants and toxins.</p>
                <br/>
                  <h4>The two main types of omega-3 fatty acids beneficial for skin health are:</h4>
                  
                    <h3>Eicosapentaenoic acid(EPA):</h3><p> EPA helps regulate oil production, reduce inflammation, and protect against sun damage. It can be found in fatty fish such as salmon, mackrel, and sardines.</p>
                    <h3>Docosahexaenoic acid(DHA):</h3><p> DHA is essential for maintaining the structural integrity  of skin cell membranes, promoting elasticity and smoothness like EPA, it is ambundant in fatty fish.</p>
                  
                  <h5>
                    Both EPA nad DHA are important for maintaining healthy skin, so incorporating sources of omega-3 fatty acids into your diet, such as fish or plant-based alternatives like flaxseeds, chia seeds, and walnuts, can benefit your skin's overall health and appearance.
                  </h5>
                  <br/>
                  
                  </div>
                </section>

                <br/>

                  <section>
                  <div className="service_card2 ">
                      <h1><span>3.Weight Loss Tips</span></h1>
                      <h3>*Lets Dive Into Our Simple Weight Loss Tips.</h3>

                      <div id="weight"><img src="src/Images//weightloss.webp" alt="image"/></div>
                      <h5>
                        Embarking on a weight loss journey can be both exciting and challenging. Whether you're looking to shed a few pounds for health reasons or to feel more confident in your ownskin, it's important to approach weight loss in a sustainable and healthy way. With that in mind, here are some practical tips to help you achieve your weight loss goals and improve your overall wellbeing.
                      </h5>
                      
                        <h3>-Stay Hydrated:</h3><p> Drink plenty of water throughout the day to stay hydrated and keep your metabolism functioning properly.</p>
                        <h3>-Eat Mindfully:</h3><p> Pay attention toyour body's hunger and fullness cues, which will help you to prevent overeating and allow you to eat only when your body truly needs nourishment. Also avoid distractions while eating.</p>
                        <h3>-Include Protein:</h3><p> Incorporate lean protein sources into your meals to help you feel ful and satisfied, for example; skinless chicken breast, turkey breast, fish, eggs, tofu, greek yogurt,lean beef, cottage cheese among others.</p>
                        <h3>-Choose Whole foods:</h3><p> Opt for whole, unprocessed foods like fruits, vegetables, whole grains, and lean proteins instead of processed and packaged foods.</p>
                        <h3>-Portion Control:</h3><p> Be mindful of portion sizes to avoid overeating, and use smaller plates and bowls to help control portions.</p>
                        <h3>-Regular Exercise:</h3><p> Aim for atleast 30 minutes of moderate-intensity exercise most days of the week to help burn calories and improve overall health.</p>
                        <h3>-Get Adequate Sleep:</h3><p> Aim for 7-9 hours of sleep per night, as inadequate sleep can disrupt hunger hormones and lead to weight gain.</p>
                        <h3>-Manage Stress: </h3><p>Practice stress-reducing techniques such as meditation, deep breathing, or silence to help prevent emotional eating and promote weight loss.</p>
                        <h3>-Limit Sugary Beverages:</h3><p> Cut back on sugary drinks like soda, and juice, opting for water, herbal tea, or sparkling water instead.</p>
                        <h3>-Be Patient and Consistent: </h3><p>Rememeber that weight loss takes time and consistency, so be patient with yourself and stay committed to your healthy habits.</p>
                      
                    </div>
                  </section>

                  <section>
                  <div className="service_card2 ">
                      <h1><span><b>4. Weight Gain Tips</b></span></h1>

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
                  <div className="service_card2 ">
                      <h1><span><b>5. Hydration Tips</b></span></h1>

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
                  <div className="service_card2 ">
                      <h1><span><b>6. Tips For Younger Looks</b></span></h1>

                      <div id="younger"><img src="src/Images//younger.jpg" alt="image"/></div>

                      <h3>-Stay Hydrated:</h3>
                      <p>
                        This keeps your skin smooth and hydrated, as well as can reduce the appearance of wrinkles.
                      </p>
                      <h3>-Eat a Balanced Diet:</h3>
                      <p>
                        Focus on fruits, vegies, lean proteins, and healthy fats to nourish your body and skin.
                      </p>
                      <h3>-Protect Your Skin:</h3>
                      <p>
                        Use sunscreens daily to prevent sun damage, which can accelerate aging.
                      </p>
                      <h3>-Get Enough Sleep:</h3>
                      <p>
                        Aim for 7-9 hours of quality sleep each night to allow your body time to repair and rejuvenate.
                      </p>
                      <h3>-Exercise regularly:</h3>
                      <p>
                        Regular physical activity promotes circulation and can give your skin a healthy glow.
                      </p>
                      <h3>-Managing Stress:</h3>
                      <p>
                        Chronic stress can accelerate aging, so find healthy ways to manage  stress, such as meditation.
                      </p>
                      <h3>-Moisturize:</h3>
                      <p>
                        Use a moisturizer suited to your skin type to keep it hydrated and supple.
                      </p>
                      <h3>-Avoid Smoking and Excessive Alcohol:</h3>
                      <p>
                        Smoking and excessive alcohol cosumption can accelerate aging and damage your skin.
                      </p>
                      <h3>-Stay Active Mentally:</h3>
                      <p>
                        Engage in activities that stimulate your mind, such as reading, puzzles, or learning something new.
                      </p>
                      <h3>-Consider Skincare Products:</h3>
                      <p>
                        Look for products containing ingredients like retinoid, vitamin C, and hyaluronic acid, which can help reduce wrinkles and improve skin texture. 
                      </p>
                    </div>
                  </section>

                  <section>
                  <div className="service_card2 ">
                      <h1><span><b>7. Hair Growth Tips</b></span></h1>

                      <div id="hair"><img src="src/Images//hairgrowth.webp" alt="image"/></div>
                      <h5>Practice these tips, and you will have results of stronger, thicker, longer and healthier hair.</h5>
                      <h3>-Healthy Diet:</h3>
                      <p>
                        Ensure your diet includes protein, vitamins (especially A, D and E), and minerals like iron and zinc, which are essential for hair growth.
                      </p>
                      <h3>-Scalp Massage:</h3>
                      <p>
                        Massaging your scalp regularly can increase blood flow to hair follicles, promoting hair growth.
                      </p>
                      <h3>-Proper Hair Care:</h3>
                      <p>
                        Avoid excessive heat styling and harsh chemicals, and use a gentle shampoo and conditioner suitable for your hair type.
                      </p>
                      <h3>-Trim Regularly:</h3>
                      <p>
                        Trimming your hair regularly helps prevent split ends, which is crucial for healthy hair growth.
                      </p>
                      <h3>-Avoid Stress:</h3>
                      <p>
                        Stress can contribute to hair loss, so practice stress-reducing activities like meditation.
                      </p>
                      <h3>-Supplements:</h3>
                      <p>
                        Consider taking supplements like biotin, collagen, or omega-3 fatty acids, which are known to support hair health.
                      </p>
                      <h3>-Protect Your Hair:</h3>
                      <p>
                        Protect your hair from environmental damage by wearing hats or scarves when exposed to harsh weather conditions.
                      </p>
                      <h5>Remember, consistent care and patience are key when it comes to promoting hair growth.</h5>
                    </div>

                  </section>

                  <section>
                  <div className="service_card2 ">
                      <h1><span><b>8.Energy Suplememts</b></span></h1>

                      <div id="energy"><img src="src/Images//energy.webp" alt="image"/></div>
                      <h5>There are so many energy supplements available, such as:</h5>
                      <h3>-Caffeine Pills:</h3>
                      <p>
                        Provide a quick energy boost similar to coffee.
                      </p>
                      <h3>-B Vitamins:</h3>
                      <p>
                        Help convert food into energy.
                      </p>
                      <h3>-Creatine:</h3>
                      <p>
                        Commonly used by athletes to improve performance and energy levels.
                      </p>
                      <h3>-Adoptogens:</h3>
                      <p>
                        Herbs like ginseng and rhodila are believed to help the body adapt to stress and boost energy. 
                      </p>
                      <h3>-Coenzyme Q10:</h3>
                      <p>
                        Helps Produce energy in cells.
                      </p>
                      <h3>-Iron:</h3>
                      <p>
                        Deficiency can lead to fatigue, s supplementing can increase energy levels, especially for those with low iron levels.
                      </p>
                      <h3>-Ashwagandha:</h3>
                      <p>
                        An daptogenic herb that may help reduce stress and boost energy levels.
                      </p>
                      <h3>-Rhodiola Rosea:</h3>
                      <p>
                        Another adaptogenic herb that may improve energy levels and reduce fatigue.
                      </p>
                      <h5>Rememeber to consult with a healthcare professional before starting any new supplement regimen.</h5>
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


