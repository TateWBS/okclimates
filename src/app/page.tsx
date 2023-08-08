import Image from 'next/image'
import Style from '@styles/Home.module.scss';

import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
const Home = () => {
  let offers = [
    {
      header: 'Maintenance',
      body: 'Starting at $180 with a free dryer vent cleaning for Residential customers. Add $70 for each additional system! Affordable Commercial Options Start at $75 a year!'
    },
    {
      header: 'Service',
      body: 'Home Investor, Home Buyer/Seller, or Realtor? This one is for you! $89 HVAC System Analysis. Know the Condition of the HVAC System Before you Buy or Sell!'
    },
    {
      header: 'Repairs',
      body: 'If anyone can fix it, it’s definitely US! Don’t forget second opinions are always free! '
    }
  ]
  return (
    <>
      <Navigation />
      <main className={Style.main}>

        {/* Article 1 */}
        <article className={Style.article1}>
          <div className={Style.heading}>
            <h1>Oklahoma Climate Solutions</h1>
            <h3>Heating &amp; Air Conditioning</h3>
          </div>
          <p>
            <strong>Residental &amp; Commercial</strong>
          </p>
          <br />
          <p>Hello Neighbor,</p>
          <p>
            We are your expert in providing the right indoor climate solutions for your
            home or business. Either a simple fix or a complex build; Call Oklahoma Climate Solutions!
          </p>
        </article>

        {/* Article 2 */}
        <article className={Style.article2}></article>

        {/* Article 3 */}
        <article className={Style.article3}>
          <h2>Our Core Values</h2>
          <p>Oklahoma Climate Solutions is a family owned and operated business. We believe family comes first, that’s why it’s our mission to keep yours comfortable. We are local to the area, born and raised in the Moore, Ok area. We take an oath to not forget our roots, we are nothing without our community. I graduated SouthMoore High School in 2014, and decided learning a trade was best for me. I love every single day of it. After entering the trade and becoming well-versed in all different aspects of the trade; installations, repair, maintenance, residential, commercial, After managing and leading crews dedicated to preforming excellent workmanship, I decided I wanted to go in business for myself. Thank you for being apart of this journey and thank you for choosing my family to keep your family comfortable!</p>
        </article>

        {/* Article 4 */}
        <article className={Style.article4}>
          <h2>Our Offers</h2>
          <div className='d-flex justify-content-center'>
            {offers.map((item, i) => {
              return (
                <div key={i}>
                  <p>{item.header}</p>
                  <p>{item.body}</p>
                </div>
              )
            })}
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <div>
              <p>Installations &amp; Free Estimates</p>
              <p>We are the OKC Metros Most Affordable Heating and Air Conditioning Replacement Company and with <span style={{ color: '#21beed' }}>free estimates</span> for maintenance, service, repairs and installations.
                We can't be beat! </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
export default Home;