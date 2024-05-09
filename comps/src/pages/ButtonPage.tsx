import { FaBaby, FaGalacticSenate, FaGlassMartini, FaTable } from "react-icons/fa";
import { FaCalculator, FaCrow, FaFaceAngry, FaJar, FaJetFighterUp, FaVenus } from "react-icons/fa6";
import Button from "../components/Button";

function ButtonPage() {
    return (
        <div className="flex">
            <Button primary outline className="mb-5">
                <FaCrow />
                Button 1
            </Button>
            <Button primary rounded className="mb-5">
                <FaCalculator />
                Button 2
            </Button>
            <Button secondary outline className="mb-5">
                <FaVenus />
                Button 3
            </Button>
            <Button secondary rounded className="mb-5">
                <FaJetFighterUp />
                Button 4
            </Button>
            <Button success outline className="mb-5">
                <FaJar />
                Button 5
            </Button>
            <Button success rounded className="mb-5">
                <FaGalacticSenate />
                Button 6
            </Button>
            <Button danger outline className="mb-5">
                <FaGlassMartini />
                Button 7
            </Button>
            <Button danger rounded className="mb-5">
                <FaTable />
                Button 8
            </Button>
            <Button warning outline className="mb-5">
                <FaFaceAngry />
                Button 9
            </Button>
            <Button warning rounded className="mb-5">
                <FaBaby />
                Button 10
            </Button>
        </div>
    )
}

export default ButtonPage
