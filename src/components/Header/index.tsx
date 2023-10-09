import { Button, HeaderContainer, HeaderContent, Title } from "./style";
import add from "../../assets/icons/add.svg";
import arrowDown from "../../assets/icons/arrow_down.svg";
import { useState } from "react";
import { TopicForm } from "../TopicForm";

export function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onHandleOpenForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Title>Topics</Title>
          <Button onClick={onHandleOpenForm}>
            <img src={isFormOpen ? arrowDown : add} alt="add" />
          </Button>
        </HeaderContent>
        {isFormOpen && <TopicForm setFormIsOpen={setIsFormOpen} />}
      </HeaderContainer>
    </>
  );
}
