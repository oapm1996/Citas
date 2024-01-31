/**
 * The Error component is a React component that displays an error message in a red background with
 * white text.*/
const Error = ({mensaje}) => {
  return (
    <div className='bg-red-800 text-white text text-center
    p-3 uppercase font-bold mb-3 rounded-md'>
      <p>{mensaje}</p>
    </div>
  )
}

export default Error