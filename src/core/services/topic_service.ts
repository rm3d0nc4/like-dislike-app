import { Topic } from '../interfaces/topic';

const baseUrl = 'http://localhost:3000';

async function getTopics() {
    const response = await fetch(`${baseUrl}/topics`);
    const data =  await response.json();
    const topics = data as Topic[];
    topics.forEach((topic) => (topic.createdAt = new Date(topic.createdAt)));

    const sortedTopics = topics.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return sortedTopics;
}

async function addTopic(topic: Topic): Promise<Topic> {
    const response = await fetch(`${baseUrl}/topics`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(topic),
    });

    const data = await response.json();

    return data as Topic;
}

async function updateTopic(topic: Topic): Promise<Topic> {
    const response = await fetch(`${baseUrl}/topics/${topic.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(topic),
    });

    const data = await response.json();

    return data as Topic;
}


const TopicService = {getTopics, addTopic, updateTopic};
export {TopicService};