import { Route, Routes } from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<ChatScreen />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
