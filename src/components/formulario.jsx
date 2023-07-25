import {useState, useEffect} from 'react';

const Formulario = () => {
  /* The line `const [nombre, setNombre] = useState('');` is using the `useState` hook from React to create a state variable 
  called `nombre` and a function called `setNombre` to update the value of `nombre`. */
  const [nombre, setNombre] = useState('');

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-10'>
          Anade pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            <div className='mb-5'>
              <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre Mascatos</label>
              <input
                id='mascota'
                type="text"
                placeholder="Nombre de la mascota"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                /* The `value={nombre}` attribute is binding the value of the input field to the `nombre` state variable. This means that the initial value of the input field will
                be set to the value of `nombre`, and any changes made to the input field will update the value of `nombre`. */
                value={nombre}
                /* The `onChange={(e) => setNombre(e.target.value)}` is an event handler that is
                triggered when the value of the input field with the id 'mascota' changes. */
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
              <input
                id='propietario'
                type="text"
                placeholder="Nombre del propietario"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email</label>
              <input
                id='email'
                type="email"
                placeholder="Email contacto propietario"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">Alta</label>
              <input
                id='alta'
                type="date"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Sintomas</label>
              <textarea
                id='sintomas'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder='Describe los sintomas'
              />
            </div>

            <input
              type='submit'
              className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
              value="Agregar Paciente"
            />
        </form>
    </div>
  )
}

export default Formulario
