import { Topic } from "../../core/interfaces/topic";
import { Button, SumVotes, VotingContainer } from "./style";
import like from "../../assets/icons/like.svg";
import dislike from "../../assets/icons/dislike.svg";
import { Action, ActionType } from "../../core/reducers/topic_reducer";
import { useTopicsDispatch } from "../../core/hooks/use_topics_dispatch";
import { TopicService } from "../../core/services/topic_service";

interface VotingProps {
  topic: Topic;
}

export function Voting({ topic }: VotingProps) {
  const dispatch = useTopicsDispatch() as React.Dispatch<Action>;
  const {updateTopic} = TopicService;

  const votingSum = topic.likes - topic.dislikes;

  const onHandleLikeTopic = () => {
    topic.likes += 1;
    updateTopic(topic).then((topic) => dispatch({ type: ActionType.Changed, payload: { topic } }));
  };
  const onHandleDislikeTopic = () => {
    topic.likes += 1;
    updateTopic(topic).then((topic) => dispatch({ type: ActionType.Changed, payload: { topic } }));
  };
  return (
    <VotingContainer>
      <Button disabled={!topic.active} onClick={onHandleLikeTopic}>
        <img src={like} alt="like" />
        {topic.likes}
      </Button>
      <SumVotes style={{ color: votingSum < 0 ? "#F0696A" : "#5AB95A" }}>{votingSum}</SumVotes>
      <Button disabled={!topic.active} onClick={onHandleDislikeTopic}>
        <img src={dislike} alt="dislike" />
        {topic.dislikes}
      </Button>
    </VotingContainer>
  );
}
