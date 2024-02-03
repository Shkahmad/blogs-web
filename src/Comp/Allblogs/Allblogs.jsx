import React, { useEffect, useState } from "react";
import style from "./Allblogs.module.css";
import BlogDataServices from "../../Services/Dataservises";
const Allblogs = ({ getblogid }) => {
  const [allblogs, setallblogs] = useState([]);
  useEffect(() => {
    handleAllBlogs();
  }, [allblogs]);
  console.log(allblogs);

  const handleAllBlogs = async () => {
    try {
      const data = await BlogDataServices.getAllBlogs();
      setallblogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelBlog = async (id) => {
    await BlogDataServices.deleteBlog(id);
  };

  return (
    <div>
      <div className={style.container}>
        {allblogs.map((item, index) => {
          return (
            <div className={style.blogs} key={index}>
              <h1>{item.Title}</h1>
              <p>{item.Contact}</p>
              <p>
                <button
                  className={style.btn}
                  onClick={() => getblogid(item.id)}
                >
                  Edit
                </button>
                <button
                  className={style.btn1}
                  onClick={() => handleDelBlog(item.id)}
                >
                  Delete
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allblogs;
