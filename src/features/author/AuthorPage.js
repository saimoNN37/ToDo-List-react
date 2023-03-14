import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Szymon Młyński"
      body={<>
        <p>Cześć mam na imię Szymon Młyński mam 19 lat i zaczynam swoją przygodę z programowaniem.
          Ukończyłem szkołę średnią w <strong>Miechowie</strong> jest to miasto niedaleko Krakowa.</p>
        <p>Moim głównym zajęciem jest chodzenie na siłownię, która pozwala mi się zrelaksować po całym dniu.
          W ciągu dnia uwielbiam obejrzeć odcinki anime.
          Pozwala mi się chociaż przez chwilę odciać od rzeczywistości.</p>
      </>}
    />
  </Container>

);