import logo from "./logo.svg";
import "./App.css";
import HeaderRCC from "./Components/HeaderRCC";
import CardProduct from "./Components/CardProduct";
import HomeComponent from "./Components/BTComponent/HomeComponent";
import CardComponent from "./Components/DataBinding/CardComponent";
import StyleComponent from "./Components/Style/StyleComponent";
import StyleComponent2 from "./Components/Style/StyleComponent2";
import StateComponent from "./Components/StateComponent/StateComponent";
import FontSize from "./Components/StateComponent/FontSize";
import ChangeColorHouse from "./Components/StateComponent/ChangeColorHouse";
import XemChiTietSP from "./Components/Props/XemChiTietSP";
import BTGioHang from "./Components/BTGioHang/BTGioHang";
import CountRedux from "./Components/DemoRedux/count-redux";
import ChangeColorBox from "./Components/DemoRedux/Change-color-box/change-color-box";
// import GameXucXac from "./Components/DemoRedux/game-xuc-xac/game-xuc-xac";
import ReactForm from "./Components/React-form/react-form";
import LifeCycle from "./Components/life-cycle";

// App : component chính, component cha, chứa các component con
function App() {
  return (
    <div>
      <LifeCycle />
      {/* <ReactForm /> */}
      {/* <GameXucXac /> */}
      {/* <ChangeColorBox /> */}
      {/* <CountRedux /> */}
      {/* <BTGioHang /> */}
      {/* <XemChiTietSP/> */}
      {/* <ChangeColorHouse /> */}
      {/* <FontSize /> */}
      {/* <StateComponent /> */}
      {/* <StyleComponent /> */}
      {/* <StyleComponent2 /> */}

      {/* <CardComponent/> */}
      {/* <HeaderRCC />
      <div className="row">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div> */}
      {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
