import { Topic } from "../../interfaces/topic";
import { Button, SumVotes, VotingContainer } from "./style";
import like from "../../assets/icons/like.svg";
import dislike from "../../assets/icons/dislike.svg";

interface VotingProps {
    topic: Topic;
    likeTopic: (topic: Topic) => void;
    dislikeTopic: (topic: Topic) => void;
}


export function Voting({topic, likeTopic, dislikeTopic}: VotingProps) {
    const votingSum = topic.likes - topic.dislikes;

    const onHandleLikeTopic = () => {
        likeTopic(topic);
    }
    const onHandleDislikeTopic = () => {
        dislikeTopic(topic);
    }
    return (
        <VotingContainer>
            <Button disabled={!topic.active} onClick={onHandleLikeTopic}>
                <img src={like} alt="like"/>
                {topic.likes}
            </Button>
            <SumVotes style={{color: votingSum < 0 ? '#F0696A' : '#5AB95A' }}>{votingSum}</SumVotes>
            <Button disabled={!topic.active} onClick={onHandleDislikeTopic}>
                <img src={dislike} alt="dislike"/>
                {topic.dislikes}
            </Button>
        </VotingContainer>
    );
}