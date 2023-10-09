import { TopicsContext, TopicsDispatchContext } from '../contexts/topic_context';
import { useReducer } from "react";
import { topicStateReducer } from "../reducers/topic_reducer";

interface TopicProviderProps {
    children: React.ReactNode
}


export function TopicsProvider({ children }: TopicProviderProps) {    
    const [topics, dispatch] = useReducer(topicStateReducer, { topics: [] });

    return (
        <TopicsContext.Provider value={topics.topics}>
            <TopicsDispatchContext.Provider value={dispatch}>
                {children}
            </TopicsDispatchContext.Provider>
        </TopicsContext.Provider>
        
    );
}