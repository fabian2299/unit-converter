import { useState } from "react";
import ConverterBox from "../components/ConverterBox";
import ConvertionList from "../components/ConvertionList";
import { IConvert } from "../types/index";

export default function Home() {
  const [metric, setMetric] = useState("");
  const [unit, setUnit] = useState("");
  const [result, setResult] = useState("");
  const [convert, setConvert] = useState({
    metric: "",
    unit: "",
    result: "",
  });
  const [convertList, setConvertList] = useState<IConvert[] | []>(() => {
    if (typeof window !== "undefined") {
      const localStorageConvertList = localStorage.getItem("convertList");
      if (localStorageConvertList) {
        return JSON.parse(localStorageConvertList);
      }
    }
    return [];
  });

  return (
    <div>
      <ConverterBox
        metric={metric}
        setMetric={setMetric}
        unit={unit}
        setUnit={setUnit}
        result={result}
        setResult={setResult}
        convert={convert}
        setConvert={setConvert}
        convertList={convertList}
        setConvertList={setConvertList}
      />

      <ConvertionList
        convertList={convertList}
        setConvertList={setConvertList}
      />
    </div>
  );
}
