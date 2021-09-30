// src/components/home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// class Home extends React.Component {
//   render() {
//     return(
//       <h1>This is Home Component</h1>
//     )
//   }
// }

// use Hooks(useEffect, useState)
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
      const fetchData = async() => {
          const result = await axios.get('http://127.0.0.1:5000/home');
          console.log(result.data);
          setPosts(result.data);
      };

      fetchData();
  }, []);

  return (
      <div>
          <h1>This is Home Component</h1>
          {posts && posts.map(item => (   //&&은 axios 비동기 대기 중 오류 방지
              <p key={item.result}>{item.result}</p>
          ))}
      </div>
  );
};

export default Home