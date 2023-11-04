import ChatList from "@/components/ChatList";

function ChatsPage() {
  type Props = {
    params: {};
    searchParams: {
      error: string;
    };
  };

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
