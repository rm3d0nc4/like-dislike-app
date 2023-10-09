import { Topic } from "../../core/interfaces/topic";
import { Button, Input, Label, TextLabel } from "./style";
import { useRef } from "react";
import { Author } from "../../core/interfaces/author";
import { ulid } from "ulid";
import { Action, ActionType } from "../../core/reducers/topic_reducer";
import { useTopicsDispatch } from "../../core/hooks/use_topics_dispatch";
import { TopicService } from "../../core/services/topic_service";

interface TopicFormProps {
  setFormIsOpen: (isOpen: boolean) => void;
}

export function TopicForm({ setFormIsOpen }: TopicFormProps) {
  const dispatch = useTopicsDispatch() as React.Dispatch<Action>;
  const {addTopic} = TopicService;
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const author: Author = {
      username: usernameRef.current?.value ?? "",
      name: nameRef.current?.value ?? "",
      city: cityRef.current?.value ?? "",
      country: countryRef.current?.value ?? "",
    };
    const topic: Topic = {
      id: ulid(),
      author: author,
      description: descriptionRef.current?.value ?? "",
      tags:
        tagsRef.current?.value
          .trim()
          .split(" ")
          .filter((value) => value != "") ?? [],
      createdAt: new Date(),
      active: false,
      likes: 0,
      dislikes: 0,
    };
    const form = event.target as HTMLFormElement;
    form.reset();
    addTopic(topic).then((topic) => dispatch({ type: ActionType.Added, payload: { topic } }));
    setFormIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <TextLabel>Username</TextLabel>
        <Input type="text" placeholder="author username" ref={usernameRef} />
      </Label>
      <Label>
        <TextLabel>Name</TextLabel>
        <Input type="text" placeholder="author name" ref={nameRef} />
      </Label>
      <Label>
        <TextLabel>City</TextLabel>
        <Input type="text" placeholder="author city" ref={cityRef} />
      </Label>
      <Label>
        <TextLabel>Country</TextLabel>
        <Input type="text" placeholder="author country" ref={countryRef} />
      </Label>
      <Label>
        <TextLabel>Description</TextLabel>
        <Input type="text" placeholder="topic description" ref={descriptionRef} />
      </Label>
      <Label>
        <TextLabel>Tags</TextLabel>
        <Input type="text" placeholder="separate tags for space" ref={tagsRef} />
      </Label>
      <Button type="submit">Submit</Button>
    </form>
  );
}
