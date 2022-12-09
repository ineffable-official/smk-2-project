export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-auto h-[64px] px-16 flex items-center border-b-[1px] border-[rgba(0,0,0,0.075)]">
        <div className="w-auto h-auto">SMK2PROJECT</div>
        <div className="w-[96px] h-10 ml-auto bg-blue-500 flex items-center justify-center text-white font-medium rounded-lg">
          Masuk
        </div>
      </div>
      <div className="w-auto h-auto px-16 py-8">
        <form className="my-4">
          <div className="w-fit rounded-xl flex gap-2 p-2 bg-[rgba(0,0,0,0.05)]">
            <input
              type="search"
              name="s"
              id="search"
              placeholder="Cari nama siswa"
              className="w-[300px] h-10 px-4 rounded-xl outline-none text-sm font-medium"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-xl hover:bg-[rgba(0,0,0,0.075)]"
            >
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
        </form>
        <div className="w-full h-auto">
          <div className="w-full h-auto flex border-b-[1px] border-[rgba(0,0,0,0.075)]">
            <div className="min-w-[124px] h-auto p-4 flex items-center justify-center">
              Peringkat
            </div>
            <div className="min-w-[148px] h-auto p-4 flex items-center justify-center"></div>
            <div className="w-full h-auto p-4 flex items-center justify-center">
              Nama Lengkap
            </div>
            <div className="min-w-[124px] h-auto p-4 flex items-center justify-center">
              NISN
            </div>
            <div className="min-w-[124px] h-auto p-4 flex items-center justify-center">
              NIS
            </div>
            <div className="min-w-[124px] h-auto p-4 flex items-center justify-center">
              Status
            </div>
            <div className="min-w-[200px] h-auto p-4 flex items-center justify-center">
              Rata-rata
            </div>
          </div>
          <div className="w-full h-auto flex flex-col">
            <div className="w-full h-auto flex text-sm border-b-[1px] border-[rgba(0,0,0,0.05)] hover:shadow-standard">
              <div className="min-w-[124px] h-auto p-4 flex items-center justify-center">
                1
              </div>
              <div className="min-w-[148px] h-auto p-4 flex items-center justify-center">
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/512/512"
                    width="512"
                    height="512"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full h-auto p-4 flex items-center justify-center">
                Muhamad Faizun Musthofa
              </div>
              <div className="min-w-[124px] h-auto p-4 flex items-center justify-center">
                006978623
              </div>
              <div className="min-w-[124px] h-auto p-4 flex items-center justify-center">
                20669473
              </div>
              <div className="min-w-[124px] h-auto p-4 flex items-center justify-center text-green-500">
                Lulus
              </div>
              <div className="min-w-[200px] h-auto p-4 flex items-center justify-center">
                80,96
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
