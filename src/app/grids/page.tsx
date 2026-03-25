export default function Grids() {
  return (
    <div>
      <h2>Grids</h2>
      <h3>Basic grid example</h3>
      <div className="bg-pink-200 p-3 grid grid-cols-6 gap-2">
        <div className="bg-white col-span-3 min-h-10">1</div>
        <div className="bg-white col-span-3 min-h-10">2</div>
        <div className="bg-white col-span-5 min-h-10">3</div>
        <div className="bg-white col-span-1 min-h-10">4</div>
        <div className="bg-white col-span-4 col-start-2 min-h-10">5</div>
      </div>

      <h2>Breakpoint</h2>
      <div className="w-32 sm:w-74 md:w-100 bg-amber-300">A</div>

      <h2>Flexible design with grids</h2>

      <div className="bg-blue-300 grid grid-cols-4 gap-2 p-2">
        <div className="bg-white col-span-4 md:col-end-3">1</div>
        <div className="bg-white col-span-4 md:col-end-1">2</div>
      </div>
    </div>
  );
}
