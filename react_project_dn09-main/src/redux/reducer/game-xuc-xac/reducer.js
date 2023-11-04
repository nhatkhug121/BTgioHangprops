import { GameXucXac } from "./const";

const STATE_DEFAULT = {
  banChon: "tai",
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
      "./img/xucxac/1.png",
      "./img/xucxac/2.png",
      "./img/xucxac/3.png",
    ],
};
export const gameXucXacReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case GameXucXac.BanChon:
      // console.log(action.payload);
      state.banChon = action.payload;
      return { ...state };
    case GameXucXac.PlayGame: {
      state.soBanChoi += 1;
      const newMangXucXac = [];
      let tongDiem = 0;
      for (let i = 0; i < 3; i++) {
        const diem = Math.floor(Math.random() * 6 + 1);
        const hinhAnh = `./img/xucxac/${diem}.png`;
        tongDiem += diem;
        newMangXucXac.push(hinhAnh);
      }
      state.mangXucXac = newMangXucXac;
      if (
        (state.banChon === "tai" && tongDiem >= 11) ||
        (state.banChon === "xiu" && tongDiem <= 10)
      ) {
        state.soBanThang += 1;
      }
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
