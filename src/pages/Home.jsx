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
    </main>
  );
}
