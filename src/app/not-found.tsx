import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
  <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      404 — Not Found
    </h2>

    <p className="text-gray-600 mb-6">
      Could not find the requested resource
    </p>

    <Link
      href="/"
      className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
    >
      Return Home
    </Link>
  </div>
</div>
  )
}