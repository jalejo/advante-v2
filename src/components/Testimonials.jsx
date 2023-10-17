import TestimonialList from '../jsons/testimonials.json' 
import StarRanking from './../images/svg/star-testimonial.svg'

const Testimonials = () => {
  return (
    <section className='testimonialWrapper '>
      <div className='containerFull'>
        <h3>The <span className='text-blue-violet-red'>trust and loyalty of our clients</span><br /> are fundamental to us.</h3>

        <div className='testimonial-bubbles-wrapper'>
          {
            TestimonialList.map((testimonial) => (
              <div className='testimonial-item' key={testimonial.id}>
                <div className='testimonial-bubble'>
                  { testimonial.message }
                  <div className='ranking-star-wrapper'>
                    <img className='ranking-star' src={ StarRanking } />
                    <img className='ranking-star' src={ StarRanking } />
                    <img className='ranking-star' src={ StarRanking } />
                    <img className='ranking-star' src={ StarRanking } />
                    <img className='ranking-star' src={ StarRanking } />
                  </div>

                </div>

                <h6>{ testimonial.name }</h6>
                <p>{ testimonial.company }</p>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  );
}

export default Testimonials;