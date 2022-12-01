function List(props) {
  const { lists, handlerDelete, changeDone } = props;

  return (
    <div className="onChangeContentsHandler">
      <h2>Working..🔥</h2>
      <div className="list-section">
        {lists.map((list) => {
          if (!list.isDone) {
            // console.log() 리턴 위에서 찍기. 리턴 되기 전에.
            return (
              <div className="list-box" key={list.id}>
                <div className="list-title">{list.title}</div>
                <div className="list-contents">{list.contents}</div>
                <div className="list-box-button">
                  <button onClick={() => handlerDelete(list.id)}>
                    삭제하기
                  </button>
                  {list.isDone ? (
                    <button onClick={() => changeDone(list.id)}>취소</button>
                  ) : (
                    <button onClick={() => changeDone(list.id)}>완료</button>
                  )}
                </div>
              </div>
            );
          } else return null;
        })}
      </div>

      <h2>Done..!✨</h2>
      <div className="list-section">
        {lists.map((list) => {
          if (list.isDone) {
            return (
              <div className="list-box" key={list.id}>
                <div className="list-title">{list.title}</div>
                <div className="list-contents">{list.contents}</div>
                <div className="list-box-button">
                  <button onClick={() => handlerDelete(list.id)}>
                    삭제하기
                  </button>
                  {list.isDone ? (
                    <button onClick={() => changeDone(list.id)}>취소</button>
                  ) : (
                    <button onClick={() => changeDone(list.id)}>완료</button>
                  )}
                </div>
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
}

export default List;
