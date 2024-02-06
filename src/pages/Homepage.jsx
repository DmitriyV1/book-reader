import { useState } from "react";
import { ReactReader } from "react-reader";
import { useParams } from "react-router-dom";

function Homepage() {
  const [location, setLocation] = useState(0);

  const { id } = useParams();
  console.log(id);
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        url="https://react-reader.metabits.no/files/alice.epub"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      />
    </div>
  );
}

export default Homepage;
