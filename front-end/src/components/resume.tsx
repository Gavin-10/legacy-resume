import { Container, Accordion } from "react-bootstrap"

function Resume() {
  return(
    <Container data-bs-theme="dark" className="text-white py-5">
      <h1>My Resume</h1>
      <hr></hr>

      <Accordion defaultActiveKey="0" data-bs-theme="dark" className='mt-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Work Experience</Accordion.Header>
          <Accordion.Body>
            <h5 className="m-0 mb-1"><u><strong>Digital Projection</strong></u></h5>
            <p className="m-0"><strong>February 2023 - August 2023</strong></p>
            <p className="m-0"><strong>Mechanical Engineering Intern</strong></p>

            <hr></hr>

            <p className="mt-3 mb-0">
              During my time at Digital Projection as a mechanical engineering intern, 
              I was responsible for modeling large LED displays to meet customer 
              specifications as well as organizing the 3D model library and provide 
              creative solutions to custom projects.
            </p>

            <ul className="unstyled mb-0 mt-2">
              <li>Organized 3D model library to decrease search time by 50%</li>
              <li>Reduced display thickness by 75% on custom display</li>
              <li>Modeled display brackets to create a constant display thickness across all models</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>University Career (alpha)</Accordion.Header>
          <Accordion.Body>
            Through my university career so far, I have thrown a lot of my time and 
            effort into the Russian Flagship program. At the beginning of the semester, 
            I decided to take Russian as my foreign language class, which lead me to 
            joining the flagship program, where we learn Russian in an accelerated 
            and intensive course. This program also includes many study away programs, 
            one of which is in Armenia and Georgia, which I will be attending this 
            summer. Additionally, there are a few computer science majors in the flagship 
            program who I have been able to work with and help through their comp-sci 
            projects. Throughout the year I have also been doing a deep dive into web 
            development so I can join the ACM club and contribute to their open source 
            projects. This will open doors for me to also contribute to other open source 
            projects outside of university too. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Scouting Career</Accordion.Header>
          <Accordion.Body>
            I started off my scouting career as early as possible when I was  
            5, worked until I got my Eagle Scout, and continued until I was 18.  
            During scouts I learned many valuable 
            lessons, but one of the most important is how valuable teamwork is. I  
            took part in several community and service project and was fortunate  
            enough to lead my Eagle Scout project, all of which were made  
            possible through teamwork. Another important thing I learned from scouting 
            is service to the community, which is a value that I maintain today and  
            will continue to through volunteer work and other projects. 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Resume