import React from 'react'

const TodoList = ({todoList,deleteHandler}) => {
  return (
        <div>
            {todoList.map((todo,index) => {
                return (
                     <div key={index} className='flex flex-row items-center space-x-2 m-2'>
                         <h2 className='text-sm'>{todo}</h2>
                         <button className='border text-sm border-black bg-red-700 px-2 text-white rounded-lg'
                          onClick={()=>{deleteHandler(index)}}>
                            Delete
                        </button>
                     </div>)}
            )}
        </div>
    )
}

export default TodoList
