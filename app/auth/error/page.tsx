import Link from "next/link";

// app/auth/error/page.tsx
export default async function AuthError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-red-600">
          Error de Autenticación
        </h1>
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
          <p className="text-red-800">
            <strong>Error:</strong> {params?.error || "Error desconocido"}
          </p>
        </div>

        {params?.error === "AccessDenied" && (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
            <p className="text-blue-800 text-sm">
              <strong>Posibles soluciones:</strong>
            </p>
            <ul className="text-blue-700 text-sm mt-2 space-y-1">
              <li>• Verifica tu configuración de CORS en Sanity</li>
              <li>• Revisa las variables de entorno</li>
              <li>
                • Asegúrate de que tu app GitHub OAuth esté configurada
                correctamente
              </li>
            </ul>
          </div>
        )}

        <div className="flex space-x-3">
          <Link
            href="/"
            className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Volver al inicio
          </Link>{" "}
          <Link
            href="/api/auth/signin"
            className="flex-1 text-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Intentar de nuevo
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
