<template>
  <div class="row external-links-block">
    <transition>
      <svg
        height="67px"
        id="linkedin_id"
        viewBox="0 0 67 67"
        width="67px"
        class="col-sm size-of-icons"
        v-html="linkedin_normal"
        @mouseover="mOver"
      ></svg>
    </transition>
    <transition>
      <svg
        enable-background="new -1163 1657.697 56.693 56.693"
        height="56.693px"
        id="github_id"
        viewBox="-1163 1657.697 56.693 56.693"
        width="56.693px"
        class="col-sm size-of-icons"
        v-html="github_normal"
        @mouseover="mOver"
      ></svg>
    </transition>
    <transition>
      <svg
        id="watsapp_id"
        viewBox="0 0 96 96"
        class="col-sm size-of-icons"
        v-html="whatsapp_normal"
        @mouseover="mOver"
      ></svg>
    </transition>
    <transition>
      <svg
        id="twitter_id"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        v-html="tweeter_normal"
        class="col-sm size-of-icons"
        @click="selectExtLink"
        @mouseover="mOver"
      ></svg>
    </transition>
  </div>
</template>


<script>
import gsap from "gsap";

export default {
  data() {
    return {
      selExtLink: true,
      tweeter_normal: `<path id="test_id" fill="#1d63b3" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>`,
      whatsapp_normal: `<title /><path id="test_id2" fill="#1d63b3" class="cls-1" d="M92,48v.13A44,44,0,1,1,47.87,4H48c1.06,0,2.11,0,3.16.12a42.89,42.89,0,0,1,5.12.67,43.39,43.39,0,0,1,8.1,2.37A44.13,44.13,0,0,1,88.79,31.47a43.22,43.22,0,0,1,2.43,8.24h0a44,44,0,0,1,.67,5.17C92,45.92,92,47,92,48Z" /> <path class="cls-2" d="M91,44.5v.12A39.53,39.53,0,1,1,51.38,5h.12c1,0,1.89,0,2.84.11a38.38,38.38,0,0,1,4.59.6,39.33,39.33,0,0,1,5.45,1.45A44.13,44.13,0,0,1,88.79,31.47a38.33,38.33,0,0,1,1.51,5.59h0a39.22,39.22,0,0,1,.6,4.64C91,42.63,91,43.57,91,44.5Z" /> align: center; <path class="cls-3" d="M74.66,21.93a36.47,36.47,0,0,1,3,3.52" /> <path class="cls-3" d="M58,12a38.11,38.11,0,0,1,11.78,5.76" /> <g> <path class="cls-4" d="M46.36,27.74A19.86,19.86,0,0,0,31.37,58L27.84,68.35l10.8-3.41a19.89,19.89,0,1,0,7.72-37.2Zm2.8,35.94A16,16,0,0,1,40,61.42a1,1,0,0,0-.82-.09l-6.21,2,2-6a1,1,0,0,0-.13-.87,16.15,16.15,0,1,1,14.3,7.14Z" /> <path fill="#1d63b3" class="cls-4" d="M54.07,50.26l4,2.09c.41.2.69.35.41,1.45s-.35,1.84-1.44,2.52a6.18,6.18,0,0,1-2.13,1c-.55.1-1.11.56-3.56-.36a19.08,19.08,0,0,1-9-6.19c-3.53-4.15-4.59-7.33-3.61-9.86a7.06,7.06,0,0,1,1.17-2,2.47,2.47,0,0,1,1.83-.92c.76-.12,1.5-.57,2.2,1.44s1.13,3,1.26,3.28a1.29,1.29,0,0,1-.4,1.55,12.33,12.33,0,0,0-1.1,1.19.89.89,0,0,0,0,1.1,15,15,0,0,0,3.38,4.15,19.35,19.35,0,0,0,3.17,1.87c.36.16.6.4,1.26-.28s1-1.2,1.41-1.64S53.65,50,54.07,50.26Z" /> </g>`,
      github_normal: `<g> <path clip-rule="evenodd" fill="#1d63b3" d="M-1134.6598,1662.9163c-13.601,0-24.63,11.0267-24.63,24.6299   c0,10.8821,7.0573,20.1144,16.8435,23.3713c1.2308,0.2279,1.6829-0.5345,1.6829-1.1849c0-0.587-0.0227-2.5276-0.0334-4.5857   c-6.8521,1.4901-8.2979-2.906-8.2979-2.906c-1.1205-2.8467-2.7347-3.6039-2.7347-3.6039   c-2.2349-1.5287,0.1685-1.4972,0.1685-1.4972c2.473,0.1737,3.7755,2.5385,3.7755,2.5385c2.1967,3.7651,5.7618,2.6765,7.1675,2.0472   c0.2211-1.5917,0.8591-2.6786,1.5637-3.2936c-5.4707-0.6226-11.2218-2.7347-11.2218-12.1722c0-2.6888,0.9623-4.8861,2.538-6.611   c-0.2557-0.6206-1.0989-3.1255,0.2386-6.5183c0,0,2.0684-0.6616,6.7747,2.525c1.9648-0.5458,4.0719-0.8195,6.165-0.829   c2.093,0.0095,4.2017,0.2832,6.17,0.829c4.7012-3.1866,6.7665-2.525,6.7665-2.525c1.3406,3.3928,0.4974,5.8977,0.2417,6.5183   c1.5793,1.7249,2.5348,3.9221,2.5348,6.611c0,9.4602-5.7618,11.5428-11.2465,12.1527c0.8834,0.7644,1.6704,2.2632,1.6704,4.561   c0,3.2955-0.0282,5.9479-0.0282,6.7592c0,0.6556,0.4432,1.4236,1.6915,1.1818c9.7812-3.2605,16.8296-12.4896,16.8296-23.3682   C-1110.0299,1673.943-1121.0574,1662.9163-1134.6598,1662.9163z" fill-rule="evenodd" /> <path d="M-1149.9611,1698.2793c-0.0542,0.1227-0.2469,0.1593-0.4222,0.0753c-0.1788-0.0804-0.2788-0.2473-0.2211-0.37   c0.053-0.126,0.2457-0.161,0.4242-0.0769C-1150.0013,1697.9882-1149.8993,1698.1566-1149.9611,1698.2793L-1149.9611,1698.2793z    M-1150.2642,1698.0547" /> <path d="M-1148.9634,1699.3922c-0.1174,0.1086-0.3473,0.0581-0.5031-0.1139c-0.1613-0.1718-0.1912-0.4016-0.072-0.5118   c0.1211-0.1088,0.3438-0.0579,0.505,0.1139C-1148.8721,1699.0541-1148.8407,1699.2819-1148.9634,1699.3922L-1148.9634,1699.3922z    M-1149.1984,1699.14" /> <path d="M-1147.9922,1700.8105c-0.151,0.1051-0.3979,0.0067-0.5505-0.2123c-0.151-0.2191-0.151-0.4819,0.0035-0.5872   c0.1526-0.1051,0.396-0.0104,0.5505,0.2068C-1147.8381,1700.4406-1147.8381,1700.7034-1147.9922,1700.8105L-1147.9922,1700.8105z    M-1147.9922,1700.8105" /> <path d="M-1146.6619,1702.1812c-0.1351,0.1489-0.4227,0.1086-0.6329-0.0945c-0.2155-0.1984-0.2753-0.4803-0.1403-0.6293   c0.1371-0.149,0.4263-0.1072,0.6381,0.0944C-1146.5831,1701.7501-1146.5182,1702.0337-1146.6619,1702.1812L-1146.6619,1702.1812z    M-1146.6619,1702.1812" /> <path d="M-1144.8265,1702.9769c-0.0597,0.1927-0.3365,0.2804-0.6154,0.1984c-0.2788-0.0845-0.4608-0.3103-0.4047-0.5051   c0.0577-0.1943,0.3361-0.2855,0.6169-0.1979C-1144.9512,1702.5563-1144.7688,1702.7805-1144.8265,1702.9769L-1144.8265,1702.9769z    M-1144.8265,1702.9769" /> <path d="M-1142.8107,1703.1243c0.0067,0.2031-0.2299,0.3716-0.5226,0.3752c-0.2944,0.0067-0.533-0.1577-0.5361-0.3577   c0-0.2052,0.2313-0.3717,0.5258-0.3768C-1143.0509,1702.7594-1142.8107,1702.9227-1142.8107,1703.1243L-1142.8107,1703.1243z    M-1142.8107,1703.1243" /> <path d="M-1140.9351,1702.8052c0.035,0.198-0.1686,0.4015-0.4594,0.4557c-0.2859,0.0526-0.5504-0.0701-0.587-0.2665   c-0.0354-0.2031,0.1716-0.4066,0.4573-0.4592C-1141.233,1702.4846-1140.9722,1702.6036-1140.9351,1702.8052L-1140.9351,1702.8052z    M-1140.9351,1702.8052" /> </g>`,
      linkedin_normal: `<path fill="#1d63b3" d="M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z" style="fill-rule: evenodd; clip-rule: evenodd; fill="#1d63b3" />`,
    };
  },
  methods: {
    mOver(elem) {
      if (elem.target.id === "twitter_id") {
        var beginShape = document.getElementById("test_id");
        var endShape = document.getElementById("test_id2");
        gsap.to("#test_id", {
          duration: 2,
          morphSVG: "240,220 240,70 70,70 70,220",
        });
      }
    },
    selectExtLink(e) {
      // console.log(e.target.id === "twitter_id" ? true : false);
      //   this.selExtLink = !this.selExtLink;
    },
  },
};
</script>


<style>
.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: 4s;
}

.v-enter-to {
  opacity: 1;
}

.external-links-block {
  text-align: center;
}
.size-of-icons {
  margin: 5px;
  padding: 5px;
  width: 45px;
  height: 45px;
  text-align: center;
  max-width: 45px;
  opacity: 0.7;
}

.cls-1 {
  fill: #0f3da0;
}

.cls-2 {
  fill: #1d63b3;
}

.cls-3 {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;
}

.cls-4 {
  fill: #fff;
}
</style>
