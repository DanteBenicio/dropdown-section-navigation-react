import './styles.scss';

export default function HeroSection() {
  return (
    <section>
      <div>
        <div className="col-1">
          <h1 id="title">Make remote work</h1>
          <p className="description">
            Get your team in sync, no matter your location,\n
            Streamline
          </p>
          <button type="button" className="learn-more-button">Learn More</button>
        </div>

        <div className="col-2">
          <img src="images/image-hero-desktop.png" alt="polygons with a man holding a laptop" />
        </div>
      </div>
    </section>
  );
}
