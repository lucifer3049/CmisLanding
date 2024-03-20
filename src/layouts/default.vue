<template>
  <Navbar />
  <main id="main" class="nav-padding">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import { ref, watch } from "vue";

import { useRoute, useRouter } from "vue-router";

import CSidebarMenu from "@/components/layout/SidebarMenu.vue";

// Import component
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    CSidebarMenu,
    Loading,
    Navbar,
    Footer,
  },
  setup() {
    const vm = ref({
      sidebar: false,
      isLoading: false,
    });

    const route = useRoute();
    const router = useRouter();

    {
      // 監聽路由
      watch(
        route,
        (to) => {
          console.log(to.name);

          // if (to.name == "Index") {
          //   // document.getElementById("main").classList.add("no-nav-padding");
          // } else {
          //   // this.$refs.main.classList.remove("no-nav-padding");
          //   // document.getElementById("main").classList.remove("no-nav-padding");
          // }
        },
        { flush: "pre", immediate: true, deep: true }
      );
    }

    return { vm };
  },
};
</script>