import InfiniteScroll from "react-infinite-scroller";
import { Message } from "./Message";
import { fetchChats } from "../lib/fetchChats";
import { useInfiniteQuery } from "@tanstack/react-query";

const Results = ()=>{
    const { data, isLoading, isError, hasNextPage, fetchNextPage } =
useInfiniteQuery("posts", fetchChats, {
  getNextPageParam: (lastPage, pages) => {
   return lastPage.nextPage;
  },
});
    return(
        <div>
        <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage} isReverse>
        {data.chats.pages.map((page) =>
          page.json.chats.map((message) => <Message key={message.id} message={message} />)
        )}
      </InfiniteScroll>
      </div>
    )
}

export default Results