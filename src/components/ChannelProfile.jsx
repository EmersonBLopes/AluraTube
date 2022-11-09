import data from "../../data/config.json";
import styled from "styled-components";

const StyledChannelProfile = styled.section`
  .channel-profile {
    display: flex;
    align-items:center;
    padding:1.5rem 0;
  }

  .channel-profile__picture {
    width:60%;
    max-width:120px;
    min-width:20px;
    margin-right:.5rem;
    border-radius: 50%;
  }
  .channel-profile__username{
    font-family:var(--main-font);
  }
  .channel-profile__userjob{
    font-family:var(--main-font);
    color:#666;
  }

  /*media queries*/

  @media screen and (min-width:375px){
    .channel-profile{
      width:100vw;
      margin-left:0;
      justify-content:center;
    }
  }

  @media screen and (min-width:768px){
    .channel-profile{
      justify-content:start;
   } 

   .channel-profile__picture{
      margin-left:1rem;
   }
  }


`;

export default function channelProfile() {
  return (
    <StyledChannelProfile>
      <section className="channel-profile">
        <img
          src={`https://github.com/${data.github}.png`}
          alt="Foto de perfil"
          className="channel-profile__picture"
        />
        <div className="channel-profile__info">
          <h2 className="channel-profile__username">{data.name}</h2>
          <p className="channel-profile__userjob">{data.job}</p>
        </div>
      </section>
    </StyledChannelProfile>
  );
}
