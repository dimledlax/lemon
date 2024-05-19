import image1 from "../../assets/Testimonials1.jpg"
import image2 from "../../assets/Testimonials2.jpg"
import image3 from "../../assets/Testimonials3.jpg"
import image4 from "../../assets/Testimonials4.jpg"
import TestimonialsCard from "../cards/TestimonialsCard"

export default function TestimonialsSection() {
  const testimItem1 = {
    name: 'Sara Lopez',
    avatar: <img src={image1} alt="Sara Lopez avatar" className="testimonialsImage"/>,
    nickname: 'Sara72',
    review: '"Such a chilled out atmosphere - love it!"',
  }
  const testimItem2 = {
    name: 'Jon Do',
    avatar: <img src={image2} alt="Jon Do avatar" className="testimonialsImage"/>,
    nickname: 'Johnny_Utah',
    review: '“We had such a great time celebrating my grandmothers bitthday!”',
  }
  const testimItem3 = {
    name: 'Jane Lee',
    avatar: <img src={image3} alt="Jane Lee avatar" className="testimonialsImage"/>,
    nickname: 'Leo78',
    review: '“Seriously cannot stop thinking about the Turkish Mac and Cheese!!”',
  }
  const testimItem4 = {
    name: 'Simon Powels',
    avatar: <img src={image4} alt="Simon Powels avatar" className="testimonialsImage"/>,
    nickname: 'Simon61',
    review: '“Best Feta Salad in town. Flawless everytime!”',
  }

  return (
      <div className="testimonials">
        <div className="testimonialsContainer">
          <h2>Testimonials</h2>
          <div className="testimList">
            <TestimonialsCard { ...testimItem1 } />
            <TestimonialsCard { ...testimItem2 } />
            <TestimonialsCard { ...testimItem3 } />
            <TestimonialsCard { ...testimItem4 } />
          </div>
        </div>
      </div>
  )
}