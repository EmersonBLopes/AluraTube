import Parceiro from "./Parceiro.jsx";
import styled from "styled-components";

const StyledParceiros = styled.section`
  .parceiros {
    display: flex;
    flex-direction: column;
  }

  .parceiro__titulo {
    margin: 1rem 0 1rem 3rem;
  }

  .parceiros-container {
    display: flex;
  }

  .parceiro {
    margin: 1rem 0;
    text-align: center;
  }

  .parceiro__picture {
    width: 120px;
    border-radius: 50%;
  }

  .parceiro__name {
    font-family: var(--main-font);
  }

  .parceiro__name::before {
    content: "@";
  }

  @media screen and (min-width: 375px) {
    .parceiros {
      margin: 0;
      width: 100vw;
      justify-content: space-between;
    }

    .parceiros__titulo {
      margin: 1rem 0 1rem 1rem;
    }

    .parceiros-container {
      justify-content: space-around;
    }

    .parceiro__picture {
      width: 100px;
    }

    @media screen and (min-width: 768px) {
      .parceiros {
        margin: 1rem 0 1rem 1rem;
      }

      .parceiro__titulo {
        margin: 1rem 0 1rem 3rem;
      }

      .parceiros-container {
        width: 50vw;
        max-width: 430px;
      }
    }
  }
`;

export default function parceiros(props) {
  const parceirosIndex = Object.keys(props);

  return (
    <StyledParceiros>
      <section className="parceiros">
        <h3 className="parceiros__titulo">Parceiros</h3>
        <div className="parceiros-container">
          {parceirosIndex.map((index) => {
            return <Parceiro {...props[index]} />;
          })}
        </div>
      </section>
    </StyledParceiros>
  );
}
