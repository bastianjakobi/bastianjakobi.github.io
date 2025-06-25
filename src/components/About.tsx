import Skill from "./Skill";

function About() {
  return (
    <section id="ueberMich" aria-label="Über mich" class="pt-8 pb-8 bg-colors-slate-50">
      <div class="pl-6 md:pl-20 pr-6 md:pr-20">
        <div class="mt-4">
          <div class="w-full font-body mb-4 md:mb-0 md:mt-0">
            <h2 class="font-heading text-3xl sm:text-4xl text-customDarkBlue mb-4">Über mich</h2>
            <p>
              <span class="font-extrabold text-customDarkBlue text-lg">
                Ich bin Bastian, 25 Jahre alt und Fullstack-Softwareentwickler.
              </span>
              <br />
              Dank meines erfolgreich abgeschlossenen Bachelorstudiums (B.Sc.) und meiner
              Spezialisierung auf Medieninformatik konnte ich mir bereits weitreichende Fähigkeiten
              in den Bereichen UI-/UX-Design, Projektmanagement und vor allem Softwareentwicklung
              aneignen. Diese konnte ich während und nach meinem Studium im Rahmen diverser Projekte
              und Jobs erfolgreich einbringen und so wertvolle praktische Erfahrungen sammeln. Mein
              Interesse galt dabei immer besonders der Gestaltung und Entwicklung hochqualitativer
              Webanwendungen. Aktuell arbeite ich als Softwareentwickler bei Capgemini und plane im
              Wintersemester 2023 mein Masterstudium zu beginnen.
            </p>
            <div className="mt-4">
              <p class="font-heading text-customDarkBlue text-lg">Skills</p>
              <Skill name="HTML & CSS" />
              <Skill name="JavaScript/TypeScript" />
              <Skill name="Frontend Frameworks" />
              <Skill name="Node.js (Express)" />
              <Skill name="Firebase" />
              <Skill name="Java (Quarkus)" />
              <Skill name="SQL/NoSQL" />
              <Skill name="Docker" />
              <Skill name="Git" />
              <Skill name="Agile Methoden" />
              <Skill name="UI/UX Design" />
            </div>
            <a
              href="https://bastianjakobi.notion.site/Lebenslauf-db301666a84541db9661822977fe9da2?source=copy_link"
              target="_blank"
              rel="noopener"
              class="px-5 py-2 mr-4 rounded-md bg-customDarkBlue hover:bg-customDarkerBlue text-white font-body mt-4 i inline-block"
            >
              Lebenslauf ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
