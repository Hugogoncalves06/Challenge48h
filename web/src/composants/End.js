import bravo from '../data/bravo.gif'
import '../css/End.css'

function Fin(){
    return(
        <div>
            <img src={bravo} className='bravo' alt='fel'/>
            <p>Enfin, c'est pas trop tôt !!!<br/>
            Vous avez réussi en ..min..sec<br/>
            Le petit Kevin en CE2 à réussi en 5 min
            </p>
        </div>
    )
}

export default Fin