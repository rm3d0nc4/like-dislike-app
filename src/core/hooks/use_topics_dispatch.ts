import { useContext } from "react";
import {TopicsDispatchContext } from "../contexts/topic_context";

export function useTopicsDispatch() {
    return useContext(TopicsDispatchContext);
}