import { useRef, useState } from "react";
// constant
import { Enter_Key_Code } from "../constant/KEY_MAP";

const Data = [
  { id: 0, name: "sanaz0" },
  { id: 1, name: "sanaz1" },
  { id: 2, name: "sanaz2" },
  { id: 3, name: "sanaz3" },
  { id: 4, name: "sanaz4" },
];
const useList = () => {
  const [addItemValue, setAddItemValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(Data);
  const [canAd, setCanAd] = useState(false);
  // use inputRef to focus the input
  const inputRef = useRef(null);
  const changeInputValue = (e) => {
    setAddItemValue(e.target.value);
  };
  const addItem = () => {
    if (!addItemValue) return;
    setUsers([...users, { id: users.length + 1, name: addItemValue }]);
    // for empty input
    setAddItemValue("");
    // inputRef.current.focus();
  };
  const handelOnKeyUp = (e) => {
    if (e.keyCode === Enter_Key_Code) {
      addItem();
    }
  };
  const handelSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };
  const toggleAddItem = () => {
    setCanAd(!canAd);
  };
  return {
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
  };
};
export default useList;
