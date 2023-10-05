import { Topic } from "../../interfaces/topic";
import { TopicListItem } from "../TopicListITem";
import { ListContainer } from "./style";


interface TopicsListProps {
    topics: Topic[];
    changeActive: (topic: Topic) => void;
    likeTopic: (topic: Topic) => void;
    dislikeTopic: (topic: Topic) => void;
}


export function TopicList({topics, changeActive, likeTopic, dislikeTopic}: TopicsListProps) {
    return (
        <ListContainer style={{}}>
            {topics.map((topic) => (
          <TopicListItem
            key={topic.id}
            topic={topic}
            changeActive={changeActive}
            likeTopic={likeTopic}
            dislikeTopic={dislikeTopic}
          />
        ))}
        </ListContainer>
    )
}