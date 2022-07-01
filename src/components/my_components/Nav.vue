<script></script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-3 mb-lg-0">
          <li class="nav-item p-2">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="/favorites">Favoritos</a>
          </li>
        </ul>
      </div>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-warning text-light" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  font-family: 'Goudy Bookletter 1911', serif;
  font-size: x-large;
}
</style>
