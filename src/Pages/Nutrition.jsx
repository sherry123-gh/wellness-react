import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Nutrition = () => {
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
      <div>
        <div className="color-b">
          <h1 id="welc">
            Welcome to your <span className="nut">Nutrition</span> plan🍇
          </h1>
          <p>Get ready for a sweet enriched balanced diet</p>
        </div>
        <div className="cont">
          <div>
            <h3 className="hs">NUTRITION</h3>
            <p className="txt">
              Nutrition is about eating a healthy and balanced diet. Food and
              drink provide the energy and nutrients you need to be healthy.
              Understanding these nutrition terms may make it easier for you to
              make better food choices.
            </p>
          </div>
        </div>
        <div>
          <h4 className="hs">CATEGORIES OF NUTRITION</h4>
          <p className="txt">
            Nutrients are normally divided into five categories: Water, protein,
            carbohydrates, minerals, and vitamins. Water is the main constituent
            of the body. Two‐thirds of the body is water, thus, an animal can
            live much longer without feed than water. Water helps the body
            digest food and carries nutrients to body tissues.
          </p>
        </div>
        <div>
          <h2 className="hs">
            7-Day Healthy and Balanced Meal Plan Ideas: Recipes & Prep
          </h2>
        </div>

        <div className="cont">
          <div>
            <img src="src/Images//img-1.avif" alt="image for diet" />
          </div>
          <div>
            <h3 className="hs">
              Why Nutrition is Important for a Healthy and Balanced Diet
            </h3>
            <p className="txt">
              A healthy, balanced diet looks different for each person, as
              nutrition needs vary based on gender, height, weight, activity
              level, and many more factors. When thinking about what is
              "healthy" and "balanced" for you, there are many considerations.
              Think about taste preferences, nutrition needs, cooking ability,
              medical conditions, budget, and more. Planning a daily menu isn't
              difficult as long as each meal and snack has some protein, fiber,
              complex carbohydrates, and a little bit of fat.1 USDA. 2020-2025
              Dietary Guidelines for Americans. You may want to plan
              approximately 100 to 250 calories for each snack and 300 to 600
              calories per meal; however, you may need more or less depending on
              your hunger levels and energy needs.
            </p>
          </div>
        </div>

        <div className="cont">
          <div className="back1">
            <h3 className="hs">
              <span className="clo">
                What to Eat for a Healthy Balanced Diet
              </span>
            </h3>
            <p>
              A healthy diet generally includes a combination of the following:
            </p>
            <ul>
              <li>
                <span className="subs">Vegetables:</span> Always a smart choice,
                aim to fill about half your plate with veggies. Add plenty of
                cruciferous veggies like broccoli, leafy greens, as well as
                colorful options like peppers.
              </li>
              <li>
                <span className="subs">Fruits:</span> Go for fresh fruit
                whenever possible and try a variety of colors. Berries, grapes,
                apples, and grapefruits make great choices.
              </li>
              <li>
                <span className="subs">Whole grains:</span> Eating grains in
                their whole form provides additional fiber and nutrients. This
                includes brown rice, oats, and 100% whole grain breads.
              </li>
              <li>
                <span className="subs">Lean protein:</span> High in protein and
                relatively low in fat, lean proteins include grilled chicken,
                ground turkey, and white fish.
              </li>
              <li>
                <span className="subs">Healthy fats:</span> Fatty fish, such as
                salmon and tuna, as well as nuts, such as walnuts, provide
                essential omega-3 fatty acids. Avocados are a great source of
                beneficial unsaturated fats.
              </li>
            </ul>
          </div>
          <div className="back">
            <div>
              <h3 className="hs">
                <span className="clo">
                  How to Meal Plan for a Healthy, Balanced Diet
                </span>
              </h3>
              <ul>
                <li>
                  Eating breakfast will help you start your day with plenty of
                  energy. Choose protein and fiber for your breakfast.
                </li>
                <li>
                  A mid-morning snack is totally optional. If you eat a larger
                  breakfast, you may not feel hungry until lunchtime. However,
                  if you're feeling a bit hungry and lunch is still two or three
                  hours away, a light mid-morning snack provide satiety.
                </li>
                <li>
                  Lunch is often something you eat at work or school, so it's a
                  great time to pack a sandwich or leftovers that you can heat
                  and eat.
                </li>
                <li>
                  A mid-afternoon snack is also optional. Prioritize protein,
                  healthy fat, and fiber to keep you going until dinnertime.
                </li>
                <li>
                  Dinner can sometimes feel like a feat to cook and prep, but it
                  can be very simple. Consider stocking up on meal prep
                  containers so you can chop and store vegetables ahead of time,
                  as well as easily reheat food. For an easy trick, mentally
                  divide your plate into four quarters. One-quarter is for your
                  meat or protein source, one-quarter is for a complex
                  carbohydrate, and the last two quarters are for green and
                  colorful vegetables or a green salad.
                </li>
                <li>
                  A complex carbohydrate-rich evening snack may help you sleep.
                  Avoid snacking on high sugar items before bedtime.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className="head7">7-Day meal plan</h3>
        <div className="day1-2">
          <div className="day1">
            <div>
              <h3>Day 1</h3>
              <div>
                <h4>Breakfast</h4>
                <ul>
                  <li>One grapefruit</li>
                  <li>Two poached eggs (or fried in a non-stick pan)</li>
                  <li>One slice 100% whole wheat toast</li>
                </ul>
                <p>
                  Macronutrients: approximately 327 calories, 18 grams protein,
                  41 grams carbohydrates, and 11 grams fat
                </p>
                <h4>Snack</h4>
                <ul>
                  <li>One banana</li>
                  <li>1 cup plain yogurt with 1 tablespoon honey</li>
                </ul>
                <p>
                  Macronutrients: 324 calories, 14 grams protein, 62 grams
                  carbohydrates, 4 grams fat
                </p>
                <h4>Lunch</h4>
                <ul>
                  <li>6 ounces grilled chicken breast</li>
                  <li>
                    Large garden salad (3 cups mixed greens with 1 cup cherry
                    tomatoes, 1/4 avocado, topped with 2 tablespoons balsamic
                    vinaigrette)
                  </li>
                  <li>
                    Macronutrients: 396 calories, 41 grams protein, 18 grams
                    carbohydrates, 18 grams fat
                  </li>
                </ul>
                <h4>Snack</h4>
                <ul>
                  <li>1 cup (about 10) baby carrots</li>
                  <li>3 tablespoons hummus</li>
                  <li>1/2 piece of pita bread</li>
                </ul>
                <p>
                  Macronutrients: 192 calories, 7 grams protein, 31 grams
                  carbohydrates, 5 grams fat
                </p>
                <h4>Dinner</h4>
                <ul>
                  <li>1 cup steamed broccoli</li>
                  <li>1 cup of brown rice</li>
                  <li>Halibut (4-ounce portion)</li>
                </ul>
                <p>
                  Macronutrients: 399 calories, 34 grams protein, 57 grams
                  carbohydrates, 4 grams fat
                </p>
                <h4>Snack</h4>
                <ul>
                  <li>Two pitted Medjool dates</li>
                  <li>1 ounce 70% dark chocolate</li>
                </ul>
                <p>
                  Macronutrients: 302 calories, 3 grams protein, 49 grams
                  carbohydrates, 12 grams fat
                </p>
                <h5>
                  Daily Totals: 1,940 calories, 117 grams protein, 258 grams
                  carbohydrates, 55 grams fat
                </h5>
              </div>
            </div>
          </div>
          <div className="day2">
            <div>
              <h3>Day 2</h3>
              <div>
                <h4>Breakfast</h4>
                <ul>
                  <li>
                    One whole-wheat English muffin with 2 tablespoons peanut
                    butter
                  </li>
                  <li>One orange</li>
                </ul>
                <p>
                  Macronutrients: 391 calories with 14 grams protein, 52 grams
                  carbohydrates, and 17 grams fat
                </p>
                <h4>Snack</h4>
                <ul>
                  <li>
                    One 7-ounce container 2% plain Greek yogurt with 1/2 cup
                    blueberries
                  </li>
                </ul>
                <p>
                  Macronutrients: 188 calories, 20 grams protein, 19grams
                  carbohydrates, 4 grams fat
                </p>
                <h4>Lunch</h4>
                <ul>
                  <li>
                    Turkey sandwich (6 ounces of turkey breast meat, large
                    tomato slice, green lettuce, 1/4 avocado, and 2 teaspoons
                    honey mustard on two slices of whole wheat bread)
                  </li>
                </ul>
                <p>
                  Macronutrients: 540 calories, 59 grams protein, 34 grams
                  carbohydrates, 18 grams fat
                </p>
                <h4>Snack</h4>
                <ul>
                  <li>1 cup (about 30) grapes</li>
                </ul>
                <p>
                  Macronutrients: 100 calories, 1 grams protein, 27 grams
                  carbohydrates, 0 grams fat
                </p>
                <h4>Dinner</h4>
                <ul>
                  <li>5-ounce sirloin steak</li>
                  <li>One roasted sweet potato</li>
                  <li>
                    1 cup cooked spinach (made with 2 teaspoons olive oil)
                  </li>
                  <li>1 cup green beans</li>
                </ul>
                <p>
                  Macronutrients: 612 calories, 48 grams protein, 40 grams
                  carbohydrates, 30 grams fat
                </p>
                <h4>Snack</h4>
                <ul>
                  <li>1 cup plain popcorn</li>
                  <li>1 ounce 70% dark chocolate</li>
                </ul>
                <p>
                  Macronutrients: Approximately 214 calories, 2.9 grams protein,
                  17 grams carbohydrates, 3 grams fat
                </p>
                <h5>
                  Daily Totals: 2,045 calories, 145 grams protein, 188 grams
                  carbohydrates, 85 grams fat
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
          
    </div>
  );
};

export default Nutrition;
