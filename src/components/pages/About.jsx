import capstoneImage from "../../assets/capstone-2.webp";

function About() {
  return (
    <div>
      <div className="about-hero-image">
        <img src={capstoneImage} alt="Stone Arch" />
      </div>

      <div className="capstone-process">
        <div className="card">
          <h1>Rachelle's Remix on the Capstone Process</h1>
          <h2>Mistakes Made, Lessons Learned, the Rachelle Way™</h2>
          <p>
            Leading up to the start of my capstone, I felt a growing sense of
            anxiety, largely due to lingering uncertainty around JavaScript and
            React. Despite those doubts, I reminded myself of a common phrase
            repeated throughout my training: “Start with what you know.” With
            that in mind, I began by building out the header, footer, contact
            page, and portions of the homepage—components I felt confident
            about. For structure and design inspiration, I referenced my
            husband's company website, which was recently developed through
            DevPipeline. <br />
            <br />
            Once those foundational pieces were in place, I turned my focus to
            the products page—only to realize I had no idea how to approach it.
            Then, during a sleepless night with the project occupying my
            thoughts, I remembered a recent assignment where we used mock data
            and component props to create a React application featuring user
            profile cards. That concept became my breakthrough. I applied the
            same structure to create and style my own set of mock product data.
            The result looked polished, and for the first time in the process, I
            felt real momentum and pride in my work. <br />
            <br />
            However, that confidence was quickly shaken when I learned I had
            misunderstood the project requirements. I wasn't supposed to create
            my own product data—the capstone was designed to use a fake API and
            fetch existing data. All the styling, content, and product themes I
            had crafted around a cake decorating concept no longer aligned with
            the expectations. It was a discouraging moment. I truly felt like
            I'd have to start over from scratch. <br />
            <br />
            Fortunately, I reached out to a dear friend and fellow developer in
            the DevPipeline community, and with her help, I was able to refactor
            my project to use the correct approach. To my surprise, it wasn't
            nearly as overwhelming or painful as I had feared. I had also been
            diligent about committing my changes daily, so the adjustment
            process went smoothly in hindsight. While I do wish the disconnect
            had been caught earlier—either by me or by my instructors—I take
            full responsibility for the misstep. Overcoming that challenge was a
            significant mental hurdle, but doing so has left me feeling more
            capable and resilient. <br />
            <br />
            Styling remains the part of this project I've enjoyed the most. It
            allowed me to bring creative vision to life and made the technical
            challenges feel rewarding, rather than frustrating. This entire
            experience has taught me that setbacks are simply part of the
            process—and that with the right mindset and support, they can become
            turning points.
          </p>
        </div>
      </div>

      <div className="front-end-journey">
        <div className="card">
          <h1>Rachelle's Front-End Journey:</h1>
          <h2>Real Experiences, Real Lessons</h2>
          <p>
            The front-end course felt significantly more fast-paced than the
            foundations course—what once felt like a steady jog quickly turned
            into an all-out sprint. There were many days I left class with a
            pounding headache, feeling mentally stretched and overwhelmed.
            Often, I found myself frustrated because I struggled to immediately
            grasp the material being presented. The volume and pace of
            information at times felt like trying to drink from a fire hose.
            Each exercise felt like a full-blown assignment, and each assignment
            resembled a mini capstone. <br />
            <br />
            On top of that, the course took place during the summer when my
            children were home, which added an extra layer of challenge.
            Balancing their needs with the demands of the program required
            constant adaptability. <br />
            <br />
            To cope, I had to develop strategies that helped me manage both the
            workload and the stress. During short breaks, I would sometimes take
            a quick power nap to reset my mind. I also found that a caffeinated
            beverage—though a habit I wasn't thrilled to pick up—is not only
            refreshingly satisfyling, but helped me stay alert and focused
            during intensive sessions. <br />
            <br />
            One of the most valuable lessons I learned was to be okay with
            asking for help. Speaking up when I didn't understand something
            became crucial to my progress. I also leaned heavily on independent
            study and outside resources to reinforce what I was learning. Over
            time, that extra effort paid off and helped solidify my
            understanding. <br />
            <br />
            At home, my daughter and I came up with a schedule that kept my
            younger boys engaged while I focused on schoolwork. Not only did
            this help me stay on track, but it also gave her the opportunity to
            earn some allowance—truly a win-win for everyone. <br />
            <br />
          </p>
        </div>
      </div>

      <div className="my-favorite-coding-language">
        <div className="card">
          <h1>A Match Made in {`<Code>`}</h1>
          <p>
            Python was the first programming language I learned, introduced
            through a comprehensive coding foundations course. Having no prior
            experience with coding, the concepts initially felt completely
            unfamiliar. However, by the end of the 15-week course, I was able to
            confidently read and interpret code, breaking down complex ideas
            into clear, accessible explanations. <br />
            <br />
            In the subsequent 15-week course, which I am currently completing,
            the focus was entirely on front-end development. During this time, I
            gained exposure to several technologies including JavaScript, React,
            CSS, and SCSS. I found CSS and SCSS particularly intuitive and
            enjoyable due to their logical structure and clear syntax. On the
            other hand, JavaScript and React presented more challenges for me.
            The pace at which these topics were covered felt rapid, and I
            believe I need more hands-on practice to fully internalize these
            skills. That said, working on the React Capstone project has
            significantly enhanced my understanding and confidence. <br />
            <br />
            In summary, Python remains my preferred language, with CSS and SCSS
            closely following as my next favorites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
