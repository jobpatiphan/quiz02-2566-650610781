export const PostOwner = ({ profile_img, username, post_detail, likeNum }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={profile_img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">{username}</span>
      </div>

      <span className="text-white">{post_detail}</span>

      <div className="d-flex align-items-center gap-1">
        <img src={likeNum > 0 ? "/like.svg" : ""} width={20}></img>
        <span style={{ color: "#B0B3B8" }}>
          {likeNum > 0 ? `${likeNum} คน` : ""}
        </span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
