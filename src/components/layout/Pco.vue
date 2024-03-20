<template>
  <div class="col-10 col-md-10 mx-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      overflow="hidden"
      viewBox="0 0 983 1701"
      alt="中程系統流程圖"
    >
      <defs>
        <clipPath id="clip0">
          <rect x="0" y="0" width="983" height="1701" />
        </clipPath>
        <clipPath id="clip1">
          <rect
            x="-0.0315361"
            y="-8517.84"
            width="1.04739e+06"
            height="1.04765e+06"
          />
        </clipPath>
        <image
          width="128"
          height="128"
          xlink:href="data:image/png;base64,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"
          preserveAspectRatio="none"
          id="img2"
        ></image>
        <clipPath id="clip3">
          <rect x="0" y="0" width="1.03787e+06" height="1.03787e+06" />
        </clipPath>
        <clipPath id="clip4">
          <rect x="-0.266531" y="-8043.03" width="647480" height="657161" />
        </clipPath>
        <image
          width="128"
          height="128"
          xlink:href="data:image/png;base64,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"
          preserveAspectRatio="none"
          id="img5"
        ></image>
        <clipPath id="clip6">
          <path
            d="M-0.0234375 0.302021 647480 0.302021 647480 647480 0 647480Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#clip0)">
        <rect x="0" y="0" width="983" height="1700.59" fill="#FFFFFF" />
        <rect
          x="2.00005"
          y="502.879"
          width="983"
          height="296.928"
          fill="#F2F2F2"
        />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="24"
          transform="matrix(1 0 0 0.999759 20.8223 50)"
          id="flow"
        >
          流程圖
          <tspan font-size="24" x="73.4895" y="824.199" id="cmis">
            中程的優勢
          </tspan>
        </text>
        <path
          d="M138 1268.19 174.9 1238.68 174.9 1260.82 499.62 1260.82 499.62 935.674 477.48 935.674 507 898.783 536.52 935.674 514.38 935.674 514.38 1260.82 839.1 1260.82 839.1 1238.68 876 1268.19 839.1 1297.71 839.1 1275.57 514.38 1275.57 514.38 1600.71 536.52 1600.71 507 1637.6 477.48 1600.71 499.62 1600.71 499.62 1275.57 174.9 1275.57 174.9 1297.71Z"
          fill="#D4D4D4"
          fill-rule="evenodd"
        />
        <path
          d="M186.5 996.427C186.5 969.279 208.513 947.271 235.668 947.271L432.332 947.271C459.487 947.271 481.5 969.279 481.5 996.427L481.5 1194.04C481.5 1221.19 459.487 1243.2 432.332 1243.2L235.668 1243.2C208.513 1243.2 186.5 1221.19 186.5 1194.04Z"
          stroke="#FFFFFF"
          stroke-width="1.33379"
          stroke-miterlimit="8"
          fill="#1F4E79"
          fill-rule="evenodd"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="27"
          transform="matrix(1 0 0 0.999759 293.362 1000)"
        >
          整合性
          <tspan font-weight="400" font-size="16" x="-85.2956" y="45.0109">
            •
          </tspan>
          <tspan font-size="16" x="-73.2915" y="45.0109">
            提供營建業完整資訊系統：
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="70.0169">
            從成本估算、業務報價、成交後
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="95.0229">
            編預算、進度管理、採發估驗、
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="120.029">
            工程日報、估驗請款、連結會計
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="145.035">
            轉帳傳票、出納付款作業及媒體
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="170.041">
            申報等資訊完全整合，避免重複
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="194.047">
            作業，浪費人力。
          </tspan>
        </text>
        <path
          d="M533.5 996.427C533.5 969.279 555.513 947.271 582.668 947.271L779.332 947.271C806.487 947.271 828.5 969.279 828.5 996.427L828.5 1194.04C828.5 1221.19 806.487 1243.2 779.332 1243.2L582.668 1243.2C555.513 1243.2 533.5 1221.19 533.5 1194.04Z"
          stroke="#FFFFFF"
          stroke-width="1.33379"
          stroke-miterlimit="8"
          fill="#18606C"
          fill-rule="evenodd"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="27"
          transform="matrix(1 0 0 0.999759 640.551 1000)"
        >
          專業性
          <tspan font-weight="400" font-size="16" x="-85.2956" y="45.0109">
            •
          </tspan>
          <tspan font-size="16" x="-73.2915" y="45.0109">公司成立</tspan>
          <tspan font-size="16" x="-5.26843" y="45.0109">2</tspan>
          <tspan font-size="16" x="8.26947" y="45.0109">9</tspan>
          <tspan font-size="16" x="21.8074" y="45.0109">年專業研發營建業</tspan>
          <tspan font-size="16" x="-73.2915" y="70.0169">資訊系統：</tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="95.0229">
            與業界知名建設、營造公司有多
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="120.029">
            年合作經驗，熟悉營建業工程管
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="145.035">
            理運作流程，
          </tspan>
          <tspan font-weight="400" font-size="16" x="22.7411" y="145.035">
            提供客戶標準化及
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="170.041">
            效率化的管理資訊系統。
          </tspan>
        </text>
        <path
          d="M186.5 1344.34C186.5 1317.2 208.513 1295.19 235.668 1295.19L432.332 1295.19C459.487 1295.19 481.5 1317.2 481.5 1344.34L481.5 1540.96C481.5 1568.11 459.487 1590.12 432.332 1590.12L235.668 1590.12C208.513 1590.12 186.5 1568.11 186.5 1540.96Z"
          stroke="#FFFFFF"
          stroke-width="1.33379"
          stroke-miterlimit="8"
          fill="#BF9000"
          fill-rule="evenodd"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="27"
          transform="matrix(1 0 0 0.999759 293.362 1347)"
        >
          方便性
          <tspan font-weight="400" font-size="16" x="-85.2956" y="45.0109">
            •
          </tspan>
          <tspan font-size="16" x="-73.2915" y="45.0109">
            結合手機操作的便利性：
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="70.0169">
            透過網路，公司本部可與遠端工
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="95.0229">
            地、接待中心及辦事處等直接連
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="120.029">
            線，再配合手機版的運用，隨時
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="145.035">
            可登入系統進行相關業務操作。
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="170.041">
            疫情嚴重期間可居家連線上班，
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="194.047">
            讓公司業務順利進行。
          </tspan>
        </text>
        <path
          d="M533.5 1344.34C533.5 1317.2 555.513 1295.19 582.668 1295.19L779.332 1295.19C806.487 1295.19 828.5 1317.2 828.5 1344.34L828.5 1540.96C828.5 1568.11 806.487 1590.12 779.332 1590.12L582.668 1590.12C555.513 1590.12 533.5 1568.11 533.5 1540.96Z"
          stroke="#FFFFFF"
          stroke-width="1.33379"
          stroke-miterlimit="8"
          fill="#1A4A6A"
          fill-rule="evenodd"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="27"
          transform="matrix(1 0 0 0.999759 640.551 1347)"
        >
          完整性
          <tspan font-weight="400" font-size="16" x="-85.2956" y="45.0109">
            •
          </tspan>
          <tspan font-size="16" x="-73.2915" y="45.0109">
            營建業所需功能完整涵蓋：
          </tspan>
          <tspan font-weight="400" font-size="16" x="118.774" y="45.0109">
            多年
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="70.0169">
            來與多家大型客戶長期配合，完
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="95.0229">
            整發展出業界所需的
          </tspan>
          <tspan font-weight="400" font-size="16" x="74.7587" y="95.0229">
            EXCEL
          </tspan>
          <tspan font-weight="400" font-size="16" x="124.982" y="95.0229">
            及其
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="120.029">
            他表單，專門解決公司複雜的工
          </tspan>
          <tspan font-weight="400" font-size="16" x="-73.2915" y="145.035">
            作流程。
          </tspan>
        </text>
        <rect x="64" y="552.867" width="148" height="212.949" fill="#DBDBDB" />
        <rect x="0" y="83.9798" width="983" height="303.927" fill="#F2F2F2" />
        <rect x="17" y="128.969" width="93" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 31.1475 146)"
        >
          土地開發
          <tspan font-size="16" x="0" y="19.0046">投資分析</tspan>
          <tspan font-size="16" x="8.00272" y="38.0092">總預算</tspan>
        </text>
        <rect x="133" y="128.969" width="196" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 198.676 156)"
        >
          銷售前置
          <tspan font-size="16" x="-16.0054" y="19.0046">來人來電分析</tspan>
        </text>
        <path
          d="M110.5 159.128 128.115 159.128 128.115 159.795 110.5 159.795ZM126.781 155.461 134.784 159.462 126.781 163.462Z"
          fill="#18606C"
        />
        <rect x="353" y="128.969" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 366.595 156)"
        >
          房屋銷售
          <tspan font-size="16" x="0" y="19.0046">銷售分析</tspan>
        </text>
        <rect x="469" y="128.969" width="141" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 507.423 156)"
        >
          客戶服務
          <tspan font-size="16" x="-24.0081" y="19.0046">繳款通知及催繳</tspan>
        </text>
        <rect x="634" y="128.969" width="104" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 654.231 156)"
        >
          出納作業
          <tspan font-size="16" x="-8.00269" y="19.0046">收款及確認</tspan>
        </text>
        <rect x="762" y="128.969" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 775.928 166)"
        >
          會計轉帳
        </text>
        <rect x="878" y="127.969" width="91" height="61.985" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 891.278 165)"
        >
          交屋結算
        </text>
        <path
          d="M329.5 160.128 347.115 160.128 347.115 160.795 329.5 160.795ZM345.781 156.461 353.784 160.461 345.781 164.462Z"
          fill="#18606C"
        />
        <path
          d="M444.5 159.128 462.115 159.128 462.115 159.795 444.5 159.795ZM460.781 155.461 468.784 159.462 460.781 163.462Z"
          fill="#18606C"
        />
        <path
          d="M610.5 159.128 628.115 159.128 628.115 159.795 610.5 159.795ZM626.781 155.461 634.784 159.462 626.781 163.462Z"
          fill="#18606C"
        />
        <path
          d="M738.5 158.128 756.115 158.129 756.115 158.795 738.5 158.795ZM754.781 154.462 762.784 158.462 754.781 162.462Z"
          fill="#18606C"
        />
        <path
          d="M853.5 158.128 871.115 158.129 871.115 158.795 853.5 158.795ZM869.781 154.462 877.784 158.462 869.781 162.462Z"
          fill="#4472C4"
        />
        <path
          d="M539.167 128.773 539.167 104.133 923.688 104.133 923.688 121.802 923.021 121.802 923.021 104.467 923.354 104.8 539.5 104.8 539.833 104.467 539.833 128.773ZM927.355 120.468 923.354 128.469 919.353 120.468Z"
          fill="#18606C"
        />
        <rect x="134" y="220.947" width="130" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 166.906 248)"
        >
          工程估算
          <tspan font-size="16" x="-16.0054" y="19.0046">營建成本估算</tspan>
        </text>
        <path
          d="M0-0.333366 61.6364-0.333366 61.6364 63.9601 60.9696 63.9601 60.9696 0 61.303 0.333366 0 0.333366ZM65.3034 62.6266 61.303 70.6274 57.3026 62.6266Z"
          fill="#18606C"
          transform="matrix(1.83741e-16 1 1.00024 -1.83697e-16 63.5 190.454)"
        />
        <path
          d="M264.5 251.106 282.115 251.106 282.115 251.773 264.5 251.773ZM280.781 247.439 288.784 251.439 280.781 255.44Z"
          fill="#4472C4"
        />
        <rect x="288" y="220.947" width="196" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 354.153 248)"
        >
          執行預算
          <tspan font-size="16" x="-40.0136" y="19.0046">
            廣告費用、營建成本
          </tspan>
        </text>
        <path
          d="M484.5 251.106 502.115 251.106 502.115 251.773 484.5 251.773ZM500.781 247.439 508.784 251.439 500.781 255.44Z"
          fill="#4472C4"
        />
        <rect x="508" y="220.947" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 521.82 258)"
        >
          採購發包
        </text>
        <path
          d="M599.5 251.106 617.115 251.106 617.115 251.773 599.5 251.773ZM615.781 247.439 623.784 251.439 615.781 255.44Z"
          fill="#18606C"
        />
        <rect x="624" y="220.947" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 637.169 258)"
        >
          估驗請款
        </text>
        <path
          d="M0-0.333366 33.2906-0.333366 33.2906 61.6066 32.9572 61.2732 59.2471 61.2732 59.2471 61.9399 32.6238 61.9399 32.6238 0 32.9572 0.333366 0 0.333366ZM57.9136 57.6062 65.9144 61.6066 57.9136 65.6069Z"
          fill="#18606C"
          transform="matrix(1.00024 0 0 -1 715.5 252.061)"
        />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="13"
          writing-mode="tb-rl"
          transform="matrix(1.00024 -1.47655e-20 -1.47641e-20 0.999518 726.532 194)"
          x="5.33709"
          y="1.16218"
        >
          自動轉帳
        </text>
        <rect x="762" y="220.947" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 775.928 258)"
        >
          人事薪資
        </text>
        <path
          d="M0.333366-1.14195e-06 0.333448 23.9841-0.333284 23.9841-0.333366 1.14195e-06ZM4.00047 22.6506 0.000104997 30.6514-4.00031 22.6506Z"
          fill="#18606C"
          transform="matrix(1.00024 0 0 -1 808.5 221.105)"
        />
        <rect x="878" y="219.947" width="91" height="61.9851" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 891.278 248)"
        >
          工程修繕
          <tspan font-size="16" x="16.0054" y="19.0046">管理</tspan>
        </text>
        <path
          d="M0.333366-1.13633e-06 0.333448 24.1358-0.333284 24.1358-0.333366 1.13633e-06ZM4.00047 22.8023 0.000104997 30.8031-4.00031 22.8024Z"
          fill="#18606C"
          transform="matrix(-1.00024 0 0 1 923.5 190.454)"
        />
        <rect x="18" y="358.913" width="195" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 48.1574 386)"
        >
          工程進度/
          <tspan font-size="16" x="71.0241" y="0">成本專案</tspan>
          <tspan font-size="16" x="35.512" y="19.0046">管制中心</tspan>
        </text>
        <rect x="424" y="403.903" width="142" height="61.9851" fill="#1F4E79" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="19"
          transform="matrix(1 0 0 0.999759 459.133 430)"
        >
          Internet
          <tspan font-size="19" x="15.9987" y="23.0055">VPN</tspan>
        </text>
        <path
          d="M275.833 197.121 275.833 199.788 275.167 199.788 275.167 197.121ZM275.833 201.789 275.833 204.455 275.167 204.455 275.167 201.789ZM275.833 206.456 275.833 209.123 275.167 209.123 275.167 206.456ZM275.833 211.123 275.833 213.79 275.167 213.79 275.167 211.123ZM275.833 215.79 275.833 218.457 275.167 218.457 275.167 215.79ZM275.833 220.457 275.833 223.124 275.167 223.124 275.167 220.457ZM275.833 225.124 275.833 227.791 275.167 227.791 275.167 225.124ZM275.833 229.791 275.833 232.458 275.167 232.458 275.167 229.791ZM275.833 234.458 275.833 237.125 275.167 237.125 275.167 234.458ZM275.833 239.125 275.833 241.792 275.167 241.792 275.167 239.125ZM275.833 243.793 275.833 246.46 275.167 246.46 275.167 243.793ZM275.833 248.46 275.833 251.127 275.167 251.127 275.167 248.46ZM275.833 253.127 275.833 255.794 275.167 255.794 275.167 253.127ZM275.833 257.794 275.833 260.461 275.167 260.461 275.167 257.794ZM275.833 262.461 275.833 265.128 275.167 265.128 275.167 262.461ZM275.834 267.128 275.834 269.795 275.167 269.795 275.167 267.128ZM275.834 271.795 275.834 274.462 275.167 274.462 275.167 271.795ZM275.834 276.462 275.834 279.129 275.167 279.129 275.167 276.462ZM275.834 281.13 275.834 283.797 275.167 283.797 275.167 281.13ZM275.834 285.797 275.834 288.464 275.167 288.464 275.167 285.797ZM275.834 290.464 275.834 293.131 275.167 293.131 275.167 290.464ZM275.834 295.131 275.834 297.798 275.167 297.798 275.167 295.131ZM275.834 299.798 275.834 302.465 275.167 302.465 275.167 299.798ZM275.834 304.465 275.834 307.132 275.167 307.132 275.167 304.465ZM275.834 309.132 275.834 311.799 275.167 311.799 275.167 309.132ZM275.834 313.799 275.834 316.466 275.167 316.466 275.167 313.799ZM275.834 318.467 275.834 321.134 275.167 321.134 275.167 318.467ZM275.834 323.134 275.834 325.801 275.167 325.801 275.167 323.134ZM275.834 327.801 275.834 330.468 275.167 330.468 275.167 327.801ZM275.834 332.468 275.834 335.135 275.167 335.135 275.167 332.468ZM275.834 337.135 275.834 339.802 275.167 339.802 275.167 337.135ZM275.834 341.802 275.834 344.469 275.167 344.469 275.167 341.802ZM275.834 346.469 275.834 349.136 275.167 349.136 275.167 346.469ZM275.834 351.136 275.834 353.803 275.167 353.803 275.167 351.136ZM275.834 355.804 275.834 358.471 275.167 358.471 275.167 355.804ZM275.834 360.471 275.834 363.138 275.167 363.138 275.167 360.471ZM275.834 365.138 275.834 367.805 275.167 367.805 275.167 365.138ZM275.834 369.805 275.834 372.472 275.167 372.472 275.167 369.805ZM275.834 374.472 275.834 377.139 275.167 377.139 275.167 374.472ZM275.834 379.139 275.834 381.806 275.167 381.806 275.167 379.139ZM275.834 383.806 275.834 386.473 275.167 386.473 275.167 383.806ZM275.834 388.473 275.834 391.14 275.167 391.14 275.167 388.473ZM275.834 393.141 275.834 395.807 275.167 395.807 275.167 393.141ZM275.834 397.808 275.834 400.475 275.167 400.475 275.167 397.808ZM275.834 402.475 275.834 405.142 275.167 405.142 275.167 402.475ZM275.834 407.142 275.834 409.809 275.167 409.809 275.167 407.142ZM275.834 411.809 275.834 414.476 275.167 414.476 275.167 411.809ZM275.834 416.476 275.834 419.143 275.167 419.143 275.167 416.476ZM271.499 198.455 275.5 190.454 279.501 198.455Z"
          fill="#18606C"
        />
        <path
          d="M273.5 420.065 278.835 420.065 278.835 420.732 273.5 420.732ZM280.836 420.065 286.171 420.065 286.171 420.732 280.836 420.732ZM288.172 420.065 293.507 420.065 293.507 420.732 288.172 420.732ZM295.507 420.065 300.843 420.065 300.843 420.732 295.507 420.732ZM302.843 420.065 308.178 420.065 308.178 420.732 302.843 420.732ZM310.179 420.065 315.514 420.065 315.514 420.732 310.179 420.732ZM317.515 420.065 322.85 420.065 322.85 420.732 317.515 420.732ZM324.851 420.065 330.186 420.065 330.186 420.732 324.851 420.732ZM332.187 420.065 337.522 420.065 337.522 420.732 332.187 420.732ZM339.522 420.065 344.858 420.065 344.858 420.732 339.522 420.732ZM346.858 420.065 352.193 420.065 352.193 420.732 346.858 420.732ZM354.194 420.065 359.529 420.065 359.529 420.732 354.194 420.732ZM361.53 420.065 366.865 420.065 366.865 420.732 361.53 420.732ZM368.866 420.065 374.201 420.065 374.201 420.732 368.866 420.732ZM376.201 420.065 381.537 420.065 381.537 420.732 376.201 420.732ZM383.537 420.065 388.872 420.065 388.872 420.732 383.537 420.732ZM390.873 420.065 396.208 420.065 396.208 420.732 390.873 420.732ZM398.209 420.065 403.544 420.065 403.544 420.732 398.209 420.732ZM405.545 420.065 410.88 420.065 410.88 420.732 405.545 420.732ZM412.881 420.065 417.479 420.065 417.479 420.732 412.881 420.732ZM416.145 416.398 424.148 420.399 416.145 424.399Z"
          fill="#4472C4"
        />
        <path
          d="M0 0 0.000104997 15.098"
          stroke="#18606C"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          stroke-dasharray="5.33386 2.0002"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(-1.00024 0 0 1 399.5 190.454)"
        />
        <path
          d="M399.5 205.45 495.946 205.451"
          stroke="#18606C"
          stroke-width="0.666893"
          stroke-miterlimit="8"
          stroke-dasharray="5.33514 2.00068"
          fill="none"
          fill-rule="evenodd"
        />
        <path
          d="M495.833 205.45 495.833 210.784 495.167 210.784 495.167 205.45ZM495.833 212.785 495.833 218.118 495.167 218.118 495.167 212.785ZM495.833 220.119 495.833 225.452 495.167 225.452 495.167 220.119ZM495.833 227.453 495.833 232.786 495.167 232.786 495.167 227.453ZM495.833 234.787 495.833 240.121 495.167 240.121 495.167 234.787ZM495.833 242.121 495.833 247.455 495.167 247.455 495.167 242.121ZM495.833 249.455 495.833 254.789 495.167 254.789 495.167 249.455ZM495.833 256.789 495.833 262.123 495.167 262.123 495.167 256.789ZM495.833 264.123 495.833 269.457 495.167 269.457 495.167 264.123ZM495.833 271.457 495.833 276.791 495.167 276.791 495.167 271.457ZM495.833 278.791 495.833 284.125 495.167 284.125 495.167 278.791ZM495.833 286.125 495.833 291.459 495.167 291.459 495.167 286.125ZM495.833 293.459 495.833 298.793 495.167 298.793 495.167 293.459ZM495.833 300.793 495.833 306.127 495.167 306.127 495.167 300.793ZM495.833 308.127 495.833 313.461 495.167 313.461 495.167 308.127ZM495.833 315.461 495.833 320.795 495.167 320.795 495.167 315.461ZM495.833 322.795 495.833 328.129 495.167 328.129 495.167 322.795ZM495.834 330.129 495.834 335.463 495.167 335.463 495.167 330.129ZM495.834 337.463 495.834 342.797 495.167 342.797 495.167 337.463ZM495.834 344.797 495.834 350.131 495.167 350.131 495.167 344.797ZM495.834 352.132 495.834 357.465 495.167 357.465 495.167 352.132ZM495.834 359.466 495.834 364.799 495.167 364.799 495.167 359.466ZM495.834 366.8 495.834 372.133 495.167 372.133 495.167 366.8ZM495.834 374.134 495.834 379.468 495.167 379.468 495.167 374.134ZM495.834 381.468 495.834 386.802 495.167 386.802 495.167 381.468ZM495.834 388.802 495.834 394.136 495.167 394.136 495.167 388.802ZM495.834 396.136 495.834 397.929 495.167 397.929 495.167 396.136ZM499.501 396.596 495.5 404.596 491.499 396.596Z"
          fill="#18606C"
        />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="21"
          transform="matrix(1 0 0 0.999759 19.419 110)"
        >
          企業內部網路
          <tspan font-size="21" x="9.65997" y="424.102">遠端</tspan>
          連線
          <tspan font-size="13" x="374.967" y="189.046">工程結算</tspan>
        </text>
        <rect
          x="88"
          y="582.859"
          width="92.9999"
          height="60.9853"
          fill="#18606C"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 102.345 610)"
        >
          來人來電
          <tspan font-size="16" x="16.0054" y="19.0046">記錄</tspan>
        </text>
        <rect
          x="88"
          y="661.84"
          width="92.9999"
          height="61.985"
          fill="#18606C"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 102.345 689)"
        >
          客戶預約
          <tspan font-size="16" x="16.0054" y="19.0046">訂購</tspan>
        </text>
        <rect x="100" y="749.819" width="76" height="31.9922" fill="#FFD966" />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="19"
          transform="matrix(1 0 0 0.999759 109.678 772)"
        >
          接待所
        </text>
        <rect x="854" y="48.9882" width="108" height="44.9891" fill="#1F4E79" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 867.924 78)"
        >
          共同資料庫
        </text>
        <g
          clip-path="url(#clip1)"
          transform="matrix(0.000105022 0 0 0.000104997 857 437.894)"
        >
          <g
            clip-path="url(#clip3)"
            transform="matrix(1 0 0 1 -0.174805 0.0282813)"
          >
            <use
              width="100%"
              height="100%"
              xlink:href="#img2"
              transform="scale(8108.38 8108.38)"
            ></use>
          </g>
        </g>
        <rect x="625" y="294.929" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 638.718 322)"
        >
          年度預算
          <tspan font-size="16" x="0" y="19.0046">費用請款</tspan>
        </text>
        <rect x="762" y="294.929" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 775.928 332)"
        >
          租賃管理
        </text>
        <rect x="879" y="294.929" width="91" height="60.9853" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 892.753 322)"
        >
          大樓備料
          <tspan font-size="16" x="0" y="19.0046">財產設備</tspan>
        </text>
        <rect
          x="19"
          y="427.897"
          width="92.9999"
          height="34.9916"
          fill="#18606C"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 33.5622 452)"
        >
          文件管理
        </text>
        <rect x="117" y="426.897" width="92" height="34.9916" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 131.101 451)"
        >
          簽核系統
        </text>
        <path
          d="M0-0.333366 135.53-0.333366 135.53 555.234 134.863 555.234 134.863 0 135.197 0.333366 0 0.333366ZM139.197 553.901 135.197 561.902 131.196 553.901Z"
          fill="#18606C"
          transform="matrix(1.83741e-16 1 1.00024 -1.83697e-16 63.5 190.454)"
        />
        <path
          d="M0 0 15.0959 0 15.0959 71.9463"
          stroke="#18606C"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(1.00024 0 0 -1 716.5 325.385)"
        />
        <path
          d="M762.545 325.907 731.167 325.907 731.167 260.106 731.833 260.106 731.833 325.574 731.5 325.24 762.545 325.24ZM727.499 261.44 731.5 253.439 735.501 261.44Z"
          fill="#18606C"
        />
        <path
          d="M879.26 326.154 866.046 326.154 866.046 159.462 866.38 159.795 860.169 159.795 860.169 159.128 866.713 159.128 866.713 325.821 866.38 325.487 879.26 325.487ZM861.503 163.462 853.5 159.462 861.503 155.461Z"
          fill="#18606C"
        />
        <path
          d="M551.444 285.431 551.444 290.765 550.777 290.765 550.777 285.431ZM551.444 292.765 551.444 298.099 550.777 298.099 550.777 292.765ZM551.444 300.099 551.444 305.433 550.777 305.433 550.777 300.099ZM551.444 307.433 551.444 312.767 550.777 312.767 550.777 307.433ZM551.444 314.767 551.444 320.101 550.777 320.101 550.777 314.767ZM551.444 322.101 551.444 327.435 550.777 327.435 550.777 322.101ZM551.444 329.435 551.444 334.769 550.777 334.769 550.777 329.435ZM551.444 336.769 551.444 342.103 550.777 342.103 550.777 336.769ZM551.444 344.103 551.444 345.469 546.808 345.469 546.808 344.802 551.111 344.802 550.777 345.135 550.777 344.103ZM544.807 345.469 539.472 345.469 539.472 344.802 544.807 344.802ZM537.471 345.469 532.136 345.469 532.136 344.802 537.471 344.802ZM530.135 345.469 524.8 345.469 524.8 344.802 530.135 344.802ZM522.799 345.469 517.464 345.469 517.464 344.802 522.799 344.802ZM515.464 345.469 510.128 345.469 510.128 344.802 515.464 344.802ZM508.128 345.469 507.5 345.469 507.833 345.135 507.833 349.841 507.167 349.841 507.167 344.802 508.128 344.802ZM507.833 351.842 507.833 357.176 507.167 357.176 507.167 351.842ZM507.833 359.176 507.833 364.51 507.167 364.51 507.167 359.176ZM507.833 366.51 507.833 371.844 507.167 371.844 507.167 366.51ZM507.833 373.844 507.833 379.178 507.167 379.178 507.167 373.844ZM507.833 381.178 507.833 386.512 507.167 386.512 507.167 381.178ZM507.833 388.512 507.833 393.846 507.167 393.846 507.167 388.512ZM507.833 395.846 507.833 398.172 507.167 398.172 507.167 395.846ZM511.501 396.839 507.5 404.839 503.499 396.839Z"
          fill="#18606C"
        />
        <path
          d="M977.169 251.106 979.939 251.106 979.939 251.773 977.169 251.773ZM978.503 255.44 970.5 251.439 978.503 247.439Z"
          fill="#18606C"
        />
        <path
          d="M980.5 251.439 980.5 389.762"
          stroke="#18606C"
          stroke-width="0.666893"
          stroke-miterlimit="8"
          stroke-dasharray="5.33514 2.00068"
          fill="none"
          fill-rule="evenodd"
        />
        <path
          d="M0 0 461.55 0.000104997"
          stroke="#18606C"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          stroke-dasharray="5.33386 2.0002"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(-1.00024 0 0 1 980.161 389.406)"
        />
        <path
          d="M518.833 389.406 518.833 397.229 518.167 397.229 518.167 389.406ZM522.501 395.895 518.5 403.896 514.499 395.896Z"
          fill="#4472C4"
        />
        <path
          d="M0 0 0.000104997 48.1156"
          stroke="#4472C4"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          stroke-dasharray="5.33386 2.0002"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(1.00024 0 0 -1 539.5 404.53)"
        />
        <path
          d="M539.5 356.414 612.071 356.414"
          stroke="#4472C4"
          stroke-width="0.666893"
          stroke-miterlimit="8"
          stroke-dasharray="5.33514 2.00068"
          fill="none"
          fill-rule="evenodd"
        />
        <path
          d="M0.333366-3.36595e-07 0.333371 5.33386-0.333361 5.33386-0.333366 3.36595e-07ZM0.333373 7.33405 0.333379 12.6679-0.333353 12.6679-0.333359 7.33405ZM0.333381 14.6681 0.333386 20.002-0.333346 20.002-0.333351 14.6681ZM0.333388 22.0022 0.333394 27.336-0.333338 27.336-0.333344 22.0022ZM0.333396 29.3362 0.333401 34.6701-0.333331 34.6701-0.333336 29.3362ZM0.333403 36.6703 0.333408 42.0041-0.333324 42.0041-0.333329 36.6703ZM0.33341 44.0043 0.333416 49.3382-0.333316 49.3382-0.333322 44.0043ZM0.333418 51.3384 0.333423 56.6722-0.333309 56.6722-0.333314 51.3384ZM0.333425 58.6724 0.333431 64.0063-0.333301 64.0063-0.333307 58.6724ZM0.333433 66.0065 0.333438 71.3403-0.333294 71.3403-0.333299 66.0065ZM0.33344 73.3405 0.333445 78.6744-0.333287 78.6744-0.333292 73.3405ZM0.333447 80.6746 0.333453 86.0084-0.333279 86.0084-0.333285 80.6746ZM0.333455 88.0086 0.33346 93.3425-0.333272 93.3425-0.333277 88.0086ZM0.333462 95.3427 0.333464 97.3225-0.333268 97.3225-0.33327 95.3427ZM4.00049 95.989 0.000104997 103.99-4.0003 95.989Z"
          fill="#18606C"
          transform="matrix(1.00024 0 0 -1 611.5 356.429)"
        />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="400"
          font-size="13"
          transform="matrix(1 0 0 0.999759 558.268 349)"
        >
          日報拋轉
        </text>
        <path
          d="M0 0 0.000104997 24.058"
          stroke="#4472C4"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          stroke-dasharray="5.33386 2.0002"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(1.00024 0 0 -1 484.5 404.466)"
        />
        <path
          d="M0.000954034-0.333365 5.33479-0.3181 5.33288 0.348629-0.000954034 0.333365ZM7.33498-0.312376 12.6688-0.297111 12.6669 0.369618 7.33307 0.354353ZM14.669-0.291387 20.0028-0.276123 20.0009 0.390607 14.6671 0.375342ZM22.003-0.270398 27.3369-0.255134 27.3349 0.411595 22.0011 0.396331ZM29.337-0.24941 34.6709-0.234145 34.669 0.432584 29.3351 0.41732ZM36.6711-0.228421 42.0049-0.213156 42.003 0.453573 36.6692 0.438308ZM44.0051-0.207432 49.3389-0.192168 49.337 0.474562 44.0032 0.459297ZM51.3391-0.186443 56.6729-0.171179 56.671 0.49555 51.3372 0.480286ZM58.6731-0.165455 64.007-0.15019 64.0051 0.516539 58.6712 0.501275ZM66.0071-0.144466 71.341-0.129201 71.3391 0.537528 66.0052 0.522263ZM73.3412-0.123477 78.675-0.108213 78.6731 0.558517 73.3393 0.543252ZM80.6752-0.102488 86.009-0.0872238 86.0071 0.579506 80.6733 0.564241ZM88.0092-0.0814995 93.3431-0.066235 93.3412 0.600494 88.0073 0.58523ZM95.3432-0.0605108 100.677-0.0452462 100.675 0.621483 95.3413 0.606218ZM102.677-0.039522 108.011-0.0242574 108.009 0.642472 102.675 0.627207ZM110.011-0.0185332 115.345-0.00326868 115.343 0.663461 110.009 0.648196ZM117.345 0.00245554 122.679 0.0177201 122.677 0.684449 117.343 0.669185ZM124.679 0.0234443 130.013 0.0387089 130.011 0.705438 124.677 0.690174ZM132.013 0.0444331 137.347 0.0596976 137.345 0.726427 132.011 0.711162ZM139.347 0.0654218 144.681 0.0806864 144.679 0.747416 139.345 0.732151ZM146.681 0.0864106 152.015 0.101675 152.013 0.768404 146.679 0.75314ZM154.015 0.107399 159.349 0.122664 159.347 0.789393 154.013 0.774128ZM161.349 0.128388 166.683 0.143653 166.681 0.810382 161.347 0.795117ZM168.683 0.149377 174.017 0.164641 174.015 0.83137 168.682 0.816106ZM176.017 0.170365 181.351 0.18563 181.349 0.852359 176.016 0.837095ZM183.351 0.191354 188.685 0.206619 188.683 0.873348 183.35 0.858083ZM190.685 0.212343 196.019 0.227607 196.017 0.894337 190.684 0.879072ZM198.02 0.233332 203.353 0.248596 203.351 0.915325 198.018 0.900061ZM205.354 0.25432 210.687 0.269585 210.685 0.936314 205.352 0.92105ZM212.688 0.275309 218.021 0.290574 218.019 0.957303 212.686 0.942038ZM220.022 0.296298 225.355 0.311562 225.354 0.978292 220.02 0.963027ZM227.356 0.317287 232.689 0.332551 232.688 0.999281 227.354 0.984016ZM234.69 0.338275 240.023 0.35354 240.022 1.02027 234.688 1.005ZM242.024 0.359264 247.357 0.374529 247.356 1.04126 242.022 1.02599ZM249.358 0.380253 254.692 0.395518 254.69 1.06225 249.356 1.04698ZM256.692 0.401242 262.026 0.416506 262.024 1.08324 256.69 1.06797ZM264.026 0.42223 266.776 0.4301 266.774 1.09683 264.024 1.08896ZM265.452-3.24073 273.441 0.782544 265.429 4.76002Z"
          fill="#4472C4"
          transform="matrix(-1.00024 0 0 1 485.007 378.409)"
        />
        <path
          d="M410.175 445.209 415.508 445.328 415.494 445.995 410.16 445.875ZM417.509 445.373 418.157 445.388 418.142 446.054 417.494 446.04ZM411.411 449.571 403.5 445.393 411.59 441.572ZM416.906 441.692 424.817 445.87 416.727 449.69Z"
          fill="#4472C4"
        />
        <path
          d="M0 0 0.466082 60.6087"
          stroke="#4472C4"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          stroke-dasharray="5.33386 2.0002"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(1.00024 0 0 -1 134.5 582.983)"
        />
        <path
          d="M135.5 522.374 496.545 522.374"
          stroke="#4472C4"
          stroke-width="0.666893"
          stroke-miterlimit="8"
          stroke-dasharray="5.33514 2.00068"
          fill="none"
          fill-rule="evenodd"
        />
        <path
          d="M0.333361-0.00188525 0.363525 5.33188-0.303197 5.33566-0.333361 0.00188525ZM0.374836 7.33205 0.405 12.6658-0.261721 12.6696-0.291885 7.33582ZM0.416311 14.666 0.446475 19.9998-0.220246 20.0035-0.25041 14.6698ZM0.457787 21.9999 0.487951 27.3337-0.178771 27.3375-0.208934 22.0037ZM0.499262 29.3339 0.529426 34.6676-0.137295 34.6714-0.167459 29.3376ZM0.540738 36.6678 0.570902 42.0016-0.0958198 42.0053-0.125984 36.6716ZM0.582213 44.0017 0.612377 49.3355-0.0543444 49.3393-0.0845083 44.0055ZM4.27343 48.2696 0.318351 56.2929-3.72722 48.3148Z"
          fill="#4472C4"
          transform="matrix(1.00024 0 0 -1 495.5 522.68)"
        />
        <path
          d="M181.5 696.332 213.183 696.332"
          stroke="#4472C4"
          stroke-width="0.666893"
          stroke-miterlimit="8"
          stroke-dasharray="5.33514 2.00068"
          fill="none"
          fill-rule="evenodd"
        />
        <path
          d="M0 0 0.000104997 196.801"
          stroke="#4472C4"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          stroke-dasharray="5.33386 2.0002"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(1.00024 0 0 -1 212.5 697.181)"
        />
        <path
          d="M213.5 500.379 469.524 500.379"
          stroke="#4472C4"
          stroke-width="0.666893"
          stroke-miterlimit="8"
          stroke-dasharray="5.33514 2.00068"
          fill="none"
          fill-rule="evenodd"
        />
        <path
          d="M0.333366-9.44722e-07 0.333381 5.33386-0.333351 5.33386-0.333366 9.44722e-07ZM0.333387 7.33405 0.333402 12.6679-0.33333 12.6679-0.333345 7.33405ZM0.333408 14.6681 0.333423 20.002-0.333309 20.002-0.333324 14.6681ZM0.333428 22.0022 0.333443 27.336-0.333289 27.336-0.333304 22.0022ZM0.333449 29.3362 0.333452 30.3832-0.33328 30.3832-0.333283 29.3362ZM4.00047 29.0498 0.000104997 37.0506-4.00031 29.0498Z"
          fill="#4472C4"
          transform="matrix(1.00024 0 0 -1 468.5 500.439)"
        />
        <rect x="284" y="555.866" width="295" height="212.949" fill="#DBDBDB" />
        <rect x="386" y="753.818" width="57" height="32.992" fill="#FFD966" />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="19"
          transform="matrix(1 0 0 0.999759 395.236 777)"
        >
          工地
        </text>
        <rect
          x="297"
          y="580.86"
          width="92.9999"
          height="34.9916"
          fill="#18606C"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 311.509 604)"
        >
          材料進貨
        </text>
        <rect x="296" y="623.85" width="93" height="34.9915" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 318.473 648)"
        >
          代僱工
        </text>
        <rect x="298" y="668.839" width="93" height="34.9916" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 312.636 693)"
        >
          實作數量
        </text>
        <rect x="421" y="578.86" width="136" height="34.9916" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 433.31 603)"
        >
          進度排程及回報
        </text>
        <rect x="421" y="623.85" width="136" height="34.9915" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 457.318 648)"
        >
          工程日報
        </text>
        <path
          d="M389.5 642.012 415.17 642.012 415.17 642.678 389.5 642.678ZM413.836 638.345 421.839 642.345 413.836 646.346Z"
          fill="#4472C4"
        />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="13"
          transform="matrix(1 0 0 0.999759 588.644 735)"
        >
          手機版回報
        </text>
        <rect x="421" y="668.839" width="136" height="34.9916" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 441.313 693)"
        >
          動態驗收回報
        </text>
        <rect x="421" y="711.828" width="136" height="34.9916" fill="#1A4A6A" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 457.318 736)"
        >
          品質查核
        </text>
        <path
          d="M0 0 0.000104997 10.2851"
          stroke="#4472C4"
          stroke-width="0.666732"
          stroke-miterlimit="8"
          fill="none"
          fill-rule="evenodd"
          transform="matrix(1.00024 0 0 -1 489.5 624.637)"
        />
        <path
          d="M489.167 669.641 489.167 655.011 489.833 655.011 489.833 669.641ZM485.499 656.344 489.5 648.344 493.501 656.344Z"
          fill="#4472C4"
        />
        <g
          clip-path="url(#clip4)"
          transform="matrix(0.000105022 0 0 0.000104997 584 644.844)"
        >
          <g clip-path="url(#clip6)">
            <use
              width="100%"
              height="100%"
              xlink:href="#img5"
              transform="matrix(5058.44 0 0 5058.44 -0.0234375 0.302021)"
            ></use>
          </g>
        </g>
        <path
          d="M584.169 680.206 582.516 675.135 583.15 674.928 584.803 679.999ZM581.895 673.233 580.241 668.162 580.875 667.955 582.529 673.026ZM579.621 666.26 577.967 661.189 578.601 660.982 580.255 666.053ZM577.347 659.287 575.693 654.216 576.327 654.01 577.981 659.081ZM575.073 652.315 573.419 647.244 574.053 647.037 575.707 652.108ZM572.799 645.342 571.145 640.271 571.779 640.064 573.433 645.135ZM570.525 638.369 568.871 633.298 569.505 633.091 571.159 638.162ZM568.251 631.396 566.597 626.325 567.231 626.119 568.885 631.19ZM565.977 624.424 564.323 619.352 564.957 619.146 566.611 624.217ZM563.703 617.451 562.049 612.38 562.683 612.173 564.337 617.244ZM561.429 610.478 559.775 605.407 560.409 605.2 562.063 610.271ZM556.177 606.203 557.5 597.356 563.785 603.723Z"
          fill="#4472C4"
        />
        <path
          d="M584.216 680.08 581.102 675.748 581.644 675.359 584.757 679.69ZM579.934 674.124 576.821 669.793 577.362 669.404 580.476 673.735ZM575.653 668.169 572.539 663.837 573.081 663.448 576.195 667.779ZM571.372 662.213 568.258 657.882 568.8 657.493 571.913 661.824ZM567.091 656.258 563.977 651.926 564.519 651.537 567.632 655.868ZM562.809 650.302 561.121 647.954 561.663 647.565 563.351 649.913ZM558.921 651.177 557.5 642.345 565.42 646.507Z"
          fill="#4472C4"
        />
        <path
          d="M0.293853-0.157428 2.81269 4.54422 2.22499 4.85907-0.293853 0.157428ZM3.75726 6.30733 6.2761 11.009 5.6884 11.3238 3.16955 6.62219ZM7.22067 12.7721 9.73951 17.4737 9.1518 17.7886 6.63296 13.0869ZM10.6841 19.2369 13.2029 23.9385 12.6152 24.2534 10.0964 19.5517ZM14.1475 25.7016 16.6663 30.4033 16.0786 30.7181 13.5598 26.0165ZM17.6109 32.1664 20.1297 36.868 19.542 37.1829 17.0232 32.4812ZM21.0743 38.6311 23.5931 43.3328 23.0054 43.6476 20.4866 38.946ZM26.7279 41.4189 26.98 50.3605 19.6755 45.1972Z"
          fill="#4472C4"
          transform="matrix(-1.00024 0 0 1 584.487 679.336)"
        />
        <rect x="701" y="553.866" width="218" height="212.949" fill="#DBDBDB" />
        <rect x="783" y="748.819" width="57" height="32.992" fill="#FFD966" />
        <text
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="19"
          transform="matrix(1 0 0 0.999759 792.871 772)"
        >
          社區
        </text>
        <rect x="746" y="578.86" width="137" height="34.9916" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 782.45 602)"
        >
          行動驗房
        </text>
        <rect x="748" y="674.837" width="137" height="34.9916" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 768.49 698)"
        >
          物業客服人員
        </text>
        <rect x="747" y="625.849" width="136" height="34.9916" fill="#18606C" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 782.943 649)"
        >
          客戶報修
        </text>
        <path
          d="M0.333366-2.48223e-06 0.333421 7.4339-0.333311 7.43391-0.333366 2.48223e-06ZM4.00044 6.10041 0.000104997 14.1012-4.00035 6.10047Z"
          fill="#4472C4"
          transform="matrix(1.00024 0 0 -1 817.5 675.442)"
        />
        <path
          d="M571.686 439.601 575.656 443.165 575.21 443.661 571.24 440.098ZM577.144 444.501 581.114 448.064 580.669 448.56 576.699 444.997ZM582.603 449.4 586.573 452.964 586.128 453.46 582.158 449.896ZM588.062 454.3 592.032 457.863 591.586 458.359 587.616 454.796ZM593.521 459.199 597.491 462.762 597.045 463.259 593.075 459.695ZM598.979 464.099 602.949 467.662 602.504 468.158 598.534 464.595ZM604.438 468.998 608.408 472.561 607.963 473.058 603.993 469.494ZM609.897 473.898 613.867 477.461 613.421 477.957 609.451 474.394ZM615.356 478.797 619.326 482.36 618.88 482.856 614.91 479.293ZM620.814 483.697 624.784 487.26 624.339 487.756 620.369 484.193ZM626.273 488.596 630.243 492.159 629.798 492.655 625.828 489.092ZM631.732 493.495 635.702 497.059 635.256 497.555 631.286 493.992ZM637.191 498.395 641.161 501.958 640.715 502.454 636.745 498.891ZM642.649 503.294 646.619 506.858 646.174 507.354 642.204 503.791ZM648.108 508.194 652.078 511.757 651.633 512.253 647.663 508.69ZM653.567 513.093 657.537 516.657 657.091 517.153 653.121 513.589ZM659.026 517.993 662.996 521.556 662.55 522.052 658.58 518.489ZM664.484 522.892 668.454 526.456 668.009 526.952 664.039 523.388ZM669.943 527.792 673.913 531.355 673.468 531.851 669.498 528.288ZM675.402 532.691 679.372 536.254 678.926 536.751 674.956 533.187ZM680.861 537.591 684.831 541.154 684.385 541.65 680.415 538.087ZM686.319 542.49 690.289 546.053 689.844 546.55 685.874 542.986ZM691.778 547.39 695.748 550.953 695.303 551.449 691.333 547.886ZM697.237 552.289 701.207 555.852 700.761 556.349 696.791 552.785ZM702.696 557.189 706.666 560.752 706.22 561.248 702.25 557.685ZM708.154 562.088 712.124 565.651 711.679 566.147 707.709 562.584ZM713.613 566.987 717.583 570.551 717.138 571.047 713.168 567.484ZM719.072 571.887 723.042 575.45 722.596 575.946 718.626 572.383ZM724.531 576.786 728.501 580.35 728.055 580.846 724.085 577.283ZM729.989 581.686 733.959 585.249 733.514 585.745 729.544 582.182ZM735.448 586.585 739.418 590.149 738.973 590.645 735.003 587.081ZM740.907 591.485 741.547 592.059 741.102 592.556 740.461 591.981ZM569.782 443.717 566.5 435.395 575.128 437.763ZM743.005 588.439 746.286 596.761 737.658 594.393Z"
          fill="#4472C4"
        />
        <path
          d="M742.65 638.767 739.152 634.739 739.656 634.302 743.153 638.33ZM737.841 633.228 734.343 629.2 734.847 628.763 738.344 632.791ZM733.032 627.69 729.534 623.662 730.038 623.225 733.535 627.253ZM728.223 622.152 724.725 618.124 725.229 617.687 728.726 621.715ZM723.414 616.613 719.916 612.586 720.42 612.148 723.917 616.176ZM718.605 611.075 715.107 607.047 715.611 606.61 719.108 610.638ZM713.796 605.537 710.298 601.509 710.802 601.072 714.299 605.1ZM708.987 599.998 705.489 595.971 705.993 595.534 709.49 599.561ZM704.178 594.46 700.68 590.432 701.184 589.995 704.681 594.023ZM699.369 588.922 695.871 584.894 696.375 584.457 699.872 588.485ZM694.56 583.384 691.062 579.356 691.566 578.919 695.063 582.946ZM689.751 577.845 686.253 573.817 686.757 573.38 690.254 577.408ZM684.942 572.307 681.444 568.279 681.948 567.842 685.445 571.87ZM680.133 566.769 676.635 562.741 677.139 562.304 680.636 566.332ZM675.324 561.23 671.826 557.202 672.33 556.765 675.827 560.793ZM670.515 555.692 667.017 551.664 667.521 551.227 671.018 555.255ZM665.706 550.154 662.208 546.126 662.712 545.689 666.209 549.717ZM660.897 544.615 657.399 540.588 657.903 540.15 661.4 544.178ZM656.088 539.077 652.59 535.049 653.094 534.612 656.591 538.64ZM651.279 533.539 647.781 529.511 648.285 529.074 651.782 533.102ZM646.469 528 642.972 523.973 643.476 523.536 646.973 527.563ZM641.661 522.462 638.163 518.434 638.667 517.997 642.164 522.025ZM636.852 516.924 633.354 512.896 633.858 512.459 637.355 516.487ZM632.042 511.386 628.545 507.358 629.049 506.921 632.546 510.948ZM627.233 505.847 623.736 501.819 624.24 501.382 627.737 505.41ZM622.424 500.309 618.927 496.281 619.431 495.844 622.928 499.872ZM617.615 494.771 614.118 490.743 614.622 490.306 618.119 494.333ZM612.806 489.232 609.309 485.204 609.813 484.767 613.31 488.795ZM607.997 483.694 604.5 479.666 605.004 479.229 608.501 483.257ZM603.188 478.156 599.691 474.128 600.195 473.691 603.692 477.719ZM598.379 472.617 594.882 468.59 595.385 468.152 598.883 472.18ZM593.57 467.079 590.073 463.051 590.576 462.614 594.074 466.642ZM588.761 461.541 585.264 457.513 585.767 457.076 589.265 461.104ZM583.952 456.003 580.455 451.975 580.958 451.538 584.456 455.565ZM579.143 450.464 575.646 446.436 576.149 445.999 579.647 450.027ZM574.334 444.926 570.837 440.898 571.34 440.461 574.838 444.489ZM745.05 634.92 747.274 643.584 739.006 640.164ZM568.725 444.059 566.5 435.395 574.768 438.814Z"
          fill="#4472C4"
        />
        <path
          d="M570.628 440.642 573.713 444.994 573.169 445.379 570.084 441.027ZM574.87 446.626 577.954 450.977 577.41 451.363 574.325 447.011ZM579.111 452.609 582.196 456.961 581.652 457.347 578.567 452.995ZM583.353 458.593 586.438 462.945 585.894 463.33 582.809 458.979ZM587.594 464.577 590.679 468.929 590.135 469.314 587.05 464.962ZM591.836 470.561 594.921 474.912 594.377 475.298 591.292 470.946ZM596.078 476.544 599.163 480.896 598.619 481.282 595.534 476.93ZM600.319 482.528 603.404 486.88 602.86 487.265 599.775 482.914ZM604.561 488.512 607.646 492.864 607.102 493.249 604.017 488.897ZM608.803 494.496 611.888 498.848 611.343 499.233 608.259 494.881ZM613.044 500.479 616.129 504.831 615.585 505.217 612.5 500.865ZM617.286 506.463 620.371 510.815 619.827 511.201 616.742 506.849ZM621.528 512.447 624.612 516.799 624.068 517.184 620.984 512.833ZM625.769 518.431 628.854 522.783 628.31 523.168 625.225 518.816ZM630.011 524.414 633.096 528.766 632.552 529.152 629.467 524.8ZM634.253 530.398 637.337 534.75 636.793 535.136 633.708 530.784ZM638.494 536.382 641.579 540.734 641.035 541.119 637.95 536.768ZM642.736 542.366 645.821 546.718 645.277 547.103 642.192 542.751ZM646.978 548.35 650.062 552.701 649.518 553.087 646.433 548.735ZM651.219 554.333 654.304 558.685 653.76 559.071 650.675 554.719ZM655.461 560.317 658.546 564.669 658.002 565.054 654.917 560.703ZM659.702 566.301 662.787 570.653 662.243 571.038 659.158 566.686ZM663.944 572.285 667.029 576.636 666.485 577.022 663.4 572.67ZM668.186 578.268 671.271 582.62 670.726 583.006 667.642 578.654ZM672.427 584.252 675.512 588.604 674.968 588.99 671.883 584.638ZM676.669 590.236 679.754 594.588 679.21 594.973 676.125 590.621ZM680.911 596.22 683.996 600.572 683.451 600.957 680.367 596.605ZM685.152 602.203 688.237 606.555 687.693 606.941 684.608 602.589ZM689.394 608.187 692.479 612.539 691.935 612.925 688.85 608.573ZM693.636 614.171 696.72 618.523 696.176 618.908 693.091 614.556ZM697.877 620.155 700.962 624.507 700.418 624.892 697.333 620.54ZM702.119 626.138 705.204 630.49 704.66 630.876 701.575 626.524ZM706.361 632.122 709.445 636.474 708.901 636.86 705.816 632.508ZM710.602 638.106 713.687 642.458 713.143 642.843 710.058 638.492ZM714.844 644.09 717.929 648.442 717.385 648.827 714.3 644.475ZM719.086 650.073 722.17 654.425 721.626 654.811 718.541 650.459ZM723.327 656.057 726.412 660.409 725.868 660.795 722.783 656.443ZM727.569 662.041 730.654 666.393 730.109 666.778 727.025 662.427ZM731.81 668.025 734.895 672.377 734.351 672.762 731.266 668.41ZM736.052 674.009 739.137 678.36 738.593 678.746 735.508 674.394ZM740.294 679.992 743.379 684.344 742.834 684.73 739.75 680.378ZM744.535 685.976 745.242 686.973 744.698 687.359 743.991 686.362ZM567.863 444.236 566.5 435.395 574.392 439.61ZM747.464 683.765 748.826 692.606 740.935 688.392Z"
          fill="#4472C4"
        />
        <path
          d="M0.333366-3.13993e-07 0.333371 5.33386-0.333361 5.33386-0.333366 3.13993e-07ZM0.333373 7.33405 0.333378 12.6679-0.333354 12.6679-0.333359 7.33405ZM0.33338 14.6681 0.333385 20.002-0.333347 20.002-0.333352 14.6681ZM0.333387 22.0022 0.333392 27.336-0.33334 27.336-0.333345 22.0022ZM0.333394 29.3362 0.333399 34.6701-0.333333 34.6701-0.333338 29.3362ZM0.333401 36.6703 0.333406 42.0041-0.333326 42.0041-0.333331 36.6703ZM0.333407 44.0043 0.333412 49.3382-0.33332 49.3382-0.333325 44.0043ZM0.333414 51.3384 0.333419 56.6722-0.333313 56.6722-0.333318 51.3384ZM0.333421 58.6724 0.333426 64.0063-0.333306 64.0063-0.333311 58.6724ZM0.333428 66.0065 0.333433 71.3403-0.333299 71.3403-0.333304 66.0065ZM0.333435 73.3405 0.33344 78.6744-0.333292 78.6744-0.333297 73.3405ZM0.333442 80.6746 0.333447 86.0084-0.333285 86.0084-0.33329 80.6746ZM0.333449 88.0086 0.333454 93.3425-0.333278 93.3425-0.333283 88.0086ZM0.333456 95.3427 0.333461 100.677-0.333271 100.677-0.333276 95.3427ZM0.333463 102.677 0.333465 104.808-0.333267 104.808-0.333269 102.677ZM4.00049 103.475 0.000104997 111.475-4.00029 103.475Z"
          fill="#4472C4"
          transform="matrix(1.00024 0 0 -1 511.5 576.863)"
        />
        <rect x="213" y="426.897" width="93" height="34.9916" fill="#BF9000" />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 227.819 451)"
        >
          發送簡訊
        </text>
        <rect
          x="310"
          y="427.897"
          width="92.9999"
          height="34.9916"
          fill="#BF9000"
        />
        <text
          fill="#FFFFFF"
          font-family="Microsoft JhengHei,Microsoft JhengHei_MSFontService,sans-serif"
          font-weight="700"
          font-size="16"
          transform="matrix(1 0 0 0.999759 322.87 451)"
        >
          發送
          <tspan font-size="16" x="32.0108" y="0">LINE</tspan>
        </text>
      </g>
    </svg>
  </div>
</template>
<style scoped>
@media (max-width: 575.98px) {
  svg {
    max-width: 100%;
  }
}
</style>
