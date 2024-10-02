export const Personas = ({ personas }) => {
    return (
      <div>
        <p><strong>Proyecto:</strong> {personas.proyecto}</p>
        <p><strong>Desarrollador:</strong> {personas.nombreDesarrollador}</p>
        <p><strong>Story Points:</strong> {personas.storyPoints}</p>
        <p><strong>Prioridad:</strong> {personas.prioridad}</p>
        <p><strong>Resumen:</strong> {personas.resumen}</p>
      </div>
    );
  };
  