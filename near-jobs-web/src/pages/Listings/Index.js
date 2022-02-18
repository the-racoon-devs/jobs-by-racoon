import Search from "./Search";
import ListingsList from "./ListingsList";

const Listings = ({ contract }) => {
  return (
    <>
      <Search />
      <ListingsList contract={contract} />
    </>
  );
};

export default Listings;
