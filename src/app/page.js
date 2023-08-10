"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          profile_img="/profileImages/handsome_guy.jpg"
          username="Patiphan Klinhom 650610781"
          post_detail="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="100"
        />
        {/* Comment Example */}

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
        {comments.map((reply) => (
          <Comment
            key={reply.username}
            userImagePath={reply.userImagePath}
            username={reply.username}
            commentText={reply.commentText}
            likeNum={reply.likeNum}
            replies={reply.replies}
          />
        ))}
      </div>
    </div>
  );
}
