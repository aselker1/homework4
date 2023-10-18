


// №1 - Создать функцию, которая будет делать запрос и скопировать первые 10 элементов массива и последние 10 элементов массива.

// const fetchDataAndCopyArray = async () => {
//     const response = await fetch(' https://jsonplaceholder.typicode.com/posts'); // Замените URL на свой запрос
  
//     if (!response.ok) {
//       console.error('Ошибка при получении данных:', response.status);
//       return []; 
//     }
  
//     const data = await response.json();
//     const array = data.slice();
    
//     return array;
//   };
  
//   const processArray = async () => {
//     const array = await fetchDataAndCopyArray();
    
//     if (array.length === 0) {
//       console.log('Получен пустой массив данных!');
//       return;
//     }
    
//     const first10 = array.slice(0, 10);
//     console.log("Первые 10 элементов массива:", first10);
//     const last10 = array.slice(-10);
//     console.log("Последние 10 элементов массива:", last10);
//   };
  
//  processArray();



// №2 - Создать функцию, которая будет делать запрос и сделать копию массива от приходящих данных от сервера, в котором будут только 2 поля userId и title у постов. [{userId: 1, id: 1, title: "Hello", description: "test"}] => [{userId: 1, title: "Hello"}].

// const fetchDataAndCopyArray = async () => {
//   const response = await fetch(' https://jsonplaceholder.typicode.com/posts'); // Замените URL на свой запрос

//   if (!response.ok) {
//     console.error('Ошибка при получении данных:', response.status);
//     return []; 
//   }

//   const data = await response.json();
  
//   const newArray = data.map(({ userId, title }) => ({ userId, title }));
  
//   return newArray;
// };

// const processArray = async () => {
//   const newArray = await fetchDataAndCopyArray();
  
//   if (newArray.length === 0) {
//     console.log('Получен пустой массив данных');
//     return;
//   }
  
//   console.log("Новый массив данных:", newArray);
// };

// processArray();



//№3 - Создать функцию, которая будет делать запрос на сервер и полученные данные вывести в браузер как на картинке ниже.

// const fetchDataAndDisplayPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (response.status !== 200) {
//       console.error('Ошибка при получении данных!!!', response.status);
//       return;
//     };

//     const data = await response.json();
//     if (!Array.isArray(data)) {
//       console.error('Полученные данные не являются массивом!!!');
//       return;
//     };
  
//     const postContainer = document.getElementById('post-container');
//     postContainer.innerHTML = '';
  
//     data.forEach((post, index) => {
//       const postElement = document.createElement('div');
//       postElement.classList.add('post-frame');
//       postElement.innerHTML = `
//         <p>№${index + 1}</p>
//         <p>name: ${post.name}</p>
//         <p>phone: ${post.phone}</p>
//         <p>username: ${post.username}</p>
//          <p>website: ${post.website}</p>
//          <p>email: ${post.email}</p>
//       `;
//       postContainer.appendChild(postElement);
//     });
// };
//   fetchDataAndDisplayPosts();
  
  

// №4 - Создать функцию, которая будет делать запрос на сервер и сделать 2 копии массива. В первой копии должны хранится посты у которых поле id четные а во втором не четные.

// const fetchDataAndCopyArray = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
//     const posts = await response.json();
    
//     const evenPosts = [];
//     const oddPosts = [];
    
//     for (let i = 0; i < posts.length; i++) {
//       if (posts[i].id % 2 === 0) {
//         evenPosts.push(posts[i]);
//       } else {
//         oddPosts.push(posts[i]);
//       }
//     }
     
//     console.log('Посты с четным id:');
//     console.log(evenPosts);
//     console.log('Посты с нечетным id:');
//     console.log(oddPosts);
//   }
//   fetchDataAndCopyArray();



// №5 - Создать функцию, которая будет делать запрос на сервер и сделать копию массива в котором будут хранится каждый 10й элемент массива.

// const fetchDataAndCopyArray = async () => {
//     const response = await fetch(' https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     const copyArray = [];
    
//     for (let i = 0; i < data.length; i += 10) {
//       copyArray.push(data[i]);
//     }

//     console.log('Копия массива с каждым 10-м элементом:');
//     console.log(copyArray);
//   }
//   fetchDataAndCopyArray();
