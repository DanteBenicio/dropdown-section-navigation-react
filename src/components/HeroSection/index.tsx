import './styles.scss';

export default function HeroSection() {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="col-1">
          <h1 id="title">Make remote work</h1>
          <p className="description">
            Get your team in sync, no matter your location,\n
            Streamline
          </p>
          <button type="button" className="learn-more-button">Learn More</button>

          <div className="clients-grid">
            <img
              src="assets/client-databiz.svg"
              alt="client logo"
              title="databiz"
              aria-hidden="true"
            />
            <img
              src="assets/client-audiophile.svg"
              alt="client logo"
              title="audiophile"
              aria-hidden="true"
            />
            <img
              src="assets/client-meet.svg"
              alt="client logo"
              title="meet"
              aria-hidden="true"
            />
            <img
              src="assets/client-maker.svg"
              alt="client logo"
              title="maker"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="col-2">
          <img src="images/image-hero-desktop.png" alt="polygons with a man holding a laptop" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
