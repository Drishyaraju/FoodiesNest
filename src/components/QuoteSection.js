import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return(
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/> A recipe has no soul, you as the cook must bring soul to the recipe. Every dish is an opportunity to tell your own culinary story.</p>
            <p className="quote-author">- Thomas Keller</p>
        </div>
    )
}