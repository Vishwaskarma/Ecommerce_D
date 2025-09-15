import Image from "next/image";
import Banner from "./Banner/Banner";
import WatchSlider from "./Banner/Banner";
import NewArrival from "./component/NewArrivel";
import OurBrand from "./component/ourBrand";
import DairyProductsSlider from "./DairyProduct/DairyProductSlider";
import DairyBanner from './DairyProduct/DairyBanner'
import ElectronicsSlider from "./Electronices/electronices";
import ElectronicsBanner from "./Electronices/electronicesBanner";
import SnacksSlider from "./Snacks/SnakeComponent";
import SnacksBanner from "./Snacks/SnacksBanner";
import TopCategoriesPage from "./categories/page";



export default function Home() {
  return (
    <>
    <WatchSlider/>
    {/* <NewArrival/> */}
    <TopCategoriesPage/>
    <ElectronicsSlider/>
    <ElectronicsBanner/>
    <DairyProductsSlider />
    <DairyBanner/>
    <SnacksSlider/>
    <SnacksBanner/>
    {/* <OurBrand/> */}
   </>
  );
}