import './home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Welcome to Organika</h1>
            <p>Organika is a place where you can find the best organic products for your health and wellness.</p>
            <img className='home-img' src={'/imgs/home.jpg'} alt="Organika" />
          </div>
        </div>
      </div>
    </div>
  )
}