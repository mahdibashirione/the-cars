import Banner from "../components/Banner";
import FilterHome from "../components/FilterHome";
import RecommendationCar from "../components/RecommendationCar";
import Slider from "../components/Slider";


const HomePage = () => {
  return (
    <>
      <Banner />
      <FilterHome />
      <Slider />
      <RecommendationCar />
    </>
  );
}

export default HomePage;