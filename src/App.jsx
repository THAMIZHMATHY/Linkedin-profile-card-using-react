import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="MainParent">
      <ProfileCard
        name="Thamizhmathy"
        role="Full stack developer"
        bio="Aspiring React Developer in Full stack web developement"
        src="/mathy photo.jpg"
        href1="https://github.com/THAMIZHMATHY"
        href2="https://app.netlify.com/teams/thamizhmathym/projects"
        href3="https://www.linkedin.com/in/thamizhmathy-m-1b6098258/"
      />
      <ProfileCard
        name="SteveJobs"
        role="Apple CEO"
        bio="Co-founder of Apple and pioneer of the personal computer revolution.
Known for transforming technology with innovative products."
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1NJHur4mgWwmmkk5eYSZSrYyplnyAW_oVw&s"
      />
      <ProfileCard
        name="ElonMusk"
        role="Meta CEO"
        bio="CEO of Tesla and SpaceX, driving innovation in electric vehicles and space exploration.
Known for bold ideas that are shaping the future of humanity."
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJnXrESFhef2suanOB3FfuJAq4xUF0jn2Lw&s"
      />
      <ProfileCard
        name="Krishnamoorthy"
        role="Flipkart CEO"
        bio="Visionary leader driving Flipkart’s growth and transforming India’s e-commerce landscape.Passionate about innovation and building an inclusive digital marketplace for millions."
        src="https://static.toiimg.com/thumb/msid-55802201,imgsize-110849,width-400,resizemode-4/55802201.jpg"
      />
      <ProfileCard
        name="Sundar"
        role="Google CEO"
        bio="CEO of Google and Alphabet, leading innovation in AI, cloud computing, and digital technology.
Known for his calm leadership and vision in shaping the future of the internet."
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhV4ITfYxYfeX9UDaCjIr-yYIvPHx1vljPDA&s"
      />
      <ProfileCard
        name="Satya"
        role="Microsoft CEO"
        bio="CEO of Microsoft, leading the company’s transformation in cloud computing and AI.
Known for fostering innovation and a growth mindset across the organization."
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg"
      />
      <ProfileCard
        name="Arvind"
        role="Perplexity CEO"
        bio="CEO and co-founder of Perplexity AI, building a new generation of AI-powered search technology.
Former researcher at OpenAI, Google, and DeepMind with deep expertise in artificial intelligence."
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKgjFvzbxhIGAbpSzjWRpsB9Ci8gblFsRpQ&s"
      />
      <ProfileCard
        name="Ratan Tata"
        role="TATA CEO"
        bio="Former chairman of the Tata Group who transformed it into a global business powerhouse.
Revered for his leadership, ethics, and lifelong commitment to philanthropy."
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtmLy72G3MV8FlGQ6FNTbb6j6IzxMG23QNQ&s"
      />
      <ProfileCard
        name="Jeff"
        role="Amazon CEO"
        bio="Founder of Amazon who revolutionized online shopping and cloud computing.
Visionary entrepreneur focused on innovation, customer obsession, and space exploration."
        src="https://imageio.forbes.com/specials-images/imageserve/67531eb2b5f7c9e191f632d7/0x0.jpg?format=jpg&crop=711,713,x316,y125,safe&height=416&width=416&fit=bounds"
      />
      <ProfileCard
        name="Bill gates"
        role="Co-founder of Microsoft "
        bio="Co-founder of Microsoft who helped spark the personal computer revolution.
Philanthropist dedicated to improving global health, education, and technology access."
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg"
      />
    </div>
  );
}

export default App;
