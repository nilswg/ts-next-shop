import { Search, Grid, Header, Segment, Label } from "semantic-ui-react";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

const SearchBar = () => {
  return (
    <Grid>
      <Grid.Column width={6}>
      <Search
        //   loading={loading}
        //   onResultSelect={(e, data) =>
        //     dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
        //   }
        //   onSearchChange={handleSearchChange}
        //   resultRenderer={resultRenderer}
        //   results={results}
        //   value={value}
        />
      </Grid.Column>
    </Grid>
  );
};

export default SearchBar;
