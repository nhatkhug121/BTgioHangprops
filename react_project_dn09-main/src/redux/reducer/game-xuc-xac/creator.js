import gameXucXac from "../../../Components/DemoRedux/game-xuc-xac/game-xuc-xac";
import { GameXucXac } from "./const";
export const BanChonCreator = (payload) => {
  return {
    type: GameXucXac.BanChon,
    payload,
  };
};
export const playGameCreator = (payload) => ({
  type: GameXucXac.PlayGame,
  payload,
});
