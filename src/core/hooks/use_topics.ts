import { useContext } from "react";
import { TopicsContext } from "../contexts/topic_context";

export function useTopics() {
    return useContext(TopicsContext);
}