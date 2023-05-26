import InfiniteScroll from "react-infinite-scroller";
import { fetchChats } from "../lib/fetchChats";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
const Message = lazy(() => import("./Message"));

const Results = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["chats"], fetchChats, {
      getNextPageParam: (lastPage, pages) => {
        console.log(pages);
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
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
            {data?.pages?.map((page) => (
              <div key={page.nextPage}>
                <div className="bg-[#B7B7B7] h-0 w-12 justify-start"/>
                <div className=" text-center text-silver">
                  {page.json.chats[0].time.slice(0, 10)}
                </div>
                <div className="bg-[#B7B7B7] h-0 w-12 justify-end"/>
                {page?.json?.chats?.map((message) => (
                  <div key={message.id}>
                    <Suspense fallback={<div>loading...</div>}>
                      <Message message={message} />
                    </Suspense>
                  </div>
                ))}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

export default Results;
