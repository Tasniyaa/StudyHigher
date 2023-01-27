import Card from "./components/Card";
import CardCountry from "./components/CardCountry";
import './Home.css'

const Home = () => {
    const card1Details=[ 
        { cardImg:'https://img.icons8.com/officel/512/parse-resumes.png', cardTitle: 'CREATE PROFILE', pathName: '/register'},
        { cardImg:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-guidelines-virus-transmission-flaticons-lineal-color-flat-icons.png', cardTitle: 'BLOG', pathName: '/guide'},
        { cardImg:'https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-search-online-learning-wanicon-lineal-color-wanicon.png', cardTitle: 'SEARCH PROGRAM', pathName: '/programs'}    
    ];

    return(
    <div>
        <div className="Home">
            <div class="context">
                <h1>Study Higher</h1>
            </div>
            <div class="area">

                <ul class="circles m-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <section class="pattern">
                </section>
            </div>
        </div>
        <div className='three-cards d-flex justify-content-around align-items-end'>
              <div className="row">
                    {card1Details
                        .map((c)=>(
                        <div className="col-md-4 col-12">
                            <Card pathName={c.pathName} img={c.cardImg} title={c.cardTitle}/>
                            
                        </div> 
                    ))}
              </div>
              
        </div>
        <div class="row m-4">
          <div class="col-md-4">
          <CardCountry />
          </div>
          <div class="col-md-4">
          <CardCountry />
          </div>
          <div class="col-md-4">
          <CardCountry />
          </div>
        </div>

    </div>
    )
}
export default Home;