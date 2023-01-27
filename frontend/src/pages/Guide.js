import CardCountry from "../components/CardCountry";

const Guide = () => {
    return(
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
    )
}
export default Guide;