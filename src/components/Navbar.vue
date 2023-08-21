<template>
  <div class="navbar bg-emerald-500 text-white lg:px-20 sm:px-4">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-emerald-500 rounded-box w-52"
        >
          <li tabindex="0">
            <details>
              <summary class="font-semibold">PROFIL</summary>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li tabindex="0">
            <details>
              <summary class="font-semibold">INFORMASI</summary>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li tabindex="0">
            <details>
              <summary class="font-semibold">KONTAK</summary>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <span class="flex justify-center items-center font-bold text-xl"
        ><img src="../assets/upp.png" alt="logo" class="w-12" /><a href="/"
          >Universitas Pat Petulai</a
        ></span
      >
    </div>

    <div class="navbar-end hidden lg:flex navbar-desktop">
      <ul class="menu menu-horizontal px-1 flex gap-10">
        <li tabindex="0">
          <summary class="font-semibold"><a href="/">BERANDA</a></summary>
        </li>
        <li tabindex="0">
          <details>
            <summary class="font-semibold">PROFIL</summary>
            <ul class="p-2 bg-emerald-500">
              <li><a href="/sejarah">Sejarah</a></li>
              <li><a href="/visimisi">Visi Misi</a></li>
              <li><a href="/dosen">Dosen</a></li>
            </ul>
          </details>
        </li>
        <li tabindex="1">
          <details>
            <summary class="font-semibold">INFORMASI</summary>
            <ul class="p-2 bg-emerald-500">
              <li><a href="/berita">Berita</a></li>
              <li><a href="/beasiswa">Beasiswa</a></li>
            </ul>
          </details>
        </li>
        <li tabindex="3">
          <details>
            <summary class="font-semibold">AKADEMIK</summary>
            <ul class="p-2 bg-emerald-500">
              <li><a href="/rps">RPS</a></li>
              <li><a href="/jadwal">Jadwal Kuliah</a></li>
              <li><a href="/">Matakuliah Kuliah</a></li>
              <li><a href="/">Jumblah Mahasiswa</a></li>
            </ul>
          </details>
        </li>
        <li tabindex="2">
          <summary class="font-semibold">KONTAK</summary>
        </li>
      </ul>
    </div>

    <!-- <div class="navbar-end flex gap-2">
      <a class="btn font-bold">Login</a>
      <a class="btn font-bold bg-slate-100">Register</a>
    </div> -->
  </div>
</template>

<style scoped>
.navbar-desktop {
  z-index: 999;
}
</style>
