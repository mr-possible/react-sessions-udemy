import Accordion from "./components/Accordion";
import ButtonPage from "./pages/ButtonPage";

function App() {
  const accordionBody = [
    {
      id: 1,
      label: 'Label 1',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sed, minus aut sint aspernatur fugit sapiente maxime necessitatibus exercitationem vitae praesentium incidunt omnis dolores, amet fuga cum nostrum. Magni, nisi!'
    },
    {
      id: 2,
      label: 'Label 2',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sed, minus aut sint aspernatur fugit sapiente maxime necessitatibus exercitationem vitae praesentium incidunt omnis dolores, amet fuga cum nostrum. Magni, nisi!'
    },
    {
      id: 3,
      label: 'Label 3',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sed, minus aut sint aspernatur fugit sapiente maxime necessitatibus exercitationem vitae praesentium incidunt omnis dolores, amet fuga cum nostrum. Magni, nisi!'
    },
  ]
  return (
    <>
      <div className="flex">
        <ButtonPage />
      </div>
      <Accordion items={accordionBody} />
    </>

  )
}

export default App
