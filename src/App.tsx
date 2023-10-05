import { useEffect, useReducer } from "react";
import "./App.css";
import { Topic } from "./interfaces/topic";
import { Header } from "./components/Header";
import { TopicList } from "./components/TopicList";
import { ActionType, topicStateReducer } from "./reducers/topic_reducer";
import { TopicService } from "./providers/topic_service";
import { Toaster } from "react-hot-toast";

function App() {
  const [state, dispatch] = useReducer(topicStateReducer, { topics: [] });

  useEffect(() => {
    (async () => {
      const topics = await TopicService.getTopics();
      dispatch({ type: ActionType.Loaded, payload: { topics: topics } });
    })();
  }, []);

  const onHandleChangeActive = async (topic: Topic) => {
    topic.active = !topic.active;
    const updatedTopic = await TopicService.updateTopic(topic);
    dispatch({ type: ActionType.Changed, payload: { topic: updatedTopic } });
  };

  const onHandleLikeTopic = async (topic: Topic) => {
    topic.likes += 1;
    const updatedTopic = await TopicService.updateTopic(topic);
    dispatch({ type: ActionType.Changed, payload: { topic: updatedTopic } });
  };

  const onHandleDislikeTopic = async (topic: Topic) => {
    topic.dislikes += 1;
    const updatedTopic = await TopicService.updateTopic(topic);
    dispatch({ type: ActionType.Changed, payload: { topic: updatedTopic } });
  };

  const onCreateTopic = async (topic: Topic) => {
    const addedTopic = await TopicService.addTopic(topic);
      dispatch({ type: ActionType.Added, payload: { topic: addedTopic } });
  };

  return (
    <>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <Header onCreateTopic={onCreateTopic} />
      <TopicList
        topics={state.topics}
        changeActive={onHandleChangeActive}
        likeTopic={onHandleLikeTopic}
        dislikeTopic={onHandleDislikeTopic}
      />
    </>
  );
}
export default App;
