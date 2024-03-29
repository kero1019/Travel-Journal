import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,  faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="Photo" />
            <div className="second--part">
                <div className="first-section">
                    <div className="two--components">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="location">{props.location}</p>
                    </div>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <div className="second-section">
                    <p>{`${props.startDate} - ${props.endDate}`}</p>
                </div>
                <p className="description">{props.description}</p>
                </div>
        </div>
    )
}