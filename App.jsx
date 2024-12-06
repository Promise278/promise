import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    // fetch(https://jsonplaceholder.typicode.com/users);
    <>

    <h1>Latest Posts</h1>
    
    <div class="card-container">
        <div class="card">
          <h3>CHARLES JAMES</h3>
          <svg className='file' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
          <button className='btn'>FOLLOW</button>
          <p>
            Primary schools often is the basis of education in childrens life which teaches them to write, read and respect their teachers and parents at home. it also host a variety of events throughout the year, such as concerts, speach and prize giving Day.
          </p>
        </div>
        <div class="card">
          <h3>DEBBIE JOHN</h3>
          <svg className='file' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
          <button className='btn'>FOLLOW</button>
          <p>
            A great way to meet new people, develop leadership skills, and get involved in
            the primary community. were you meet with friends neighbour and also relatives which come together to learn and also innovate that career life.
          </p>
        </div>
        <div class="card">
          <h3>PROMISE PIUS OBI</h3>
          <svg className='file' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
          <button className='btn'>FOLLOW</button>
          <p>
            Giving back to the community what you have learned in school is a rewarding experience. Look for volunteer
            opportunities in your area that can help the society and community at large.
          </p>
        </div>
      </div>
      
    </>
  )
}

export default App
