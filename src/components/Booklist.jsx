// Booklist.jsx

import { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {
  // 🔽 関数を実行（`?` を使用することで，`getData` が存在する場合のみ関数を実行可能）
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = getData?.(language).then((response) =>
      setBookData(response)
    );
  }, [language, getData]);

console.log(bookData);

    return (
      <ul>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (
        bookData.data.items.map((x, index) => (
          <li key={index}>タイトル：{x.volumeInfo.title}  著者：{x.volumeInfo.authors}</li>
        ))
      )}
    </ul>
  );
};
  