import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';

export const Formulario = ({ personas, setPersonas }) => {
  const [proyecto, setProyecto] = useState('');
  const [tipoTarea, setTipoTarea] = useState('');
  const [nombreDesarrollador, setNombreDesarrollador] = useState('');
  const [storyPoints, setStoryPoints] = useState(''); // Corregido el nombre
  const [prioridad, setPrioridad] = useState('');
  const [fecha, setFecha] = useState('');
  const [resumen, setResumen] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if ([proyecto, tipoTarea, nombreDesarrollador, storyPoints, prioridad, fecha, resumen].includes('')) {
      console.log('Hay al menos un campo vacío');
      setError(true);
      return;
    }

    setError(false);

    // Crea el objeto con los datos de la tarea
    const objetoPersonas = {
      proyecto,
      tipoTarea,
      nombreDesarrollador,
      storyPoints,
      prioridad,
      fecha,
      resumen
    };
    
    console.log(objetoPersonas);

    // Agregar la nueva tarea al listado
    setPersonas([...personas, objetoPersonas]);

    // Limpiar los campos
    setProyecto('');
    setTipoTarea('');
    setNombreDesarrollador('');
    setStoryPoints(''); // Corregido
    setPrioridad('');
    setFecha('');
    setResumen('');
  };

  return (
    <div className="w-1/2">
      <h2 className="text-3xl text-center">Lista de Tareas</h2>
      <p className="font-black text-lg mt-5 text-center mb-10">
        Añade Tareas y {''}
        <span className="text-green-600 font-bold">Adminístralas</span>
      </p>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error ? (
          <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">
            Todos los campos son obligatorios
          </p>
        ) : null}

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">
            Proyecto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="proyecto"
            type="text"
            placeholder="Proyecto"
            value={proyecto}
            onChange={(e) => setProyecto(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoTarea">
            Tipo de Tarea
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tipoTarea"
            type="text"
            placeholder="Tipo de Tarea"
            value={tipoTarea}
            onChange={(e) => setTipoTarea(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreDesarrollador">
            Nombre del Desarrollador
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombreDesarrollador"
            type="text"
            placeholder="Nombre del Desarrollador"
            value={nombreDesarrollador}
            onChange={(e) => setNombreDesarrollador(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">
            Story Points
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="storyPoints"
            type="text"
            placeholder="Story Points"
            value={storyPoints} // Corregido
            onChange={(e) => setStoryPoints(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">
            Prioridad
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prioridad"
            type="text"
            placeholder="Prioridad"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">
            Fecha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">
            Resumen
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resumen"
            type="text"
            placeholder="Resumen"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
          />
        </div>
        
        <ButtonGroup variant='outline' spacing='6'>
          <Button type="submit" colorScheme='blue'>Save</Button> {/* Usa type="submit" para enviar el formulario */}
          <Button type="reset">Cancel</Button> {/* Puedes agregar type="reset" si quieres limpiar el formulario */}
        </ButtonGroup>
      </form>
    </div>
  );
};

