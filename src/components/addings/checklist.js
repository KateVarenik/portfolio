import { useState } from "react";

export const Checklist = ({ style, className }) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const onChangeInput = (event) => setInput(event.target.value);

  const onAdd = () => {
    setList((prevList) => [{ title: input }, ...prevList]);
    setInput("");
  };

  const onDelete = (index) =>
    setList((prevList) => prevList.filter((str, i) => index !== i));

  const onChangeItem = (index, title) => {
    const newList = list.map((item, i) => {
      if (i === index) {
        return { title };
      }

      return item;
    });

    setList(newList);
  };

  return (
    <div>
      <h2>Checklist</h2>

      <input value={input} onChange={onChangeInput} />

      <button onClick={onAdd}>add</button>

      <ul>
        {list.map(({ title }, index) => (
          <li key={title}>
            <input
              value={title}
              onChange={(event) => onChangeItem(index, event.target.value)}
            />{" "}
            <button onClick={() => onDelete(index)}>x</button>
          </li>
        ))}
      </ul>
      {!list.length && <div>empty</div>}
    </div>
  );
};

export default Checklist;
