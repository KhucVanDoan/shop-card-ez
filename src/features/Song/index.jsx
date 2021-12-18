import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc hoa Thịnh hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/d/a/3/1da39b8da2ee557d986d4fb78a1cc410.jpg",
    },
    {
      id: 2,
      name: "Nhạc trẻ Thịnh hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/d/a/3/1da39b8da2ee557d986d4fb78a1cc410.jpg",
    },
    {
      id: 3,
      name: "Nhạc vàng Thịnh hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/d/a/3/1da39b8da2ee557d986d4fb78a1cc410.jpg",
    },
  ];
  return (
    <div>
      <h3>Có thể bạ sẽ thích đấy</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
