import { useEffect, useState } from "react";
import "./App.css";
import { Topic } from "./interfaces/topic";
import { Header } from "./components/Header";
import { TopicList } from "./components/TopicList";

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    (async () => {
      
      const response = await fetch('http://localhost:3000/topics')

      const data = await response.json();
      const topics: Topic[] = data as Topic[];
      topics.forEach((topic) => (topic.createdAt = new Date(topic.createdAt)));

      const sortedTopics = topics.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      setTopics(sortedTopics);
    })();
  }, []);

  const onHandleChangeActive = async (topic: Topic) => {
    topic.active = !topic.active;
    const response = await fetch(`http://localhost:3000/topics/${topic.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    });

    if (response.ok) {
      const data: Topic = await response.json();
      const updatedTopics = topics.map((currentTopic) => (currentTopic.id === data.id ? data : currentTopic));
      setTopics(updatedTopics);
    }
  };

  const onHandleLikeTopic = async (topic: Topic) => {
    topic.likes += 1;
    const response = await fetch(`http://localhost:3000/topics/${topic.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    });

    if (response.ok) {
      const data: Topic = await response.json();
      const updatedTopics = topics.map((currentTopic) => (currentTopic.id === data.id ? data : currentTopic));
      setTopics(updatedTopics);
    }
  };
  const onHandleDislikeTopic = async (topic: Topic) => {
    topic.dislikes += 1;
    const response = await fetch(`http://localhost:3000/topics/${topic.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    });

    if (response.ok) {
      const data: Topic = await response.json();
      const updatedTopics = topics.map((currentTopic) => (currentTopic.id === data.id ? data : currentTopic));
      setTopics(updatedTopics);
    }
  };

  const onCreateTopic = async (topic: Topic) => {
    const response = await fetch("http://localhost:3000/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    });

    if (response.ok) {
      setTopics([topic, ...topics]);
    }
  };

  return (
    <>
      <Header onCreateTopic={onCreateTopic} />
      <TopicList topics={topics} changeActive={onHandleChangeActive} likeTopic={onHandleLikeTopic} dislikeTopic={onHandleDislikeTopic} />
    </>
  );
}
export default App;
