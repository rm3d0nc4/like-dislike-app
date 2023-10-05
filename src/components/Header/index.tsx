import { Button, HeaderContainer, HeaderContent, Title } from "./style";
import add from "../../assets/icons/add.svg";
import arrowDown from "../../assets/icons/arrow_down.svg"
import { useState } from "react";
import { TopicForm } from "../TopicForm";
import { Topic } from "../../interfaces/topic";


interface HeaderProps {
    onCreateTopic: (topic: Topic) => void;
}

export function Header({onCreateTopic}: HeaderProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const onHandleOpenForm = () => {
        setIsFormOpen(!isFormOpen);
    }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
        <Title>Topics</Title>
        <Button onClick={onHandleOpenForm}>
          <img src={isFormOpen ? arrowDown : add} alt="add" />
        </Button>
        </HeaderContent>
        {isFormOpen && <TopicForm onCreateTopic={onCreateTopic} setFormIsOpen={setIsFormOpen}/>}
      </HeaderContainer>
    </>
  );
}
