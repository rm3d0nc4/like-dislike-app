import lock from "../../assets/icons/lock.svg";
import unlock from "../../assets/icons/unlock.svg";
import { Topic } from "../../core/interfaces/topic";
import { ChangeActiveButton, AuthorLabel, Tags, Tag, DateLabel, Description, Row, TopicItem } from "./style";
import { Voting } from "../Voting";
import { useTopicsDispatch } from "../../core/hooks/use_topics_dispatch";
import { Action, ActionType } from "../../core/reducers/topic_reducer";
import { TopicService } from "../../core/services/topic_service";

interface TopicListItemProps {
  topic: Topic;
}

export function TopicListItem({ topic }: TopicListItemProps) {
  const dispatch = useTopicsDispatch() as React.Dispatch<Action>;
  const {updateTopic} = TopicService;
  
  const onHandleChangeActive = () => {
    const response = prompt("Password");
    if (response === "123456") {
      confirm(`Are you sure you want to ${topic.active ? "lock" : "unlock"} this topic?`);
      topic.active = !topic.active;
      updateTopic(topic).then((topic) => dispatch({ type: ActionType.Changed, payload: { topic } }));
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <TopicItem>
      <Row>
        <AuthorLabel>@{topic.author.username}</AuthorLabel>
        <ChangeActiveButton onClick={onHandleChangeActive} style={{ backgroundColor: topic.active ? "#242D28" : "#302629" }}>
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
        <Voting topic={topic} />
      </Row>
    </TopicItem>
  );
}
