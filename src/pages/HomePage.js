import { useEffect } from "react";
import Banner from "../components/Banner";
import FilterHome from "../components/FilterHome";
import RecommendationCar from "../components/RecommendationCar";
import Slider from "../components/Slider";


const HomePage = () => {

  useEffect(() => {
    document.title = "Home Shop"
  }, [])

  return (
    <>
      <Banner />
      <FilterHome />
      <Slider byFilter={"sport"} title={"Popular Car"} />
      <RecommendationCar />
    </>
  );
}

export default HomePage;