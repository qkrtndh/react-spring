import React, { useEffect, useState } from 'react';
import Bookitem from '../../components/Bookitem';

const Home = () => {
  const [books, setBooks] = useState([]);

  //함수 실행 시 최초 한번 실행
  useEffect(() => {
    //fetch는 데이터를 요청하는 javascript함수 기본적으로 get방식
    //응답을 오면 json으로 받ㅇ므
    fetch('http://localhost:8080/book')
      .then((res) => res.json()) //처리될 데이터를 받는 것
      .then((res) => {
        //이후 실행할 함수
        console.log(1, res);
        setBooks(res);
      }); //비동기함수
  }, []); //한번만 실행되도록 빈 배열

  return (
    <div>
      {books.map((book) => (
        <Bookitem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
