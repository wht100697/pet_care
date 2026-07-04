'use client';

import { useEffect } from 'react';

const pageMarkup = "<header class=\"topbar\">\n    <a class=\"brand\" href=\"#home\" aria-label=\"泡泡爪宠物洗护首页\">\n      <span class=\"brand-mark\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"14\" r=\"4\"></circle><circle cx=\"6\" cy=\"9\" r=\"2\"></circle><circle cx=\"10\" cy=\"6\" r=\"2\"></circle><circle cx=\"15\" cy=\"7\" r=\"2\"></circle><circle cx=\"18\" cy=\"11\" r=\"2\"></circle></svg>\n      </span>\n      泡泡爪宠物洗护\n    </a>\n    <nav class=\"nav\" aria-label=\"页面导航\">\n      <a href=\"#services\">服务</a>\n      <a href=\"#prices\">套餐</a>\n      <a href=\"#process\">流程</a>\n      <a href=\"#environment\">环境</a>\n      <a href=\"#reviews\">口碑</a>\n      <a href=\"#contact\">联系</a>\n    </nav>\n    <a class=\"nav-cta\" href=\"#booking\" aria-label=\"预约到店\">\n      <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"></rect><path d=\"M3 10h18\"></path></svg>\n      预约\n    </a>\n  </header>\n\n  <main id=\"home\">\n    <section class=\"hero\" aria-label=\"泡泡爪宠物洗护首屏\">\n      <div class=\"hero-content\">\n        <p class=\"eyebrow\">\n          <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z\"></path></svg>\n          猫犬友好洗护空间\n        </p>\n        <h1>泡泡爪宠物洗护</h1>\n        <p>用温和流程、透明报价和一对一照护，让每只毛孩子洗得干净，也待得安心。</p>\n        <div class=\"hero-actions\">\n          <a class=\"primary-btn\" href=\"#booking\">\n            <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 12h14\"></path><path d=\"M13 5l7 7-7 7\"></path></svg>\n            立即预约\n          </a>\n          <a class=\"secondary-btn\" href=\"#prices\">\n            <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20 7H4\"></path><path d=\"M20 12H4\"></path><path d=\"M20 17H4\"></path></svg>\n            查看套餐\n          </a>\n        </div>\n        <div class=\"hero-stats\" aria-label=\"门店亮点\">\n          <div class=\"stat\"><strong>30+</strong><span>分钟基础洁净护理</span></div>\n          <div class=\"stat\"><strong>1:1</strong><span>专属洗护师跟进</span></div>\n          <div class=\"stat\"><strong>0</strong><span>强迫式烘干承诺</span></div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"services\" id=\"services\">\n      <div class=\"section-inner\">\n        <div class=\"section-heading\">\n          <h2>洗护不只是洗干净</h2>\n          <p>我们把清洁、皮毛状态观察、情绪安抚和造型整理放在同一套流程里，让主人看得见每一步。</p>\n        </div>\n        <div class=\"service-grid\">\n          <article class=\"service-card\">\n            <div class=\"service-icon\" aria-hidden=\"true\"><svg class=\"icon\" viewBox=\"0 0 24 24\"><path d=\"M9 11a4 4 0 1 0 6 0\"></path><path d=\"M12 3v8\"></path><path d=\"M6 21h12\"></path></svg></div>\n            <h3>基础洗护</h3>\n            <p>温和清洁、吹干梳理、耳道清洁、脚底毛修整、指甲打磨，适合日常到店护理。</p>\n          </article>\n          <article class=\"service-card\">\n            <div class=\"service-icon\" aria-hidden=\"true\"><svg class=\"icon\" viewBox=\"0 0 24 24\"><path d=\"M4 17c5-8 11-8 16 0\"></path><path d=\"M8 17a4 4 0 0 0 8 0\"></path><path d=\"M12 3v5\"></path></svg></div>\n            <h3>皮毛养护</h3>\n            <p>针对掉毛、打结、干燥和敏感皮肤，搭配合适洗剂与护毛步骤，减少不适感。</p>\n          </article>\n          <article class=\"service-card\">\n            <div class=\"service-icon\" aria-hidden=\"true\"><svg class=\"icon\" viewBox=\"0 0 24 24\"><path d=\"M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4L8 19H5v-3z\"></path><path d=\"M12 8l4 4\"></path></svg></div>\n            <h3>精修造型</h3>\n            <p>按品种、毛量和生活习惯做轻量造型，保留自然可爱，也方便主人日常打理。</p>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"prices\">\n      <div class=\"section-inner\">\n        <div class=\"section-heading\">\n          <h2>透明套餐，按需选择</h2>\n          <p>价格会根据体型、毛量、打结程度微调，预约时会先确认，不临时加价。</p>\n        </div>\n        <div class=\"price-grid\">\n          <article class=\"price-card\">\n            <span class=\"tag\">日常洁净</span>\n            <h3>轻柔洗护</h3>\n            <p>适合短毛猫犬或每月固定清洁。</p>\n            <div class=\"price\">¥99 <small>起</small></div>\n            <ul>\n              <li><span class=\"check\">✓</span> 洗澡吹干与全身梳理</li>\n              <li><span class=\"check\">✓</span> 耳道、眼周、脚底清洁</li>\n              <li><span class=\"check\">✓</span> 指甲修剪或打磨</li>\n            </ul>\n            <a class=\"secondary-btn\" href=\"#booking\">选择套餐</a>\n          </article>\n          <article class=\"price-card featured\">\n            <span class=\"tag\">推荐</span>\n            <h3>焕毛养护</h3>\n            <p>适合换毛期、毛发干涩或容易打结的宠物。</p>\n            <div class=\"price\">¥168 <small>起</small></div>\n            <ul>\n              <li><span class=\"check\">✓</span> 基础洗护全套项目</li>\n              <li><span class=\"check\">✓</span> 深层梳废毛与护毛护理</li>\n              <li><span class=\"check\">✓</span> 皮毛状态记录反馈</li>\n              <li><span class=\"check\">✓</span> 到店后护理建议</li>\n            </ul>\n            <a class=\"primary-btn\" href=\"#booking\">选择套餐</a>\n          </article>\n          <article class=\"price-card\">\n            <span class=\"tag\">造型管理</span>\n            <h3>精修造型</h3>\n            <p>适合需要修剪轮廓、卫生毛或全身造型的宠物。</p>\n            <div class=\"price\">¥238 <small>起</small></div>\n            <ul>\n              <li><span class=\"check\">✓</span> 洗护与造型修剪</li>\n              <li><span class=\"check\">✓</span> 局部精修与蓬松整理</li>\n              <li><span class=\"check\">✓</span> 造型前沟通确认</li>\n            </ul>\n            <a class=\"secondary-btn\" href=\"#booking\">选择套餐</a>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"process\" id=\"process\">\n      <div class=\"section-inner\">\n        <div class=\"section-heading\">\n          <h2>到店四步，清楚安心</h2>\n          <p>每次护理都会先确认宠物状态，敏感、怕水、胆小或老年宠物会调整节奏。</p>\n        </div>\n        <div class=\"timeline\">\n          <article class=\"step\"><span>1</span><h3>状态评估</h3><p>检查毛结、皮肤、耳朵和情绪，确认护理重点。</p></article>\n          <article class=\"step\"><span>2</span><h3>温和清洁</h3><p>按皮毛类型选择洗剂，避开眼鼻和敏感区域。</p></article>\n          <article class=\"step\"><span>3</span><h3>低压吹干</h3><p>使用分段吹干和安抚休息，减少噪音压力。</p></article>\n          <article class=\"step\"><span>4</span><h3>反馈带走</h3><p>给主人说明皮毛状态、护理建议和下次间隔。</p></article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"environment\" id=\"environment\">\n      <div class=\"section-inner\">\n        <div class=\"section-heading\">\n          <h2>高端门店环境，安心洗护</h2>\n          <p>从接待等候、独立洗护到精修造型，不同区域分区清晰，保持安静、洁净和适合宠物停留的节奏。</p>\n        </div>\n        <div class=\"environment-shell\">\n          <div class=\"environment-carousel\" aria-label=\"门店环境轮播图\">\n            <div class=\"environment-track\" id=\"environmentTrack\">\n              <article class=\"environment-slide\">\n                <img src=\"assets/store-environment-reception.png\" alt=\"高端宠物洗护店接待前台与等候区\">\n                <div class=\"environment-caption\">\n                  <h3>接待与等候区</h3>\n                  <p>自然采光、木质细节和柔和座席，让主人咨询、等待和交接都更放松。</p>\n                </div>\n              </article>\n              <article class=\"environment-slide\">\n                <img src=\"assets/store-environment-spa.png\" alt=\"高端宠物洗护店独立洗护和 SPA 护理区\">\n                <div class=\"environment-caption\">\n                  <h3>独立洗护 SPA 区</h3>\n                  <p>玻璃分区、洁净台面和分类用品，减少互相打扰，也方便护理师观察状态。</p>\n                </div>\n              </article>\n              <article class=\"environment-slide\">\n                <img src=\"assets/store-environment-styling.png\" alt=\"高端宠物洗护店修剪造型和吹干区\">\n                <div class=\"environment-caption\">\n                  <h3>修剪造型区</h3>\n                  <p>低噪设备、稳定美容台和充足操作空间，让蓬松整理与精修更细致。</p>\n                </div>\n              </article>\n            </div>\n            <div class=\"environment-controls\">\n              <button class=\"carousel-btn\" type=\"button\" data-carousel-prev aria-label=\"上一张门店环境图\">\n                <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"></path></svg>\n              </button>\n              <button class=\"carousel-btn\" type=\"button\" data-carousel-next aria-label=\"下一张门店环境图\">\n                <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"></path></svg>\n              </button>\n            </div>\n          </div>\n          <aside class=\"environment-side\" aria-label=\"门店环境亮点\">\n            <div>\n              <p class=\"eyebrow\">\n                <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 21h18\"></path><path d=\"M5 21V7l8-4v18\"></path><path d=\"M19 21V11l-6-4\"></path><path d=\"M9 9h1\"></path><path d=\"M9 13h1\"></path><path d=\"M9 17h1\"></path></svg>\n                门店空间\n              </p>\n              <h3>看得见的清洁和舒适感</h3>\n              <p>空间采用高端宠物洗护店常见的轻木、浅石材、柔和绿调和分区动线，兼顾主人信任感与宠物安全感。</p>\n              <ul class=\"environment-points\">\n                <li><span class=\"check\">✓</span> 前厅、洗护、造型分区明确</li>\n                <li><span class=\"check\">✓</span> 透明视线减少等待焦虑</li>\n                <li><span class=\"check\">✓</span> 独立用品收纳与每日消毒</li>\n              </ul>\n            </div>\n            <div class=\"carousel-dots\" aria-label=\"选择门店环境图片\">\n              <button class=\"carousel-dot\" type=\"button\" data-carousel-dot=\"0\" aria-label=\"查看接待与等候区\" aria-current=\"true\"></button>\n              <button class=\"carousel-dot\" type=\"button\" data-carousel-dot=\"1\" aria-label=\"查看独立洗护 SPA 区\" aria-current=\"false\"></button>\n              <button class=\"carousel-dot\" type=\"button\" data-carousel-dot=\"2\" aria-label=\"查看修剪造型区\" aria-current=\"false\"></button>\n            </div>\n          </aside>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"booking\" id=\"booking\">\n      <div class=\"section-inner booking-layout\">\n        <div class=\"booking-copy\">\n          <p class=\"eyebrow\">\n            <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5\"></path><path d=\"M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5\"></path><path d=\"M8 10h8\"></path><path d=\"M8 14h6\"></path></svg>\n            预约试算\n          </p>\n          <h2>先填信息，我们帮你留好护理时段</h2>\n          <p>提交后页面会生成预约提示。实际接待时间和最终价格以门店电话确认为准。</p>\n          <div class=\"booking-badges\">\n            <span><svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20 6L9 17l-5-5\"></path></svg> 无笼等待</span>\n            <span><svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path></svg> 独立消毒</span>\n            <span><svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"></path></svg> 状态观察</span>\n          </div>\n        </div>\n        <form class=\"form-panel\" id=\"bookingForm\">\n          <div class=\"form-grid\">\n            <label>主人姓名\n              <input type=\"text\" name=\"owner\" placeholder=\"例如：李女士\" required>\n            </label>\n            <div class=\"form-row\">\n              <label>宠物类型\n                <select name=\"petType\" id=\"petType\">\n                  <option value=\"dog\">狗狗</option>\n                  <option value=\"cat\">猫咪</option>\n                </select>\n              </label>\n              <label>体型\n                <select name=\"size\" id=\"petSize\">\n                  <option value=\"small\">小型</option>\n                  <option value=\"medium\">中型</option>\n                  <option value=\"large\">大型</option>\n                </select>\n              </label>\n            </div>\n            <label>护理套餐\n              <select name=\"package\" id=\"packageSelect\">\n                <option value=\"99\">轻柔洗护</option>\n                <option value=\"168\" selected>焕毛养护</option>\n                <option value=\"238\">精修造型</option>\n              </select>\n            </label>\n            <div class=\"form-row\">\n              <label>预约日期\n                <input type=\"date\" name=\"date\" required>\n              </label>\n              <label>联系电话\n                <input type=\"tel\" name=\"phone\" placeholder=\"手机号\" required>\n              </label>\n            </div>\n            <label>补充说明\n              <textarea name=\"note\" placeholder=\"例如：胆小、怕吹风、皮肤敏感、毛结较多\"></textarea>\n            </label>\n          </div>\n          <div class=\"total-line\">\n            <span>预估费用</span>\n            <strong id=\"estimatePrice\">¥168 起</strong>\n          </div>\n          <button class=\"primary-btn\" type=\"submit\">\n            <svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M22 2L11 13\"></path><path d=\"M22 2l-7 20-4-9-9-4z\"></path></svg>\n            提交预约\n          </button>\n          <p class=\"form-message\" id=\"formMessage\" aria-live=\"polite\"></p>\n        </form>\n      </div>\n    </section>\n\n    <section id=\"reviews\">\n      <div class=\"section-inner\">\n        <div class=\"section-heading\">\n          <h2>主人们的真实反馈</h2>\n          <p>好洗护的标准很简单：宠物愿意再来，主人放心托付。</p>\n        </div>\n        <div class=\"review-grid\">\n          <article class=\"review-card\">\n            <div class=\"stars\" aria-label=\"五星评价\">★★★★★</div>\n            <p>我家狗狗以前洗澡会抖，这次洗完状态很放松，毛也蓬得很自然。</p>\n            <div class=\"reviewer\"><span class=\"avatar\">周</span> 周先生 · 比熊主人</div>\n          </article>\n          <article class=\"review-card\">\n            <div class=\"stars\" aria-label=\"五星评价\">★★★★★</div>\n            <p>猫咪第一次到店没有应激，洗护师会边做边反馈，细节很让人安心。</p>\n            <div class=\"reviewer\"><span class=\"avatar\">陈</span> 陈女士 · 英短主人</div>\n          </article>\n          <article class=\"review-card\">\n            <div class=\"stars\" aria-label=\"五星评价\">★★★★★</div>\n            <p>报价透明，打结也提前说明了处理方式，修完比我想象中更清爽。</p>\n            <div class=\"reviewer\"><span class=\"avatar\">林</span> 林女士 · 贵宾主人</div>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"contact\" id=\"contact\">\n      <div class=\"section-inner\">\n        <div class=\"section-heading\">\n          <h2>来店前，先聊聊毛孩子</h2>\n          <p>营业时间 10:00-20:00，建议提前一天预约，周末时段会更快排满。</p>\n        </div>\n        <div class=\"contact-grid\">\n          <article class=\"contact-panel\">\n            <h3><svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72l.45 2.72a2 2 0 0 1-.57 1.77L8.8 10.4a16 16 0 0 0 4.8 4.8l1.19-1.19a2 2 0 0 1 1.77-.57l2.72.45A2 2 0 0 1 22 16.92z\"></path></svg> 电话</h3>\n            <p class=\"muted\">021-8888-6620<br>支持电话预约与套餐咨询</p>\n          </article>\n          <article class=\"contact-panel\">\n            <h3><svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg> 地址</h3>\n            <p class=\"muted\">上海市暖阳路 88 号 1F<br>近社区公园东门</p>\n          </article>\n          <article class=\"contact-panel\">\n            <h3><svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 8v4l3 3\"></path><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg> 时间</h3>\n            <p class=\"muted\">周一至周日 10:00-20:00<br>最后接待 18:30</p>\n          </article>\n        </div>\n      </div>\n    </section>\n  </main>\n\n  <footer class=\"footer\">\n    <span>© 2026 泡泡爪宠物洗护</span>\n    <span>温和洗护 · 透明报价 · 猫犬友好</span>\n  </footer>";

