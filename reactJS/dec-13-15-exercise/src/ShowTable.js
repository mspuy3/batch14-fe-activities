import React from 'react'

const ShowTable = (props) => (
  <table className='striped-table'>
    <thead>
      <tr className='flex-row space-around'>
        <th className="text-center">Full Name</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
    <div className='scrollit'>
    {props.names.length > 0 ? (
        props.names.map((name) => (
          <tr key={name.id} className='flex-row space-around'>
            <td className="text-center">{name.firstName} {name.lastName}</td>
            <td className="text-center">
              <button 
               className="button accent-button"
               onClick={() => {props.updateRow(name)}}
               >Update</button>
              <button 
               className="button muted-button"
               onClick={() => props.deleteName(name.id)}
              >Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Names</td>
        </tr>
      )}
    </div>
    </tbody>
  </table>
)

export default ShowTable