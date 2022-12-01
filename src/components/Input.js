function Input(props) {
  const {
    title,
    contents,
    onChangeNameHandler,
    onChangeContentsHandler,
    addToDo,
  } = props;

  // console.log(props);
  return (
    <div className="input-section">
      <div className="input-wrap">
        <span>제목</span>
        <input
          className="input-title"
          value={title}
          //   placeholder="제목을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
          onChange={onChangeNameHandler} //★
        />
        <span>내용</span>
        <input
          className="onChangeNameHandler"
          value={contents}
          //   placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 contents의 값으로 업데이트
          onChange={onChangeContentsHandler} //★
        />
      </div>
      <div className="add-button">
        <button onClick={addToDo}>추가하기</button>
      </div>
    </div>
  );
}

export default Input;
