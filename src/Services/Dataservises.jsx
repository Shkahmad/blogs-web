import { db } from ".././config/Config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const blogRef = collection(db, "blogs");

class BlogDataServices {
  addBlog = (newBlog) => {
    return addDoc(blogRef, newBlog);
  };
  getAllBlogs = () => {
    return getDocs(blogRef);
  };

  deleteBlog = (id) => {
    const delBlog = doc(db, "blogs", id);
    return deleteDoc(delBlog);
  };

  getBlog = (id) => {
    const getBlog = doc(db, "blogs", id);
    return getDoc(getBlog);
  };

  updateBlog = (id, updateBlog) => {
    const getBlog = doc(db, "blogs", id);
    return updateDoc(getBlog, updateBlog);
  };
}

export default new BlogDataServices();
