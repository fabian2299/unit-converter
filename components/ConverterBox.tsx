import { HeartIcon, SwitchHorizontalIcon } from "@heroicons/react/outline";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import styled from "styled-components";
import { IConvert } from "../types/index";
import { doConvert } from "../utils/index";

interface Props {
  metric: string;
  setMetric: Dispatch<SetStateAction<string>>;
  unit: string;
  setUnit: Dispatch<SetStateAction<string>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  convert: IConvert;
  setConvert: Dispatch<SetStateAction<IConvert>>;
  convertList: [] | IConvert[];
  setConvertList: Dispatch<SetStateAction<[] | IConvert[]>>;
}

export default function ConverterBox({
  metric,
  setMetric,
  unit,
  setUnit,
  result,
  setResult,
  convert,
  setConvert,
  convertList,
  setConvertList,
}: Props) {
  const handleClickIcon = () => {
    setConvert({
      metric,
      unit,
      result,
    });
  };

  useEffect(() => {
    if (convert.metric && convert.unit && convert.result) {
      setConvertList([...convertList, convert]);
      setConvert({
        metric: "",
        unit: "",
        result: "",
      });
      setResult("");
      setUnit("");
    }
  }, [convert, convertList, setConvert, setConvertList, setResult, setUnit]);

  const saveInLocalStorage = useCallback(() => {
    localStorage.setItem("convertList", JSON.stringify(convertList));
  }, [convertList]);

  useEffect(() => {
    saveInLocalStorage();
  }, [saveInLocalStorage]);

  const handleChangeMetric = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMetric(e.target.value);
  };

  const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value);
  };

  const handleRevertMetric = () => {
    const newMetric = result.split(" ")[1];
    setMetric(newMetric);
  };

  useEffect(() => {
    doConvert({ metric, unit, setResult });
  }, [metric, unit, setResult]);

  return (
    <Section>
      <Container>
        <Title>convert</Title>
        <MenuContainer>
          <FlexInputs>
            <SelectMenu
              name="convert"
              id="convert"
              onChange={handleChangeMetric}
            >
              <option value="">Select metric</option>
              <option value="km">km → miles</option>
              <option value="miles">miles → km</option>
              <option value="feet">feet → meters</option>
              <option value="meters">meters → feet</option>
              <option value="cm">cm → inches</option>
              <option value="inches">inches → cm</option>
            </SelectMenu>
            <SelectMenuIcon onClick={handleRevertMetric} />
          </FlexInputs>

          <FlexInputs>
            <Unit
              type="number"
              value={unit}
              id="result"
              onChange={handleChangeUnit}
            />
            <label htmlFor="result">{metric}</label>
          </FlexInputs>
        </MenuContainer>

        <ResultContainer>
          <Icon onClick={handleClickIcon} />
          <Result>{result}</Result>
        </ResultContainer>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  margin: 20px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Container = styled.div`
  background-color: #2e0039;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  border-radius: 21px;
  max-width: 714px;
  width: 100%;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
`;

const FlexInputs = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 85%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 70px;
  }
`;

const SelectMenu = styled.select`
  border: none;
  border-bottom: white 1px solid;
  background-color: transparent;
  margin-right: 10px;
  color: white;
  outline: none;
  width: 100%;
`;

const Unit = styled.input`
  border: none;
  border-bottom: white 1px solid;
  background-color: transparent;
  margin-right: 10px;
  color: white;
  width: 100%;
  outline: none;
  text-align: right;
`;

const Title = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-family: "poppins";
  font-weight: 600;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
`;

const Icon = styled(HeartIcon)`
  width: 20px;
  cursor: pointer;
`;

const SelectMenuIcon = styled(SwitchHorizontalIcon)`
  width: 20px;
  cursor: pointer;
`;

const Result = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-family: "Poppins";
  font-weight: 700;
`;
