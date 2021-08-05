import React, { useEffect, useState } from 'react';

const Detail = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });
  useEffect(() => {
    fetch('http://localhost:8080/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  return (
    <div>
      <h1>상세보기</h1>
      <hr />
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
    </div>
  );
};

export default Detail;
<h1>상세보기</h1>;
