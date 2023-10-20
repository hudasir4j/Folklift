import React from 'react';
import Navbar from './components/UseOften/Navbar';
import BizzOfWeek from './components/Home/BizzOfWeek';
import ambreImage from './react tutorial/trees.jpeg'
// import HomePage from './components/HomePage';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from'./appStyles.module.css'


const App = ()=>{
    return(
        <div className='App'>

            <Navbar/>
            <BizzOfWeek img={ambreImage}/>
            {/* <HomePage></HomePage> */}
            {/* <h1 className='error'>error</h1> */}
            {/* <h1 className={styles.success}>success</h1> */}
            {/* <Inline></Inline> */}
            {/* <StyleSheet primary={true}/> */}
            {/* <NameList/> */}
            {/* <UserGreeting/> */}
            {/* <ParentComponent/> */}
            {/* <ParentComponent/> */}
            {/* <EventBind/> */}
            {/* <FunctionClick/>
            <ClassClick/> */}
            {/* <Hello name='Huda'/>
            <Welcome name = 'omar'/> */}
            {/* <Counter/> */}
        </div>
        
    )

    //return React.createElement("div",null, React.createElement("h1",null,"Hello Huda"));
}

export default App