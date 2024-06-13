import React from "react";
import "./Viewer.css";
import { emotionList } from "../util";

const Viewer = (content, emotionId) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);

  return (
    <div className="Viewer">
      <section>
        <h4>오늘의 감정</h4>
        <div
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotionId}`,
          ].join("")}
        >
          {/* <img src={emotionItem.img} alt={emotionItem.name} />
          <div className="emotion_discript">{emotionItem.name}</div> */}
        </div>
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
