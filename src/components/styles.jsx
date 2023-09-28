import { teal } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  primaryColor: {
    color: teal[500],
  },
  secondaryColor: {
    color: grey[700],
  },

  padding: {
    padding: 0,
  },
  mainHeader: {
    backgroundColor: grey[100],
    padding: 20,
    alignItems: "center",
  },
  mainContent: {
    padding: 40,
  },
  secondaryContainer: {
    padding: "20px 25px",
    backgroundColor: grey[200],
  },
});

export default styles;
