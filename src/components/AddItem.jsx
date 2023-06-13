import React from "react";
import Input from "./Input";
import Button from "./Button";

function AddItem({
  addItemValue,
  changeInputValue,
  handelOnKeyUp,
  inputRef,
  addItem,
}) {
  return (
    <div className="bg-slate-100 mb-4 flex p-4 justify-between rounded">
      <Input
        value={addItemValue}
        onChange={changeInputValue}
        onKeyUp={handelOnKeyUp}
        placeholder={"some name"}
        // ref={inputRef}
      />
      {/*diabled: for disable add btn*/}
      <Button
        // className="bg-white p-2 roundd cursor-pointer hover:bg-slate-200 trasition"
        onClick={addItem}
        disabled={!addItemValue}
      >
        Add
      </Button>
    </div>
  );
}

export default AddItem;
