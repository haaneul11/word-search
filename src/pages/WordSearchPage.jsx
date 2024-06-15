import React from "react";

export default function WordSearchPage() {
  return (
    <main>
      <div className="maker__title">Word Search Maker</div>
      <div>
        <div className="maker-container__title">
          <label for="title">Title</label>
        </div>
        <input
          type="text"
          id="title"
          name="title"
          className="maker-container__content"
        />
      </div>
      <div>
        <div className="maker-container__title">
          <label for="description">Description</label>
        </div>
        <input
          type="text"
          id="description"
          name="description"
          className="maker-container__content"
        />
      </div>
      <div>
        <div className="maker-container__title">Word List</div>
        <div className="word-list-contanier">
          <input className="maker-container__content" />
          <button className="add-btn">추가</button>
        </div>
        <div className="word-badge-container">
          <div className="word-badge">PIG</div>
          <div className="word-badge">BACKEND</div>
          <div className="word-badge">HANEUL</div>
        </div>
      </div>
      <div>
        <button className="write-btn">등록</button>
      </div>
    </main>
  );
}
