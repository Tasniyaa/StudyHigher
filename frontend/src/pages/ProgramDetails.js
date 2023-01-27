const ProgramDetails = (props) => {
    const cardVDetails=[ 
        { 
          _id: '1',
          logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
          subName:'ESL Program - ESOL',
          versityName:'DEA Canadian College, ',
          countryName:'Canada',
          onlineStatus:'Online',
          proType:'Undergraduate certificate',
          duration:'2 months',
          annualFee:'579 GBP',
          startDate: 'March, April, May, June, July, August, September, October, November, December, January, February',
          versityLink:'',
          details:''  
        },
        {
          _id: '2',
          logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
          subName:'University Pathway - UGP',
          versityName:'DEA Canadian College, ',
          countryName:'Canada',
          onlineStatus:'Online',
          proType:'Undergraduate pathway',
          duration:'2 months',
          annualFee:'579 GBP',
          startDate: 'March, April, May, June, July, August, September, October, November, December, January, February',
          versityLink:'',
          details:''
        },
        { 
          _id: '3',
          logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
          subName:'REAL Intensive English - Cert',
          versityName:'Westcliff University, ',
          countryName:'USA ',
          onlineStatus:'Online',
          proType:'Undergraduate certificate',
          duration:'2 months',
          annualFee:'806 GBP',
          startDate: 'June',
          versityLink:'',
          details:''
        },
        {
          _id: '4',
          logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
          subName:'Biology - MSc',
          versityName:'Vrije Universiteit Brussel,',
          countryName:'Belgium',
          onlineStatus:'',
          proType:'Masters',
          duration:'2 years',
          annualFee:'844 GBP',
          startDate: 'September',
          versityLink:'',
          details:''
        },
    ]; 
    let url = window.location.href;
    const b = url.split("/").pop();
    const indiPro = cardVDetails.find((x) => x._id === b);
    return (
    <>
    <div class="card card-versity mx-4 p-3 my-3" >
        <div className="row">
          <div className="col-md-9 ">
              <div className="row">
              <img src={indiPro.logo} className="col-md-3" style={{width: "120px", height: "100px"}}></img>
                <div className="col-md-9 pt-2">
                  <h3 className="">{indiPro.subName}</h3>
                  <h5>{indiPro.versityName} {indiPro.countryName} {indiPro.onlineStatus}</h5>
                </div>
              </div>
              <div className="row mt-2 ">
                <div className="col-md-3 col-6 bg-light pt-2">
                  <p>Type</p>
                  <h5>{indiPro.proType}</h5>
                </div>
                <div className="col-md-3 col-6 bg-light pt-2">
                  <p>Duration</p>
                  <h5>{indiPro.duration}</h5>
                </div>
                <div className="col-md-3 col-6 bg-light pt-2">
                  <p>Annual tuition fee</p>
                  <h5>{indiPro.annualFee}</h5>
                </div>
                <div className="col-md-3 col-6 bg-light pt-2">
                  <p>Start date</p>
                  <h5>{indiPro.startDate}</h5>
                </div>
              </div>
          </div>
          <div className="col-md-3 d-md-flex align-items-center justify-content-center">
            <div class="d-grid gap-3 my-3">
              <button class="btn btn-primary py-3 px-5 text-nowrap" type="button">Visit program webpage</button>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
 export default ProgramDetails;