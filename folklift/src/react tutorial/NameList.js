import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Huda','Mummy','Omar']
    //     {id:1, name:'Huda',age:16,pathway:'CS/Film'},
    //     {id:2,name:'Maryam',age:40,pathway:'CS'},
    //     {id:3,name:'Siraj',age:43,pathway:'Business'},
    //     {id:4,name:'Omar',age:8,pathway:'Youtuber/Animator'},
    //     {id:5,name:'Sameeha',age:18,pathway:'Business'},
    // ]

    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>
        {
          nameList  
          
        }
    </div>
  )
}

export default NameList
