// components
import Input from "./components/Input";
import Button from "./components/Button";
import AddItem from "./components/AddItem";
import List from "./components/List";
// hooks
import useList from "./hooks/useList";
// model

// constant

function App() {
  //controller
  const {
    addItemValue,
    searchTerm,
    users,
    inputRef,
    canAd,
    handelOnKeyUp,
    changeInputValue,
    handelSearchInput,
    toggleAddItem,
    addItem,
  } = useList();
  return (
    //   view
    <div className=" p-4 rounded-lg m-10 ml-10 shadow-lg">
      <div className="mb-2">
        <Input
          // className="border rounded mr-2 px-2"
          placeholder="Search for Names"
          value={searchTerm}
          onChange={handelSearchInput}
        />
        <Button onClick={toggleAddItem}>+Add new Item</Button>
      </div>
      {canAd ? (
        <AddItem
          addItemValue={addItemValue}
          changeInputValue={changeInputValue}
          handelOnKeyUp={handelOnKeyUp}
          inputRef={inputRef}
          addItem={addItem}
        />
      ) : null}
      <List data={users} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
