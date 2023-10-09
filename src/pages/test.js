// pages/test.js
import { useEffect, useState } from 'react';
import db from '../../lib/db';


export default function TestPage() {
  const [testResult, setTestResult] = useState(null);

  useEffect(() => {
    // Función asincrónica para probar la conexión a la base de datos
    const testDatabaseConnection = async () => {
      try {
        // Realiza una consulta simple para probar la conexión
        const [rows] = await db.query('SELECT 1');
        setTestResult('La conexión a la base de datos es exitosa.');
      } catch (error) {
        setTestResult('Error de conexión a la base de datos: ' + error.message);
      }
    };

    // Llama a la función para probar la conexión cuando la página se carga
    testDatabaseConnection();
  }, []);

  return (
    <div>
      <h1>Página de prueba de conexión a la base de datos</h1>
      <p>{testResult}</p>
    </div>
  );
}
