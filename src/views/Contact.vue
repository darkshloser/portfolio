<template>
  <br />
  <div class="white-paper">
    <div class="container">
      <div class="row">
        <MailSVG />
        <br />
        <h3 class="font-section title-size">Contact Me</h3>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-5 my-col">
          <br />
          <p class="font-cormorant text-size">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
        <div class="col-lg-6 col-md-7 my-col">
          <form id="contactform" ref="form" @submit.prevent="sendEmail">
            <div class="position-relative">
              <fa class="icon" :icon="['far', 'user']" />
              <input
                type="text"
                name="user_name"
                class="form-control form-control-lg thick font-genos"
                placeholder="Name"
              />
            </div>
            <div class="position-relative">
              <fa class="icon" :icon="['far', 'envelope']" />
              <input
                type="email"
                name="user_email"
                class="form-control form-control-lg thick font-genos"
                placeholder="E-mail"
              />
            </div>
            <textarea
              name="message"
              class="form-control form-control-lg font-genos"
              rows="7"
              placeholder="Mensagem"
            ></textarea>

            <a
              class="cta"
              type="button"
              target="_blank"
              value="Send"
              :onclick="sendEmail"
            >
              <span>Send</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MailSVG from "./../components/contact/mail.vue";
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  components: {
    MailSVG,
  },
  data() {
    return {
      submitted: false,
    };
  },
  created() {},
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "gsconsult_mail",
          "template_gsconsult",
          this.$refs.form,
          "token"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.$refs.form.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.cta {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: rgba(147, 157, 247, 0.5);
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
}
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: rgb(59, 59, 59);
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover:before {
  width: 100%;
  background: #42a4f5;
}
.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
}
form .form-control {
  background-color: #f2f6f8;
  border-radius: 2rem;
  border: none;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  margin-bottom: 15px;
}
form .form-control.thick {
  height: 3.3rem;
  padding: 0.5rem 3.5rem;
}
form .form-control:focus {
  background-color: #f2f6f8;
  border: none;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
}
form .message .form-control {
  padding: 0.5rem 1.8rem;
}
form .icon {
  color: #57565c;
  height: 1.3rem;
  position: absolute;
  left: 1.5rem;
  top: 1.1rem;
}
</style>