import { XIcon } from "@heroicons/react/outline";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { IConvert } from "../types/index";

interface Props {
  convertList: IConvert[] | [];
  setConvertList: React.Dispatch<React.SetStateAction<[] | IConvert[]>>;
}

export default function ConvertionList({ convertList, setConvertList }: Props) {
  const handleDelete = (index: number) => {
    const newConvertList = [...convertList];
    newConvertList.splice(index, 1);
    setConvertList(newConvertList);
  };

  const saveInLocalStorage = useCallback(() => {
    localStorage.setItem("convertList", JSON.stringify(convertList));
  }, [convertList]);

  useEffect(() => {
    saveInLocalStorage();
  }, [saveInLocalStorage]);

  return (
    <Section>
      <Container>
        <Title>saved</Title>
        <List>
          {convertList?.map((convert, index) => (
            <ListItem key={index}>
              {`${convert.unit} ${convert.metric}  → ${convert.result}`}
              <DeleteIcon onClick={() => handleDelete(index)} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Section>
  );
}

const List = styled.ul`
  display: grid;
  list-style: none;
  gap: 20px;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }
`;

const DeleteIcon = styled(XIcon)`
  width: 10px;
  height: 10px;
`;

const ListItem = styled.li`
  display: flex;
  padding: 0.5rem;
  max-width: 349px;
  height: 38px;
  background: #e3e3e3;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #676767;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 714px;
`;

const Section = styled.section`
  margin: 20px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
