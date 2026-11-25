export default function SearchSection() {
  return (

    <section className=" bg-gradient-to-r from-[#202734] via-[#293D40] to-[#295540]">
      <div className="mx-auto    max-w-7xl">
        <form action="/fushat"
          className="grid grid-cols-1 gap-4  border border-white/10 bg-[#36415A] p-4 shadow-2xl sm:grid-cols-2 sm:gap-5 sm:p-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end lg:gap-6">


          <div className="w-full mx-auto max-w-7xl">
            <label htmlFor="city"
              className="mb-2 block text-xs font-medium text-slate-300 mx-auto max-w-7xl">
              Qyteti
            </label>

            <select
              id="city"
              name="city"
              className="w-full  bg-[#202734] p-3 text-sm text-white outline-none transition focus:ring-2 focus:ring-[#B7D894]"
            >
              <option value="">All cities</option>
              <option value="Shkup">Shkup</option>
              <option value="Tetovë">Tetovë</option>
              <option value="Gostivar">Gostivar</option>
              <option value="Ohër">Ohër</option>
            </select>
          </div>


          <div className="w-full">
            <label
              htmlFor="type"
              className="mb-2 block text-xs font-medium text-slate-300"
            >
              Field type
            </label>

            <select
              id="type"
              name="type"
              className="w-full bg-[#202734] p-3 text-sm text-white outline-none transition focus:ring-2 focus:ring-[#B7D894]"
            >
              <option value="">All</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>


          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 bg-[#B7D894] px-8 py-3 text-sm font-bold text-[#202734] transition-all duration-300 hover:bg-[#E0F8C7] hover:scale-[1.02] sm:col-span-2 lg:col-span-1"
          >
            Search field
          </button>

        </form>
      </div>
    </section>



  )
}