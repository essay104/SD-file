import "./Body.css";

export const Body = (props) => {
  const { name, location, favorList } = props;
  return (
    <div>
      <h1>body</h1>
      <h1>
        {name}은 {location}에 살고 있습니다.
        <br />
        <br />
        {name}은 {favorList.length}개의 최애 메뉴가 있습니다.
        {favorList[0]}, {favorList[1]}, {favorList[2]}를 매우 사랑합니다.
      </h1>
    </div>
  );
};

Body.defaulProps = {
  favorList: ["라면", "순대", "족발"],
};

export default Body;
