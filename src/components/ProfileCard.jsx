import "./ProfileCard.css";

export default function ProfileCard(props) {
  return (
    <div className="container">
      <div className="profile-card">
        <img className="avatar" src={props.src} alt="img not found" />
        <h1 className="name">{props.name}</h1>
        <h3 className="title">{props.role}</h3>
        <p className="bio">{props.bio}</p>
        <div className="social-links">
          <a href={props.href1} target="_blank">
            GitHub
          </a>
          <a href={props.href2} target="_blank">
            Netlify
          </a>
          <a href={props.href3} target="_blank">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
