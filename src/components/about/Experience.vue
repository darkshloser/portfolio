<template>
  <div class="row">
    <!-- Work experience -->
    <div class="col-lg-8 v-separator">
      <h4 class="font-section" style="font-size: 20px">Work Experience</h4>
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
                    class="details-icon"
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
                    <h7 class="font-genos"><u>Technologies:</u></h7>
                    <br />
                    <span
                      class="badge skill-badge font-genos"
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

      <div class="row">
        <div class="col v-separator">
          <h4 class="font-section" style="font-size: 20px">Languages</h4>
          <div class="language">
            <div class="row">
              <div v-html="flags.english" class="langs-interests"></div>
              <div v-html="flags.bulgarian" class="langs-interests"></div>
              <div v-html="flags.dutch" class="langs-interests"></div>
            </div>
          </div>
        </div>
        <div class="col v-separator">
          <h4 class="font-section" style="font-size: 20px">Interests</h4>
          <div class="language">
            <div class="row">
              <div v-html="interests.swimming" class="langs-interests"></div>
              <div v-html="interests.cycling" class="langs-interests"></div>
              <div v-html="interests.m_cycling" class="langs-interests"></div>
              <div v-html="interests.music" class="langs-interests"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="col-lg-4 v-separator">
      <h4 class="font-section" style="font-size: 20px">Education</h4>
      <div class="education">
        <ul>
          <li v-for="(item, index) in education" :key="index">
            <div class="content">
              <h5>{{ item.institute }}</h5>
              <h7 class="font-sticky-notes">{{ item.course }}</h7>
              <p>
                <i class="font-sticky-notes">{{ item.date }}</i>
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
            value: `<p class="font-genos">I'm grateful and always striving to provide the best service which I’m capable of to all the projects in which I’m involved. I believe that a key factor for a happy customer is the ability to clearly communicate and really understand customers' needs behind the scenes.</p><br/><p class="font-genos">If you are looking for a professional to provide solutions and add value to the project you have, we might be the right fit.</p>`,
          },
          skills: ["VueJS", "React", "FastAPI", "Docker", "Scripting"],
          selected: false,
        },
        {
          date: "Jan 2019",
          position: "Full Stack Developer",
          description: {
            isHtml: true,
            value: `<p class="font-genos">Active involvement in the design and development of a web-based enterprise application for managing lithography machines. This project along with a few other smaller applications requires a wide variety of skills and experience to develop and maintain.</p>`,
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
            isHtml: true,
            value: `<p class="font-genos">An open-source project whose main purpose is to generate global credentials wallet for every learner with bullet-proved accomplishments validated and stored on the blockchain. This will add credibility to actual accomplishments and speed up the hiring process. One of the biggest problems was the validation of a significant amount of information (on the blockchain itself), which was solved by combining blockchain and IPFS technologies.</p>`,
          },
          skills: [
            "Blockchain",
            "React",
            "Bootstrap",
            "NodeJS",
            "Django",
            "IPFS",
          ],
          selected: false,
        },
        {
          date: "May 2015",
          position: "Scrum Master",
          description: {
            isHtml: true,
            value: `<p class="font-genos">I’m grateful that I had the opportunity to help teams to accept and realize the benefits of Agile Methodology. As a Certified Scrum Master, I gained experience in areas like forming a team, guiding team members along with ensuring successful deliveries. I’ve also gained practical experience in change, risk, and scope management.</p>`,
          },
          skills: ["Jira", "Assembla", "Trello"],
          selected: false,
        },
        {
          date: "Jan 2015",
          position: "R&D Specialist",
          description: {
            isHtml: true,
            value: `<p class="font-genos">I've gained experience with the entire lifecycle of enterprise software solutions. I have been actively involved in the process of fixing issues, building, and performing all the required testing before delivering the new changes.</p>`,
          },
          skills: ["Python", "C", "Bash", "ClearCase"],
          selected: false,
        },
        {
          date: "Mar 2007",
          position: "Software Developer (CAD+GIS)",
          description: {
            isHtml: true,
            value: `<p class="font-genos">Early in my career, I had the opportunity to work for a company that was assigned to develop software applications for customers like Kozloduy NPP, Chimcomplect Engineering Jsc. (NABUCCO pipeline project), and many municipalities in Bulgaria.</p>`,
          },
          skills: ["VBA", "MySQL", "Scripting"],
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
      zoom_in_icon: `<svg xmlns="http://www.w3.org/2000/svg" ><path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>`,
      flags: {
        english: `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.2 38.4" style="enable-background:new 0 0 55.2 38.4" xml:space="preserve"><style type="text/css">.st0{fill:#FEFEFE;} .st1{fill:#C8102E;} .st2{fill:#012169;}</style><g><path class="st0" d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z"/><polygon class="st1" points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"/><path class="st2" d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z"/><path class="st2" d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z"/><path class="st2" d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z"/><path class="st2" d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z"/><polygon class="st2" points="0,12.8 7.65,12.8 0,8.97 0,12.8"/><polygon class="st2" points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8"/><polygon class="st2" points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6"/><polygon class="st2" points="0,25.6 7.65,25.6 0,29.43 0,25.6"/><polygon class="st1" points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"/><polygon class="st1" points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"/><polygon class="st1" points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"/><polygon class="st1" points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"/></g></svg>`,
        bulgarian: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3"><path fill="#fff" d="M0 0h5v3H0z"/><path fill="#00966E" d="M0 1h5v2H0z"/><path fill="#D62612" d="M0 2h5v1H0z"/></svg>`,
        dutch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6"><path fill="#21468B" d="M0 0h9v6H0z"/><path fill="#FFF" d="M0 0h9v4H0z"/><path fill="#AE1C28" d="M0 0h9v2H0z"/></svg>`,
        usa: `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.2 38.4" style="enable-background:new 0 0 55.2 38.4" xml:space="preserve"><style type="text/css">.st0{fill:#B22234;} .st1{fill:#FFFFFF;} .st2{fill:#3C3B6E;}</style><g><path class="st0" d="M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z"/><path class="st1" d="M0.02,2.73h55.17c0.01,0.1,0.02,0.2,0.02,0.31v2.94H0V3.03C0,2.93,0.01,2.83,0.02,2.73L0.02,2.73z M55.2,8.67 v3.24H0V8.67H55.2L55.2,8.67z M55.2,14.61v3.24H0v-3.24H55.2L55.2,14.61z M55.2,20.55v3.24H0v-3.24H55.2L55.2,20.55z M55.2,26.49 v3.24H0v-3.24H55.2L55.2,26.49z M55.2,32.43v2.93c0,0.1-0.01,0.21-0.02,0.31H0.02C0.01,35.58,0,35.47,0,35.37v-2.93H55.2 L55.2,32.43z"/><path class="st2" d="M20.8,0v20.68H0V3.03C0,1.36,1.36,0,3.03,0H20.8L20.8,0L20.8,0z"/><polygon class="st1" points="1.23,2.86 1.92,5.01 0.1,3.68 2.36,3.68 0.53,5.01 1.23,2.86"/><polygon class="st1" points="1.23,7.02 1.92,9.17 0.1,7.84 2.36,7.84 0.53,9.17 1.23,7.02"/><polygon class="st1" points="1.23,11.18 1.92,13.33 0.1,12 2.36,12 0.53,13.33 1.23,11.18"/><polygon class="st1" points="1.23,15.34 1.92,17.49 0.1,16.16 2.36,16.16 0.53,17.49 1.23,15.34"/><polygon class="st1" points="3.67,0.78 4.37,2.93 2.54,1.6 4.81,1.6 2.97,2.93 3.67,0.78"/><polygon class="st1" points="3.67,4.94 4.37,7.09 2.54,5.76 4.81,5.76 2.97,7.09 3.67,4.94"/><polygon class="st1" points="3.67,9.1 4.37,11.25 2.54,9.92 4.81,9.92 2.97,11.25 3.67,9.1"/><polygon class="st1" points="3.67,13.26 4.37,15.41 2.54,14.08 4.81,14.08 2.97,15.41 3.67,13.26"/><polygon class="st1" points="3.67,17.42 4.37,19.57 2.54,18.24 4.81,18.24 2.97,19.57 3.67,17.42"/><polygon class="st1" points="6.12,2.86 6.82,5.01 4.99,3.68 7.25,3.68 5.42,5.01 6.12,2.86"/><polygon class="st1" points="6.12,7.02 6.82,9.17 4.99,7.84 7.25,7.84 5.42,9.17 6.12,7.02"/><polygon class="st1" points="6.12,11.18 6.82,13.33 4.99,12 7.25,12 5.42,13.33 6.12,11.18"/><polygon class="st1" points="6.12,15.34 6.82,17.49 4.99,16.16 7.25,16.16 5.42,17.49 6.12,15.34"/><polygon class="st1" points="8.57,0.78 9.26,2.93 7.44,1.6 9.7,1.6 7.87,2.93 8.57,0.78"/><polygon class="st1" points="8.57,4.94 9.26,7.09 7.44,5.76 9.7,5.76 7.87,7.09 8.57,4.94"/><polygon class="st1" points="8.57,9.1 9.26,11.25 7.44,9.92 9.7,9.92 7.87,11.25 8.57,9.1"/><polygon class="st1" points="8.57,13.26 9.26,15.41 7.44,14.08 9.7,14.08 7.87,15.41 8.57,13.26"/><polygon class="st1" points="8.57,17.42 9.26,19.57 7.44,18.24 9.7,18.24 7.87,19.57 8.57,17.42"/><polygon class="st1" points="11.01,2.86 11.71,5.01 9.88,3.68 12.14,3.68 10.31,5.01 11.01,2.86"/><polygon class="st1" points="11.01,7.02 11.71,9.17 9.88,7.84 12.14,7.84 10.31,9.17 11.01,7.02"/><polygon class="st1" points="11.01,11.18 11.71,13.33 9.88,12 12.14,12 10.31,13.33 11.01,11.18"/><polygon class="st1" points="11.01,15.34 11.71,17.49 9.88,16.16 12.14,16.16 10.31,17.49 11.01,15.34"/><polygon class="st1" points="13.46,0.78 14.16,2.93 12.33,1.6 14.59,1.6 12.76,2.93 13.46,0.78"/><polygon class="st1" points="13.46,4.94 14.16,7.09 12.33,5.76 14.59,5.76 12.76,7.09 13.46,4.94"/><polygon class="st1" points="13.46,9.1 14.16,11.25 12.33,9.92 14.59,9.92 12.76,11.25 13.46,9.1"/><polygon class="st1" points="13.46,13.26 14.16,15.41 12.33,14.08 14.59,14.08 12.76,15.41 13.46,13.26"/><polygon class="st1" points="13.46,17.42 14.16,19.57 12.33,18.24 14.59,18.24 12.76,19.57 13.46,17.42"/><polygon class="st1" points="15.9,2.86 16.6,5.01 14.77,3.68 17.03,3.68 15.21,5.01 15.9,2.86"/><polygon class="st1" points="15.9,7.02 16.6,9.17 14.77,7.84 17.03,7.84 15.21,9.17 15.9,7.02"/><polygon class="st1" points="15.9,11.18 16.6,13.33 14.77,12 17.03,12 15.21,13.33 15.9,11.18"/><polygon class="st1" points="15.9,15.34 16.6,17.49 14.77,16.16 17.03,16.16 15.21,17.49 15.9,15.34"/><polygon class="st1" points="18.35,0.78 19.05,2.93 17.22,1.6 19.48,1.6 17.65,2.93 18.35,0.78"/><polygon class="st1" points="18.35,4.94 19.05,7.09 17.22,5.76 19.48,5.76 17.65,7.09 18.35,4.94"/><polygon class="st1" points="18.35,9.1 19.05,11.25 17.22,9.92 19.48,9.92 17.65,11.25 18.35,9.1"/><polygon class="st1" points="18.35,13.26 19.05,15.41 17.22,14.08 19.48,14.08 17.65,15.41 18.35,13.26"/><polygon class="st1" points="18.35,17.42 19.05,19.57 17.22,18.24 19.48,18.24 17.65,19.57 18.35,17.42"/></g></svg>`,
      },
      interests: {
        swimming: `<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20.306 20.306" style="enable-background:new 0 0 20.306 20.306;" xml:space="preserve"><g><g><path style="fill:#030104;" d="M7.816,10.297c1.197,0.148,2.314,0.529,3.35,1.008c0.503,0.235,1.04,0.542,1.461,0.782c0.422,0.248,0.85,0.473,1.282,0.691l-2.624-5.195L10.73,6.608L8.771,3.177C8.495,2.693,7.879,2.524,7.394,2.8C6.908,3.08,6.74,3.695,7.018,4.18l2.166,3.797L8.629,8.469l-3.31,1.888l-0.077,0.042C6.097,10.219,6.978,10.192,7.816,10.297z"/><circle style="fill:#030104;" cx="14.955" cy="8.194" r="2.179"/><path style="fill:#030104;" d="M20.161,12.613c-0.309,1.027-0.797,1.98-1.492,2.473c-0.677,0.492-1.448,0.523-2.298,0.352c-0.848-0.176-1.726-0.541-2.586-0.975c-0.436-0.219-0.864-0.443-1.288-0.693c-0.42-0.24-0.959-0.547-1.461-0.781c-1.035-0.479-2.152-0.861-3.351-1.01c-1.189-0.148-2.469-0.051-3.623,0.408c-1.158,0.451-2.138,1.242-2.817,2.174C0.578,15.502,0.116,16.547,0,17.639c1.297-1.719,2.953-2.951,4.67-3.238c1.712-0.314,3.495,0.201,5.224,1.014c0.451,0.205,0.83,0.412,1.326,0.678c0.5,0.25,1.01,0.494,1.535,0.699c1.054,0.406,2.188,0.74,3.438,0.748c0.62,0.002,1.278-0.084,1.901-0.342c0.625-0.25,1.185-0.695,1.55-1.227C20.358,14.879,20.431,13.664,20.161,12.613z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g</svg>`,
        cycling: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M326.7 60.61c-3.4 0-6.9.76-10.7 2.4-7.4 3.25-15 9.88-20.3 19.2-5.2 9.33-6.9 19.29-5.8 27.39 1.1 8 4.7 13.8 10.3 17 5.5 3.1 12.4 3.2 19.8-.1 7.5-3.2 15.1-9.9 20.3-19.2 5.3-9.31 7-19.28 5.9-27.33-1.1-8.08-4.8-13.81-10.3-16.95-2.8-1.56-5.9-2.38-9.2-2.4zM271.6 102c-31 17.2-67.1 32.6-117.2 43.6-13.8 3-22.3 35-11.9 46.4h-14.9v18H157c4.3 5.6 8.6 11.2 12.6 17l-26.1 52.2c-9.8-3.7-20.4-5.8-31.5-5.8-49.05 0-89 40-89 89s39.95 89 89 89c46 0 84-35.2 88.5-80h15.8c-1.7-6.1-1.5-12.3 0-18h-15.8c-2.8-27.7-18.4-51.8-40.8-66.1l21.6-43.2c6.1 9.5 11.8 19.2 16.9 29-4.2 4.4-8.9 8.8-14.3 13.3 5.8 8.6 11.6 17 20.8 22.5 2.2-2 4.4-4.2 6.7-6.5 4.9 12.8 8.7 25.7 11.2 39 6.1-7.3 15.2-12 25.4-12 9.3 0 17.8 4 23.8 10.3l80-91.5c1.8 12.2 4.4 23.8 7.5 35.1-28.6 14.8-48.3 44.8-48.3 79.1 0 49 40 89 89 89s89-40 89-89-40-89-89-89c-8.2 0-16.2 1.1-23.8 3.3-4-14.9-6.9-30.2-8.3-46.8 4.7-5.7 8.4-12.9 10.6-20.4l.1-.2c8.3 1.2 19 6.4 21.1 13.6l17.4-4.4c-10.4-26-38.7-31-62.1-26.1-32.4-6.6-56.2-14.4-59.1-48-1.5-.6-3.1-1.3-4.6-2.2-11-6.2-17.5-17.7-19.2-30.2-.5-3.3-.6-6.6-.5-10zm-1.3 61.8c25.3 46.3 54.8 48.2 84.7 51.8-2.4 3.2-5.3 6.4-8.3 9.8h-75.9c2.6-4.5 4.3-8 4.8-10 1.1-5.2-10.6-13.4-24.2-21.6-11.7 5.4-26.4 9.9-42.4 11.7 8.9 5.7 17.1 12.3 24.6 19.9h-14.9c-3.1-6.5-6.4-13.1-9.7-19.9-2.5-5.1-5-10.3-7.5-15.7 19.8-2.7 47-8.2 68.8-26zm-11 79.6h72.9l-76.1 86.9c-3.1-22-9-41.2-16.7-60 7.3-9.2 14.1-18.6 19.9-26.9zm-147.3 48c8.2 0 16.1 1.4 23.4 4l-37.96 76H182.4c-4.4 35-34.2 62-70.4 62-39.32 0-71-31.7-71-71s31.68-71 71-71zm288 0c39.3 0 71 31.7 71 71s-31.7 71-71 71-71-31.7-71-71c0-26.4 14.3-49.4 35.6-61.6 7.3 21.6 16.6 42.7 27.2 65.4l16.4-7.6c-10.7-23-19.9-43.7-26.8-64.7 5.9-1.6 12.1-2.5 18.6-2.5zm-248.4 12c16.6 11.2 28.2 29.2 30.8 50h-55.8zm96.4 44c-8.4 0-15 6.6-15 15s6.6 15 15 15 15-6.6 15-15-6.6-15-15-15z"/></svg>`,
        m_cycling: `<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 556.748 556.748" style="enable-background:new 0 0 556.748 556.748;"xml:space="preserve"><g><g><path d="M479.883,159.436c-7.095-13.923-24.9-24.815-40.525-24.815h-12.087c-11.657,0-28.19-7.239-36.108-15.816L289.044,8.329C284.091,2.955,277.904,0,271.65,0c-8.233,0-15.472,4.896-19.842,13.406l-94.726,184.547c-3.156,6.148-9.448,9.974-16.409,9.974c-2.859,0-5.604-0.641-8.167-1.913l-33.287-16.648c-4.236-2.123-9.008-3.251-13.78-3.251c-11.484,0-22.003,6.177-27.454,16.113l-38.938,70.916c-2.582,4.714-2.754,9.62-0.478,13.464c2.285,3.863,6.674,6.071,12.048,6.071h150.313l34.808-34.884c9.496-10.844,22.749-12.087,27.97-12.087c0.976,0,1.712,0.048,2.324,0.086c-0.048-0.842-0.249-1.635-0.249-2.486c0-25.188,20.483-45.651,45.661-45.651c25.179,0,45.661,20.473,45.661,45.642c0,24.222-19.067,43.911-42.974,45.327l2.592,4.063h229.223c5.345,0,9.744-2.189,12.096-6.034c2.343-3.824,2.305-8.769-0.124-13.502L479.883,159.436z M146.888,223.036V233c0,6.665-5.374,12.708-11.991,13.493l-1.673,0.201c-6.627,0.774-15.042,4.791-18.791,8.969c-3.758,4.169-11.58,5.001-17.461,1.855l-1.339-0.708c-5.881-3.136-16.075-5.689-22.749-5.689c-6.675,0-10.72-5.231-9.027-11.705l8.74-33.498c0.296-1.147,0.43-2.18,0.498-3.136c3.414-2.84,7.698-4.59,12.335-4.59c2.955,0,5.766,0.66,8.376,1.979l33.287,16.629c4.255,2.142,8.826,3.204,13.569,3.204c2.391,0,4.714-0.335,6.971-0.861C147.185,220.425,146.888,221.726,146.888,223.036zM400.524,146.449l-26.097,73.65c-2.209,6.292-7.727,7.44-12.287,2.563l-3.118-3.318c-4.552-4.886-10.948-13.512-14.276-19.297l-4.571-7.937c-3.327-5.785-8.721-8.109-12.067-5.192c-3.338,2.936-7.736,0.153-9.821-6.177l-7.535-22.931c-2.084-6.35-7.19-7.287-11.398-2.113l-13.444,16.553c-4.208,5.183-7.622,3.978-7.622-2.697v-25.675c0-6.674-4.016-8.472-8.988-4.006l-12.23,11.016c-4.953,4.465-8.147,2.744-7.124-3.844l6.856-44.074c1.023-6.598-2.247-8.425-7.306-4.083l-2.812,2.391c-5.059,4.341-8.195,2.553-7-4.026l9.505-52.278l13.378-26.067c4.026-7.851,11.685-8.845,17.614-2.419L382.298,126.99c5.24,5.67,13.005,10.672,21.354,14.239C402.408,142.682,401.279,144.336,400.524,146.449z M487.629,214.162c-6.35-2.008-11.522,1.052-11.522,6.847c0,5.804-3.166,6.101-7.048,0.669l-0.994-1.349c-3.893-5.422-9.085-9.801-11.59-9.801c-2.496,0-6.216-4.447-8.301-9.907c-2.084-5.46-6.139-7.879-9.056-5.374c-2.936,2.496-5.288-0.899-5.288-7.555v-4.533c0-6.674-4.743-12.087-10.586-12.087c-5.833,0-9.409-5.297-7.984-11.8c0,0,0.956-4.37,2.123-9.725c0.296-1.368,0.354-2.697,0.21-3.959c3.348,0.669,6.617,1.109,9.688,1.109h12.087c11.102,0,24.738,8.338,29.777,18.216l26.393,51.714L487.629,214.162z"/><path d="M293.013,276.519c17.279,0,31.317-13.971,31.317-31.26c0-17.251-14.047-31.289-31.317-31.289c-17.26,0-31.298,14.066-31.298,31.289C261.734,262.548,275.753,276.519,293.013,276.519z"/><path d="M227.481,269.892l-66.191,66.326c-4.255,4.608-6.742,10.776-6.742,17.509c0,9.792,5.47,18.437,13.502,22.901l67.406,37.476v70.485c0,9.945,8.062,18.102,18.025,18.102c9.993,0,18.063-8.128,18.063-18.102v-88.08c0,0,2.391-14.019-13.598-21.697l-38.881-20.482l41.951-41.54l20.32,31.843c3.567,5.643,8.482,7.899,13.034,7.804h60.454c18.752,0,18.752-24.48,0-24.48l-52.221,0.115l-34.349-53.875c0,0-7.287-12.106-21.124-12.106C247.123,262.108,235.628,260.616,227.481,269.892z"/><path d="M376.063,386.086c-47.114,0-85.364,38.135-85.364,85.316c0,47.191,38.269,85.346,85.364,85.346c47.047,0,85.288-38.174,85.288-85.346C461.352,424.202,423.11,386.086,376.063,386.086z"/><path d="M45.774,471.402c0,47.172,38.26,85.346,85.269,85.346c47.191,0,85.383-38.174,85.383-85.346c0-47.182-38.221-85.316-85.383-85.316C84.034,386.086,45.774,424.25,45.774,471.402z"/></g></svg>`,
        music: `<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 59 59" style="enable-background:new 0 0 59 59;" xml:space="preserve"><g><path d="M37,43c-0.553,0-1,0.447-1,1c0,3.309-2.691,6-6,6s-6-2.691-6-6c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.411,3.589,8,8,8s8-3.589,8-8C38,43.447,37.553,43,37,43z"/><circle cx="23" cy="37" r="2"/><circle cx="37" cy="37" r="2"/><path d="M54.981,23.208C54.576,10.489,44.443,2,29.5,2S4.424,10.489,4.019,23.208C1.705,23.857,0,25.981,0,28.5v14C0,45.532,2.468,48,5.5,48c1.965,0,3.688-1.039,4.661-2.594C13.961,52.52,21.291,57,29.5,57s15.539-4.48,19.339-11.594C49.812,46.961,51.535,48,53.5,48c3.032,0,5.5-2.468,5.5-5.5v-14C59,25.981,57.295,23.857,54.981,23.208z M29.5,4c11.418,0,22.93,5.897,23.474,19.027c-1.559,0.149-2.927,0.954-3.833,2.133c-1.977-4.119-5.144-7.392-9.036-9.5c-3.122-1.916-6.785-2.983-10.763-2.983c-4.124,0-7.901,1.2-11.081,3.323c-3.606,2.113-6.533,5.265-8.402,9.16c-0.906-1.179-2.273-1.984-3.833-2.133C6.57,9.897,18.082,4,29.5,4z M18.402,18.283C21.579,16.185,25.398,15,29.5,15c3.402,0,6.605,0.821,9.414,2.294c4.456,2.686,7.715,7.281,8.945,13.077c-3.811,1.274-5.979-1.35-8.029-4.405c-0.34-0.506-0.879-0.849-1.479-0.94c-0.615-0.091-1.245,0.078-1.733,0.468c-9.285,7.417-21.98,5.465-25.45,4.748C12.271,25.115,14.845,20.997,18.402,18.283z M5.5,46C3.57,46,2,44.43,2,42.5v-14C2,26.57,3.57,25,5.5,25c1.688,0,3.101,1.202,3.428,2.794c0,0.001,0,0.003,0,0.004C8.977,28.025,9,28.262,9,28.5v13.965c-0.006,0.046-0.016,0.142-0.017,0.176c0,0.003,0.002,0.006,0.002,0.009C8.905,44.509,7.379,46,5.5,46z M48,42.524C44.919,50.111,37.684,55,29.5,55s-15.42-4.889-18.501-12.476C11,42.515,11,42.507,11,42.5V32.258c1.58,0.326,4.493,0.801,8.044,0.8c5.602,0,12.789-1.184,18.822-6.003c0.073-0.06,0.149-0.058,0.181-0.054c0.078,0.013,0.112,0.063,0.123,0.079c1.631,2.431,4.563,6.776,9.83,5.326V42.5C48,42.509,48,42.517,48,42.524z M57,42.5c0,1.93-1.57,3.5-3.5,3.5c-1.879,0-3.405-1.491-3.485-3.351c0-0.003,0.002-0.006,0.002-0.009C50.015,42.576,50.008,42.513,50,42.5v-14c0-0.238,0.023-0.475,0.071-0.701c0-0.001,0-0.003,0-0.004C50.399,26.202,51.812,25,53.5,25c1.93,0,3.5,1.57,3.5,3.5V42.5z"/></g></svg>`,
      },
    };
  },
  methods: {
    updateExperience(index) {
      this.experience[index].selected = !this.experience[index].selected;
    },
  },
};
</script>


<style scoped src="@/assets/styles/experience.css">
</style>

