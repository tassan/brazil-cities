import ImmediateRegion from "./immediate-region";
import Microregion from "./microregion";

interface County {
  id: number;
  name: string;
  microregion: Microregion;
  immediateRegion: ImmediateRegion;
}

export default County;
