import './AboutUs.css'

export default function AboutUs() {
  return (
    <main className="about-us page">
      <header className="about-us__header">
        <h5>About Us</h5>
        <div className="title about-us__title">
          <h1>NFT ART</h1>
        </div>
      </header>
      <section className="about-us__content">
        <hr className="about-us__hr_first" />
        <div className="about-us__description">
          <p className="p1 description__first-paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className="p1">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>

          <div className="about-us__email email">
            <h5>Email</h5>
            <div className="email__link-content">
              <a className="email__link" href="mailto: nft@art.com">
                <h2>nft@art.com</h2>
              </a>
              <hr className="about-us__hr_second" />
            </div>
          </div>
        </div>
        <hr className="about-us__hr_third" />
        <hr className="about-us__hr_forth" />
      </section>
    </main>
  )
}
