import InfiniteScroll from "react-infinite-scroller";
import { Message } from "./Message";
import { fetchChats } from "../lib/fetchChats";
import { useInfiniteQuery } from "@tanstack/react-query";

const Results = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["chats"], fetchChats, {
      getNextPageParam: (lastPage, pages) => {
        console.log(pages);
        if(lastPage.nextPage<lastPage.totalPages)
        return lastPage.nextPage;
        return undefined
      },
    });
  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : isError ? (
        <p>There was an error</p>
      ) : (
        
    <div className="h-full w-full overflow-y-scroll">
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={fetchNextPage}
          isReverse={true}
        >
          {data?.pages?.map((page) =>
            page?.json?.chats?.map((message) => (
              <Message key={message.id} message={message} />
            ))
          )}
        </InfiniteScroll>
        </div>
      )}
      </>
  );
};

export default Results;
