import County from "./county";

interface District {
  id: number;
  name: string;
  county: County;
}

export default District;
