export default function SearchForm(props) {
  function onFormSubmit(event) {
    event.preventDefault();
    const propertyId =
      event.target.propertyId.value !== ""
        ? Number(event.target.propertyId.value)
        : undefined;
    const propertyType = Number(event.target.propertyType.value);
    const status = event.target.status.value;
    const rooms = event.target.rooms.value;
    const city = event.target.city.value;
    const zone = event.target.zone.value;
    props.handlePropertyFilter({
      id: propertyId,
      categoryId: propertyType,
      status: status,
      rooms: rooms,
      city: city,
      zone: zone,
    });
  }
  return (
    <div className="searching-form ">
      <h2>Search for Properties </h2>
      <form action="" className="form-elements" onSubmit={onFormSubmit}>
        <div className="reference-input">
          <h3>Property ID</h3>
          <input type="text" name="propertyId" placeholder="Reference" />
        </div>
        <div className="property-type">
          <h3>Property Type </h3>
          <select name="propertyType">
            {" "}
            <option value="1">Apartment</option>
            <option value="2">Villa</option>
            <option value="3">Comercial</option>
            <option value="4">Land</option>
            <option value="5">Industrial</option>
            <option value="6">Restorant</option>
          </select>
        </div>
        <div className="property-type">
          <h3>Status </h3>
          <select name="status" id="">
            {" "}
            <option value="For sale">For Sale</option>
            <option value="For rent">For Rent</option>
          </select>
        </div>
        <div className="property-type">
          <h3>Rooms </h3>
          <select name="rooms" id="">
            {" "}
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="property-type">
          <h3>City </h3>
          <select name="city" id="">
            {" "}
            <option value="Tirana">Tirana</option>
            <option value="Durres">Durres</option>
            <option value="Vlora">Vlora</option>
            <option value="Saranda">Saranda</option>
            <option value="Fier">Fier</option>
            <option value="Korce">Korce</option>
          </select>
        </div>
        <div className="property-type">
          <h3>Zone</h3>
          <select name="zone" id="">
            {" "}
            <option value="Rruga Durresit">Rruga Durresit</option>
            <option value="Astir">Astir</option>
            <option value="Teg">Teg</option>
            <option value="Port">Port</option>
            <option value="Center">Qender</option>
            <option value="Gjiri Lalezit">Gjiri Lalezit</option>
            <option value="Drimadhes">Drimadhes</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
      <button onClick={props.resetFilters}>Reset</button>
    </div>
  );
}
