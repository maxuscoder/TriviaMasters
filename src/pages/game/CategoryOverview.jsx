import ScienceOverview from "../../ui/ScienceOverview";
import HistoryOverview from "../../ui/HistoryOverview";
import GeographyOverview from "../../ui/GeographyOverview";
import MusicOverview from "../../ui/MusicOverview";
import AnimalsOverview from "../../ui/AnimalsOverview";
import VehiclesOverview from "../../ui/VehiclesOverview";
import GamingOverview from "../../ui/GamingOverview";
import GeneralOverview from "../../ui/GeneralOverview";

function CategoryOverview({ category }) {
  switch (category) {
    case "Science":
      return <ScienceOverview />;
    case "History":
      return <HistoryOverview />;
    case "Geography":
      return <GeographyOverview />;
    case "Music":
      return <MusicOverview />;
    case "Animals":
      return <AnimalsOverview />;
    case "Vehicles":
      return <VehiclesOverview />;
    case "Gaming":
      return <GamingOverview />;
    case "Trivialities":
      return <GeneralOverview />;
    default:
      return null;
  }
}

export default CategoryOverview;
