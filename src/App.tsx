import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import MyList from "./pages/MyList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="artist/:id" element={<Artist />} />
        <Route path="my-list/" element={<MyList />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
