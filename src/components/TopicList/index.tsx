import { useEffect } from "react";
import { useTopics } from "../../core/hooks/use_topics";
import { useTopicsDispatch } from "../../core/hooks/use_topics_dispatch";
import { Action, ActionType } from "../../core/reducers/topic_reducer";
import { TopicService } from "../../core/services/topic_service";
import { TopicListItem } from "../TopicListITem";
import { ListContainer } from "./style";

export function TopicList() {
  const dispatch = useTopicsDispatch() as React.Dispatch<Action>;
  const topics = useTopics();

  useEffect(() => {
    TopicService.getTopics().then((topics) => dispatch({ type: ActionType.Loaded, payload: { topics: topics } }));
  }, []);

  return (
    <ListContainer style={{}}>
      {topics!.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </ListContainer>
  );
}
