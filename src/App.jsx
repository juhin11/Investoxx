import "./App.css";
import { MemoryRouter, Route ,Routes } from "react-router-dom";
import Entry from "./Screen/Entry/Entry";
import Home from "./Screen/Home/Home";
import { Toaster } from "react-hot-toast";
import AddStock from "./Components/AdminOptions/addStock";
import UpdateStock from "./Components/AdminOptions/updateStock";
import DeleteStock from "./Components/AdminOptions/deleteStock";
import AllUsers from "./Components/AdminOptions/AllUsers";
import DeleteUser from "./Components/AdminOptions/deleteUser";
import Addblog from "./Components/AdminOptions/addblog";
import AllStock from "./Components/AdminOptions/allStock";
import AddUser from "./Components/AdminOptions/addUser";

function App() {

  return (
    <MemoryRouter>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Entry />} key={1}  />
        <Route path="/home" element={<Home />} key={2}  />
        <Route path="/adminOption/addStock" element={<AddStock />} key={3}  />
        <Route path="/adminOption/updateStocks" element={<UpdateStock />} key={4}  />
        <Route path="/adminOption/deleteStock" element={<DeleteStock />} key={5}  />
        <Route path="/adminOption/allUsers" element={<AllUsers />} key={6}  />
        <Route path="/adminOption/deleteUser" element={<DeleteUser />} key={7}  />
        <Route path="/adminOption/addBlog" element={<Addblog />} key={8}  />
        <Route path="/adminOption/allStock" element={<AllStock />} key={9}  />
        <Route path="/adminOption/addUser" element={<AddUser />} key={10}  />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
