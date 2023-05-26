import { Suspense, lazy } from "react";
import Header from "./Header";
import Type from "./Type";

const ChatScreen = () => {
  const Results = lazy(() => import("./Results"));
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="rounded-[32px] bg-whitesmoke-100 w-full h-[50.75rem] text-left text-[0.88rem] text-dimgray-100 font-mulish overflow-hidden">
        <Header />
        <div className="right-4 h-[calc(100vh-13rem)] w-[calc(100vw-2rem)] flex flex-row items-start justify-start gap-[0.5rem]  overflow-hidden">
          <Results />
        </div>
        <Type />
      </div>
    </Suspense>
  );
};

export default ChatScreen;
