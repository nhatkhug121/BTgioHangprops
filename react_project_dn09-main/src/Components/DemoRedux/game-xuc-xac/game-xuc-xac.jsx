import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import {
  BanChonCreator,
  playGameCreator,
} from "../../../redux/reducer/game-xuc-xac/creator";
class GameXucXac extends Component {
  render() {
    console.log(this.props);
    const { banChon, soBanChoi, soBanThang, mangXucXac } = this.props;
    return (
      <div className="game-xuc-xac">
        <div className="game-xx-container">
          <h1>Game Đỗ Xúc Xắc</h1>
          <div className="d-flex justify-content-between ">
            <button
              onClick={() => {
                const action = BanChonCreator("tai");
                this.props.dispatch(action);
              }}
              className="btn-xx"
            >
              Taì
            </button>
            <div>
              {mangXucXac.map((img, index) => {
                return <img key={img} src={img} alt="xuc xac" />;
              })}
            </div>
            <button
              onClick={() => {
                const action = BanChonCreator("xiu");
                this.props.dispatch(action);
              }}
              className="btn-xx"
            >
              Xỉu
            </button>
          </div>

          <div className="ket-qua">
            <p>
              Bạn Chọn: <span>{banChon === "tai" ? "Tài" : "Xỉu"}</span>
            </p>
            <p>
              Số Bàn Thắng: <span>{soBanThang}</span>
            </p>
            <p>
              Tổng Số Bàn Chơi: <span>{soBanChoi}</span>
            </p>
            <button
              onClick={() => {
                this.props.dispatch(playGameCreator());
              }}
              className="play-game btn btn-success"
            >
              playGame
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return { ...rootReducer.gameXucXacReducer };
};
const mapDispatchToProps = () => {};
export default connect(mapStateToProps)(GameXucXac);
