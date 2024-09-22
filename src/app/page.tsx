import Image from 'next/image';


export default function Home() {
  return (
    <div className="profile-container">
      
      
      <div className="description">
        <h1>Hello, I'm Haroon Afridi!</h1>
        <p>I’m a Frontend Developer with a passion for design and coding,</p>
      </div>
      
   
      <div className="profile-picture">
  <img src="/profile.jpg" alt="profile-picture" width={200} height={200} />

      </div>
    </div>
  );
}
