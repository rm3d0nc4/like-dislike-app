import { Author } from "./author";

export interface Topic {
    id: string;
    description: string;
    author: Author;
    createdAt: Date;
    tags: string[];
    active: boolean;
    likes: number;
    dislikes: number;
}