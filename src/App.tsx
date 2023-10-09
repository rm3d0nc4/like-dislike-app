import "./App.css";
import { Header } from "./components/Header";
import { TopicList } from "./components/TopicList";
import { Toaster } from "react-hot-toast";
import { TopicsProvider } from "./core/providers/topic_provider";

function App() {
  return (
    <>
      <TopicsProvider>
        <Toaster toastOptions={{ position: "bottom-center" }} />
        <Header />
        <TopicList />
      </TopicsProvider>
    </>
  );
}
export default App;
