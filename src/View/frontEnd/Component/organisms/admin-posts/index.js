import { useState } from "react";
import { Button } from "react-bootstrap";

// import {
//   LadderMenuItems,
//   PostsTable,
//   AddPost,
// } from "@components/organisms";
import LadderMenuItems from "../ladder-menu-items";
import PostsTable from "../posts-table";
import AddPost from "../add-post";

import "./style.scss";

const AdminPosts = () => {
  const [viewPost, createPost] = useState(true);
  return (
    <>
      {!viewPost ? (
        <div>
          <header className="py-sm-2 mb-3 w-100 d-sm-flex align-items-center">
            <h1 className="d-none d-sm-flex page__title mb-0 fs-3 fw-bolder me-2">
              Posts
            </h1>
            <span className="d-none d-sm-flex text-light fs-5 ml-2">(6)</span>

            <div className="d-flex align-items-center ms-sm-auto">
              <Button variant="info" size="lg" className="me-2 fw-bold fs-6" onClick={() => createPost(true)}>Create New</Button>
              <LadderMenuItems />
            </div>
          </header>

          <PostsTable />
        </div>
      ) : <AddPost />}
    </>
  );
};

export default AdminPosts;
