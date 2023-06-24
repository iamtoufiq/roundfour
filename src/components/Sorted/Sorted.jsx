import React, { useEffect, useState } from "react";

const Sorted = ({ setDatas, datas }) => {
  const [select, setSelect] = useState("latest post");

  useEffect(() => {
    const handleSort = () => {
      if (select === "most upvoted") {
        const sortedData = [...datas].sort((a, b) => b.upvotes - a.upvotes);
        setDatas(sortedData);
      } else if (select === "latest post") {
        const sortedData = [...datas].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setDatas(sortedData);
      }
    };

    handleSort();
  }, [select]);

  return (
    <div>
      <h3>Sorted By</h3>
      <select
        name="sorting"
        id="sorting"
        onChange={(e) => setSelect(e.target.value)}
        value={select}
      >
        <option value="latest post">Latest Post</option>
        <option value="most upvoted">Most Upvoted</option>
      </select>
    </div>
  );
};

export default Sorted;
