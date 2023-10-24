// Write your code here
const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const className = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-list-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={className} />
        <p className="name"> {name} </p>
        <p className="location"> {location}</p>
      </button>
    </li>
  )
}

export default EventItem
