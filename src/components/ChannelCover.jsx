import styled from "styled-components";

const coverBG = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const StyledCover = styled.div`
  .channel-cover{
    width:100vw;
    background-image:url(${coverBG});
    background-size: cover;
  }

  .channel-cover__image{
    box-sizing:border-box;
    width:100%;
    min-width:720px;
    max-width:100vw;
  }

  @media screen and (min-width:375px){
    .channel-cover{
      height:280px;
    }

    .channel-cover__image{
    min-width: 450px;
    }
  }

  @media screen and (min-width:768px){
    .channel-cover{
      height:400px;
    }
    
  }

  @media screen and (min-width:1024px){
    .channel-cover{
      height:500px;
    }
  }
`

export default function channelCover() {
  return (
    <StyledCover>
      <div className="channel-cover"></div>
    </StyledCover>
  );
}
