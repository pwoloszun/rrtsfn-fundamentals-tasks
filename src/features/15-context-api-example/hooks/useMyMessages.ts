import { useState } from 'react';
import { times } from 'lodash';
import { fake } from 'faker';

interface MessageDto {
  id: number;
  title: string;
  content: string;
}

type MessageDtoParams = Omit<MessageDto, 'id'>;

interface IUseMyMessagesResult {
  messages: MessageDto[];
  createMessage: (params: MessageDtoParams) => void;
};

export default function useMyMessages(initialMessagesCount = 0): IUseMyMessagesResult {
  const initMessages = generateMessages(initialMessagesCount);
  const [
    messages,
    setMessages
  ] = useState<MessageDto[]>(initMessages);

  const createMessage = (params: MessageDtoParams) => {
    setMessages((currMessages) => {
      const id = Math.random();
      const newMessage = { ...params, id };
      const nextMessages = [newMessage, ...currMessages];
      return nextMessages;
    });
  };

  return {
    messages,
    createMessage,
  };
}

function generateMessages(count: number): MessageDto[] {
  return times(count, () => {
    const id = Math.random();
    const title = fake('{{internet.exampleEmail}}');
    const content = fake('{{lorem.paragraph}}');
    return { id, title, content };
  });
}
