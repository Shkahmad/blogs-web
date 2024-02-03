import React, { useState, useEffect } from "react";
import style from "./Newblogs.module.css";
import BlogDataServices from "../../Services/Dataservises";
const Newblogs = ({ blogid }) => {
  const [Title, setTitle] = useState("");
  const [Contact, setContact] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const senddata = {
      Title,
      Contact,
    };
    console.log(senddata);

    try {
      if (blogid !== undefined && blogid !== "") {
        await BlogDataServices.updateBlog(blogid, senddata);
      } else {
        await BlogDataServices.addBlog(senddata);
      }
    } catch (error) {
      console.log(error);
    }

    setTitle("");
    setContact("");
  };

  const editHandler = async (id) => {
    const BlogData = await BlogDataServices.getBlog(id);
    setTitle(BlogData.data().Title);
    setContact(BlogData.data().Contact);
    console.log("data : ", BlogData.data());
  };
  useEffect(() => {
    if (blogid !== undefined && blogid !== "") {
      editHandler(blogid);
    }
  }, [blogid]);

  return (
    <div>
      <div className={style.container}>
        <div className={style.blogs}>
          <form action="#" onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Enter your Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <textarea
              rows="10"
              placeholder="Enter your Blog"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
            ></textarea>
            <br />
            <br />
            <p className={style.par}>
              <button className={style.btn} type="submit">
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newblogs;
