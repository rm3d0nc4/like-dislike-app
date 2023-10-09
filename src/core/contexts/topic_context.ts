import { Dispatch, createContext } from "react";
import { Action } from "../reducers/topic_reducer";
import { Topic } from "../interfaces/topic";



export const TopicsContext = createContext<Topic[] | undefined>(undefined);
export const TopicsDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);