export default function Home() {
  useEffect(() => {
    const packageSelect = document.querySelector("#packageSelect");
    const petSize = document.querySelector("#petSize");
    const petType = document.querySelector("#petType");
    const estimatePrice = document.querySelector("#estimatePrice");
    const bookingForm = document.querySelector("#bookingForm");
    const formMessage = document.querySelector("#formMessage");
    const environmentTrack = document.querySelector("#environmentTrack");
    const environmentSlides = document.querySelectorAll(".environment-slide");
    const carouselDots = document.querySelectorAll("[data-carousel-dot]");
    const carouselPrev = document.querySelector("[data-carousel-prev]");
    const carouselNext = document.querySelector("[data-carousel-next]");
    const environmentCarousel = document.querySelector(".environment-carousel");

    if (
      !packageSelect ||
      !petSize ||
      !petType ||
      !estimatePrice ||
      !bookingForm ||
      !formMessage ||
      !environmentTrack ||
      !carouselPrev ||
      !carouselNext ||
      !environmentCarousel ||
      environmentSlides.length === 0
    ) {
      return undefined;
    }

    const sizeAddons = {
      small: 0,
      medium: 40,
      large: 90,
    };

    const updateEstimate = () => {
      const base = Number(packageSelect.value);
      const addon = sizeAddons[petSize.value] || 0;
      const catAddon = petType.value === "cat" ? 30 : 0;
      estimatePrice.textContent = `¥${base + addon + catAddon} 起`;
    };

    let currentEnvironmentSlide = 0;
    let environmentTimer;

    const showEnvironmentSlide = (index) => {
      currentEnvironmentSlide = (index + environmentSlides.length) % environmentSlides.length;
      environmentTrack.style.transform = `translateX(-${currentEnvironmentSlide * 100}%)`;
      carouselDots.forEach((dot, dotIndex) => {
        dot.setAttribute("aria-current", String(dotIndex === currentEnvironmentSlide));
      });
    };

    const startEnvironmentCarousel = () => {
      environmentTimer = window.setInterval(() => {
        showEnvironmentSlide(currentEnvironmentSlide + 1);
      }, 5200);
    };

    const resetEnvironmentCarousel = () => {
      window.clearInterval(environmentTimer);
      startEnvironmentCarousel();
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(bookingForm);
      const owner = data.get("owner") || "主人";
      const date = data.get("date") || "预约日";
      formMessage.textContent = `${owner}，已收到 ${date} 的预约意向。门店会尽快电话确认具体时段。`;
      bookingForm.reset();
      updateEstimate();
    };

    const handlePrev = () => {
      showEnvironmentSlide(currentEnvironmentSlide - 1);
      resetEnvironmentCarousel();
    };

    const handleNext = () => {
      showEnvironmentSlide(currentEnvironmentSlide + 1);
      resetEnvironmentCarousel();
    };

    const handlePause = () => window.clearInterval(environmentTimer);
    const dotHandlers = [];

    [packageSelect, petSize, petType].forEach((control) => {
      control.addEventListener("change", updateEstimate);
    });
    bookingForm.addEventListener("submit", handleSubmit);
    carouselPrev.addEventListener("click", handlePrev);
    carouselNext.addEventListener("click", handleNext);
    carouselDots.forEach((dot) => {
      const handleDotClick = () => {
        showEnvironmentSlide(Number(dot.dataset.carouselDot));
        resetEnvironmentCarousel();
      };
      dotHandlers.push([dot, handleDotClick]);
      dot.addEventListener("click", handleDotClick);
    });
    environmentCarousel.addEventListener("mouseenter", handlePause);
    environmentCarousel.addEventListener("mouseleave", startEnvironmentCarousel);
    environmentCarousel.addEventListener("focusin", handlePause);
    environmentCarousel.addEventListener("focusout", startEnvironmentCarousel);

    updateEstimate();
    startEnvironmentCarousel();

    return () => {
      window.clearInterval(environmentTimer);
      [packageSelect, petSize, petType].forEach((control) => {
        control.removeEventListener("change", updateEstimate);
      });
      bookingForm.removeEventListener("submit", handleSubmit);
      carouselPrev.removeEventListener("click", handlePrev);
      carouselNext.removeEventListener("click", handleNext);
      dotHandlers.forEach(([dot, handleDotClick]) => {
        dot.removeEventListener("click", handleDotClick);
      });
      environmentCarousel.removeEventListener("mouseenter", handlePause);
      environmentCarousel.removeEventListener("mouseleave", startEnvironmentCarousel);
      environmentCarousel.removeEventListener("focusin", handlePause);
      environmentCarousel.removeEventListener("focusout", startEnvironmentCarousel);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
