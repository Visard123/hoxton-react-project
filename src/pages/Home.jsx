import BackgroundImage from "../components/BackgroundImage";
import Properties from "../components/Properties";
import SearchForm from "../components/Search-Form";

export default function Home(props) {
  return (
    <main className="main">
      <BackgroundImage />
      <SearchForm
        handlePropertyFilter={props.handlePropertyFilter}
        resetFilters={props.resetFilters}
      />

      <Properties properties={props.properties} />
      <div className="">
        <h2>Our Agents</h2>
        <div className="our-agents">
          <li>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="agent"
            />
            <p>Visard Djali</p>
          </li>
        </div>
      </div>
    </main>
  );
}
