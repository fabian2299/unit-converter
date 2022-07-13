import type { Dispatch, SetStateAction } from "react";

interface Props {
  metric: string;
  unit: string;
  setResult: Dispatch<SetStateAction<string>>;
}
export const doConvert = ({ metric, unit, setResult }: Props) => {
  let convertion: string;
  switch (metric) {
    case "km":
      convertion = (+unit * 0.621371).toFixed(2);
      setResult(`${convertion} miles`);
      return;

    case "miles":
      convertion = (+unit * 1.60934).toFixed(2);
      setResult(`${convertion} km`);
      return;

    case "feet":
      convertion = (+unit * 0.3048).toFixed(2);
      setResult(`${convertion} meters`);
      return;

    case "meters":
      convertion = (+unit * 3.28084).toFixed(2);
      setResult(`${convertion} feet`);
      return;

    case "cm":
      convertion = (+unit * 0.393701).toFixed(2);
      setResult(`${convertion} inches`);
      return;

    case "inches":
      convertion = (+unit * 2.54).toFixed(2);
      setResult(`${convertion} cm`);
      return;
    default:
      setResult("");
      return;
  }
};
