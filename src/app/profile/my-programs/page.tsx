

const programs = ["React Basics", "Next.js Mastery", "TypeScript Pro"];

export default function MyProgramsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Programs</h1>

      <ul className="space-y-2 max-w-md">
        {programs.map((program, index) => (
          <li key={index} className="p-3 border rounded-sm hover:bg-gray-50">
            {program}
          </li>
        ))}
      </ul>
    </div>
  );
}
