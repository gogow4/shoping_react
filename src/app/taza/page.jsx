import Navbar from "@/components/navbar/Navbar"
import styles from "./paje.module.css"
import Bas from "@/components/taza/bas/bas"
import Div from "@/components/taza/div/div"
import Axr from "@/components/taza/axr/axr"
import Boo from "@/components/boo/boo"
export default function Taza() {
    return(
        <div>
        <Navbar />
        <Bas />
        <Div />
        <Axr />
        <Boo />
        </div>
    )
}