<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand logo" href="/">
        <h1>CMIS</h1>
      </a>

      <a class="navbar-brand slogan" href="/">
        <div>整合營建管理資訊系統</div>
        <div>提升企業經營管理效能</div>
      </a>

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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品介紹</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/client">合作夥伴</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/planning">系統規劃</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於中程</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/media">媒體資訊</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/download.html">檔案下載</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


