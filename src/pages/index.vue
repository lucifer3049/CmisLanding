<template>
  <section class="home">
    <section class="landing-page">
      <div class="img" title="中程資訊首頁"></div>
      <div class=""></div>
    </section>
    <section class="about-us">
      <div class="row col-12">
        <div class="about-flex">
          <div class="about-card card">
            <div class="card-body">
              <h2 class="card-title mt-5 mt-lg-1">關於我們</h2>
              <p class="card-text">
                中程資訊顧問有限公司成立於1993年，自成立以來，秉持著突破創新、永續經營的理念，致力於設計營建業之ERP系統，為客戶提升企業管理效能。本公司在業界已成功協助上百家營建業客戶導入ERP，未來，我們將繼續深耕業界、發揮自身專業，為更多企業創造更大的效能。
              </p>
            </div>
          </div>
          <div class="about-img" title="關於中程資訊"></div>
        </div>
      </div>
    </section>
    <section class="project">
      <div class="software-cards-flex py-2 mt-2">
        <div class="row">
          <div class="card software-card col-xs-2 col-xl-8">
            <div class="card-body">
              <div class="row px-3 pb-2">
                <div class="col-12">
                  <img
                    class="card-title-img"
                    src="@/assets/img/icon/工務.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="col-12">
                  <h3 class="card-title text-center align-middle" id="Public">
                    工務
                  </h3>
                </div>
              </div>
              <p class="card-text">
                <router-link to="/product/publicworks/eestisys">
                  工程數量估算與造價分析
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/epurcsys">
                  預算採發估驗
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/pertsys">
                  工程進度進度與成本控制
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/echgsys">
                  工程變更追加減
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/qctlsys">
                  工程品質查核
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/steelsys">
                  鋼筋撿料
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/pt1">
                  公共工程施工日誌
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/pu1">
                  送審計畫與管理系統
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/pt2">
                  手機行動日報系統
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/qc2">
                  手機行動品質查核系統
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/publicworks/fm">
                  文件管理
                </router-link>
              </p>
            </div>
          </div>
          <div class="card software-card">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <img
                    class="card-title-img"
                    src="@/assets/img/icon/財務.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="col-12">
                  <h4 class="card-title">業務</h4>
                </div>
              </div>
              <p class="card-text">
                <router-link to="/product/business/dvepsys">
                  土地開發投資分析
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/business/psalesys">
                  銷售前置分析
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/business/salesys">
                  銷售管理
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/business/maintsys">
                  客戶服務管理
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/business/ma1"> 行動報修 </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/business/ma2"> 行動驗房 </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/business/rt"> 租賃管理 </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/business/rs">
                  預約時程發送簡訊
                </router-link>
              </p>
            </div>
          </div>
          <div class="card software-card">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <img
                    class="card-title-img"
                    src="@/assets/img/icon/業務.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="col-12">
                  <h4 class="card-title">財務</h4>
                </div>
              </div>
              <p class="card-text">
                <router-link to="/product/finance/acntsys">
                  會計管理
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/finance/cashsys">
                  出納作業
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/finance/taxapsys">
                  媒體申報
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/finance/persnsys">
                  人事薪資
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/finance/msiosys">
                  物料倉管
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/finance/plansys">
                  年度預算及費用請款
                </router-link>
              </p>
              <p class="card-text">
                <router-link to="/product/finance/tmgrsys">
                  高階簽核及查詢系統
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="process">
      <Pco />
    </section>
    <!-- <section class="partner">
      <div class="partner-title mb-4 mb-lg-1 mt-5">
        <h2>合作夥伴</h2>
      </div>
      <div class="row mx-auto">
        <div
          v-for="item in brand_list"
          :key="item"
          class="col-4 col-xs-4 col-sm-3 col-lg-2 my-auto"
        >
          <img :src="getImageUrl(item)" alt="" />
        </div>
      </div>
    </section> -->
  </section>
</template>


<script>
import Pco from "@/components/layout/Pco.vue";

export default {
  components: {
    Pco,
  },
  // methods: {
  //   getImageUrl(name) {
  //     return new URL(`/src/assets/img/brand/${name}.png`, import.meta.url).href;
  //   },
  // },
  created() {},
  // data() {
  //   return {
  //     brand_list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  //   };
  // },
};
</script>

<route>
{
  name: "Index",
}
</route>
