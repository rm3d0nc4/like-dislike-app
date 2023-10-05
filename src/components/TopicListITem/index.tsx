import lock from "../../assets/icons/lock.svg";
import unlock from "../../assets/icons/unlock.svg";
import { Topic } from "../../interfaces/topic";
import { ChangeActiveButton, AuthorLabel, Tags, Tag, DateLabel, Description, Row, TopicItem } from "./style";
import { Voting } from "../Voting";

interface TopicListItemProps {
  topic: Topic;
  changeActive: (topic: Topic) => void;
  likeTopic: (topic: Topic) => void;
  dislikeTopic: (topic: Topic) => void;
}

export function TopicListItem({ topic, changeActive, likeTopic, dislikeTopic }: TopicListItemProps) {

  const onHandleChangeActive = () => {
    const response = prompt("Password")
    if(response === "123456")  {
      confirm(`Are you sure you want to ${topic.active ? "lock" : "unlock"} this topic?`);
      changeActive(topic);
    } else {
      alert("Wrong password!");
    }
  }

  return (
    <TopicItem>
      <Row>
        <AuthorLabel>@{topic.author.username}</AuthorLabel>
        <ChangeActiveButton onClick={onHandleChangeActive} style={{ backgroundColor: topic.active ? "#242D28" :"#302629"  }}>
          <img src={topic.active ? unlock : lock} alt="lock/unlock button" />
        </ChangeActiveButton>
      </Row>
      <Description>{topic.description}</Description>
      <Tags>
        {topic.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Row>
        <DateLabel>{new Date(topic.createdAt).toISOString().split("T")[0].split("-").reverse().join("/")}</DateLabel>
        <Voting topic={topic} likeTopic={likeTopic} dislikeTopic={dislikeTopic}/>
      </Row>
    </TopicItem>
  );
}
