import './module.colors.css';

export default function Colors () {
  const backgroundImage = 'linear-gradient(to right, hsl(0, 0%, 10%) , hsl(0, 0%, 90%))';
  return (
    <main>
      <h2>Why this colors?</h2>

      The shortest answer is: Color Wheel.

      <div className="paragraph">
        This is a color wheel, with all colors on the rainbow.<br />
        <img src="img/wheel.png" />
      </div>

      <div className="paragraph">
        It's one of the many methods to choose and represent a color,
        so in hsl color space the angle on the wheel is used as hue, together with a saturation and a lightness value.<br />
        Example 1: <span style={{ background: 'hsl(0, 100%, 25%)', color: 'white' }}>Dark red</span> will be 0° hue on the wheel with 100% saturation and 25% lightness.<br />
        Example 2: <span style={{ background: 'hsl(60, 100%, 50%)', color: 'black' }}>Pure Yellow</span> will be 60° hue on the wheel with 100% saturation and 50% lightness.<br />
        Example 3: <span style={{ background: 'hsl(0, 100%, 75%)', color: 'black' }}>Rose</span> will be 0° hue on the wheel with 100% saturation and 75% lightness.<br />
        Example 4: <span style={{ background: 'hsl(240, 50%, 50%)', color: 'white' }}>Grey-Blue</span> will be 240° hue on the wheel with 50% saturation and 50% lightness.<br />
        Example 4: <span style={{ background: 'white', color: 'black' }}>White</span> will be any hue with any saturation and 100% lightness.<br />
        Example 5: <span style={{ background: 'black', color: 'white' }}>Black</span> will be any hue with any saturation and 0% lightness.<br />
        Example 5: <span style={{ backgroundImage, color: 'black' }}>Shapes of gray</span> will be any hue with 0% saturation and the respective lightness
        (between 10% and 90% in this example).
      </div>

      <div className="paragraph">
        The colors of the clock on this page are based on the position/direction on the color wheel,
        so a minute-hand will be yellow if it's facing to 45° (showing 2, meaning it's x:10).<br />
        Another example: On 8:08:08 all hands will be blue, because they're facing to 225°.
      </div>

      <div className="paragraph">
        Here is an animation, showing the relation between the clock and the color wheel.<br />
        <div id="animation">
          <img src="img/clock.png" />
          <img id="wheel" src="img/wheel.png" />
        </div>
      </div>

      <div className="paragraph">
        To differentiate am and pm, the lighness is set as follows:<br />
        am &minus; <span style={{ color: 'hsl(0, 100%, 75%)' }}>milky</span> <span style={{ color: 'hsl(240, 100%, 75%)' }}>colors</span> (75% lightness)<br />
        pm &minus; <span style={{ color: 'hsl(0, 100%, 50%)' }}>pure</span> <span style={{ color: 'hsl(240, 100%, 50%)' }}>colors</span> (50% lightness)
      </div>

      <div className="paragraph">
        The saturation is always set to 100%.
      </div>

      <div className="paragraph">
        A few words about the color theme on this page.<br />
        All theme-colors have 224° hue with various saturation and lightness values.<br />
        This is one of various methods to reach a unified design.
      </div>
    </main>
  );
}
