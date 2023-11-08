import ChatList from "@/components/ChatList";

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {

  return (
    <div>
      {/* Chat Permission check*/}
      <h1>Chats</h1>

      {/* ChatList */}
      <ChatList />
    </div>
  );
}

export default ChatsPage;
