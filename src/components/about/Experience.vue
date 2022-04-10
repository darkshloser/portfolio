<template>
  <div class="row">
    <!-- Work experience -->
    <div class="col-lg-8">
      <h4>WORK EXPERIENCE</h4>
      <div class="timeline">
        <ul>
          <li
            v-for="(item, index) in experience"
            :key="index"
            :id="index"
            @click="updateExperience(index)"
            :class="{ 'selected-exp': item.selected }"
          >
            <span>{{ item.date }}</span>
            <div class="content">
              <h5>
                {{ item.position }}
                <Transition>
                  <div
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    v-html="zoom_in_icon"
                    v-if="!item.selected"
                  />
                </Transition>
              </h5>
              <Transition name="fade">
                <div v-if="item.selected">
                  <p v-if="!item.description.isHtml">
                    {{ item.description.value }}
                  </p>
                  <div v-else>
                    <div v-html="item.description.value"></div>
                  </div>
                  <div v-show="item.skills.length">
                    <h7><u>Technologies used:</u></h7>
                    <br />
                    <span
                      class="badge skill-badge"
                      v-for="(skill, idx) in item.skills"
                      :key="idx"
                      >{{ skill }}</span
                    >
                  </div>
                </div>
              </Transition>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Education -->
    <div class="col-lg-4">
      <h4>EDUCATION</h4>
      <div class="education">
        <ul>
          <li v-for="(item, index) in education" :key="index">
            <div class="content">
              <h5>{{ item.institute }}</h5>
              <h7>{{ item.course }}</h7>
              <p>
                <i>{{ item.date }}</i>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      hover_on_experience: false,
      selected_positions: [],
      experience: [
        {
          date: "Jan 2022",
          position: "Freelancer",
          description: {
            isHtml: true,
            value:
              "<p>I'm grateful and always striving to provide the best service which I’m capable of to all the projects in which I’m involved. I believe that a key factor for a happy customer is the ability to clearly communicate and really understand customers' needs behind the scenes.</p><br/><p>If you are looking for a professional to provide solutions and add value to the project you have, we might be the right fit.</p>",
          },
          skills: ["VueJS", "React", "FastAPI", "Docker", "Scripting"],
          selected: false,
        },
        {
          date: "Jan 2019",
          position: "Full Stack Developer",
          description: {
            isHtml: false,
            value:
              "Active involvement in the design and development of a web-based enterprise application for managing lithography machines. This project along with a few other smaller applications requires a wide variety of skills and experience to develop and maintain.",
          },
          skills: [
            "VueJS",
            "CSS/HTML",
            "NodeJS",
            "FastAPI",
            "Django",
            "Docker",
          ],
          selected: false,
        },
        {
          date: "Jul 2017",
          position: "Blockchain Developer",
          description: {
            isHtml: false,
            value:
              "An open-source project whose main purpose is to generate global credentials wallet for every learner with bullet-proved accomplishments validated and stored on the blockchain. This will add credibility to actual accomplishments and speed up the hiring process. One of the biggest problems was the validation of a significant amount of information (on the blockchain itself), which was solved by combining blockchain and IPFS technologies.",
          },
          skills: [
            "React",
            "Bootstrap",
            "NodeJS",
            "Django",
            "Blockchain",
            "IPFS",
          ],
          selected: false,
        },
        {
          date: "May 2015",
          position: "Scrum Master",
          description: {
            isHtml: false,
            value:
              "I’m grateful that I had the opportunity to help teams to accept and realize the benefits of Agile Methodology. As a Certified Scrum Master, I gained experience in areas like forming a team, guiding team members along with ensuring successful deliveries. I’ve also gained practical experience in change, risk, and scope management.",
          },
          skills: ["Jira", "Assembla", "Trello"],
          selected: false,
        },
        {
          date: "Jan 2015",
          position: "R&D Specialist",
          description: {
            isHtml: false,
            value:
              "I've gained experience with the entire lifecycle of enterprise software solutions. I have been actively involved in the process of fixing issues, building, and performing all the required testing before delivering the new changes. ",
          },
          skills: ["Python", "C", "Bash", "ClearCase"],
          selected: false,
        },
        {
          date: "Mar 2007",
          position: "Software Developer (CAD+GIS)",
          description: {
            isHtml: false,
            value:
              "Early in my career, I had the opportunity to work for a company that was assigned to develop software applications for customers like Kozloduy NPP, Chimcomplect Engineering Jsc. (NABUCCO pipeline project), and many municipalities in Bulgaria.",
          },
          skills: ["VBA", "MySQL", "Scripting", "ODBS"],
          selected: false,
        },
      ],
      education: [
        {
          date: "2016",
          institute: "UC Irvine",
          course: "Course, Managing Project risks and Changes",
        },
        {
          date: "2014",
          institute: "University of New Mexico",
          course: "Course, Web Applications Architecture",
        },
        {
          date: "2014",
          institute: "University of London",
          course:
            "Course, Creative Programming for Digital Media and mobile Apps",
        },
        {
          date: "2006",
          institute:
            "University of Architecture, Civil Engineering and Geodesy",
          course: "MSc, Geodesy, GIS",
        },
      ],
      zoom_in_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>`,
    };
  },
  methods: {
    updateExperience(index) {
      this.experience[index].selected = !this.experience[index].selected;
      console.log("Selected Experiences");
      console.log(this.experience);
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
*,
html,
body {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  perspective: 800px;
}
body {
  background-color: #227093;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.skill-badge {
  margin-right: 3px;
}
.timeline {
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  margin-right: 5px;
  color: #fff;
  padding: 30px 20px;
  box-shadow: 0px 0px 10px rgba(129, 121, 121, 0.5);
}
.timeline ul {
  list-style-type: none;
  border-left: 2px solid #094a68;
  padding: 10px 5px;
}
.timeline ul li {
  padding: 20px 20px;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
}
.timeline ul li span {
  display: inline-block;
  background-color: #1685b8;
  padding: 2px 5px;
  font-size: 15px;
  text-align: center;
}
.timeline ul li div span {
  display: inline-block;
  background-color: #1685b8;
  padding: 2px 5px;
  font-size: 15px;
  text-align: center;
}

.timeline ul li .content h5 {
  color: #34ace0;
  font-size: 17px;
  padding-top: 5px;
}
.timeline ul li .content p {
  padding: 5px 0px 15px 0px;
  font-size: 15px;
}
.timeline ul li:before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: #34ace0;
  border-radius: 50%;
  left: -11px;
  top: 28px;
  transition: 0.5s;
}
.timeline ul li:hover {
  background-color: #164e68;
  border-radius: 20px;
  transition: 2.5s;
}
.selected-exp {
  background-color: #071f2a;
  border-radius: 20px;
}
.timeline ul li:hover:before {
  background-color: #0f0;
  box-shadow: 0px 0px 10px 2px #0f0;
}

.education {
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 30px 20px;
  box-shadow: 0px 0px 10px rgba(129, 121, 121, 0.5);
}
.education ul {
  list-style-type: none;
  border-left: 2px solid #094a68;
  padding: 10px 5px;
  height: 100%;
}
.education ul li {
  padding: 20px 20px;
  background-color: #071f2a;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  margin-top: 2px;
  transition: 0.5s;
}
.education ul li .content h5 {
  color: #34ace0;
  font-size: 17px;
  padding-top: 5px;
}
.education ul li .content p {
  padding: 5px 0px 15px 0px;
  font-size: 15px;
}
.education ul li:after {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  left: -11px;
  top: 28px;
  background-color: #071f2a;
  border-radius: 20px;
  transition: 2.5s;
}
.education ul li:hover {
  background-color: #071f2a;
  border-radius: 20px;
  transition: 2.5s;
}
.education ul li:hover:before {
  background-color: #0f0;
  box-shadow: 0px 0px 10px 2px #0f0;
}

@media (max-width: 300px) {
  .timeline {
    width: 100%;
    padding: 30px 5px 30px 10px;
  }
  .timeline ul li .content h3 {
    color: #34ace0;
    font-size: 15px;
  }
}
</style>

