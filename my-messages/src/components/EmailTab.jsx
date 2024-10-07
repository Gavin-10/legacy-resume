import { Box, Divider, Typography, IconButton } from "@mui/material";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey, blue } from "@mui/material/colors";

const selectedColors = [blue[700], "#fff", ""];
const deselected = ["", "", grey[200]];

function EmailTab({ onSelect, onDelete, selected, email }) {
  const colors = selected ? selectedColors : deselected;

  return (
    <Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
          bgcolor: colors[0],
          color: colors[1],
          "&:hover": { bgcolor: colors[2] },
          borderRadius: 1,
        }}
        height={75}>
        {email.read ? (
          <Box sx={{ marginLeft: "10px", width: "40px" }}></Box>
        ) : (
          <HdrStrongIcon color="primary" sx={{ width: "30px", marginLeft: "10px" }} />
        )}
        <Box mx={2} width={300} overflow="hidden" onClick={onSelect}>
          <Typography align="left">
            <strong>From: </strong>
            {email.firstName + " " + email.lastName}
          </Typography>
          <Typography>
            <strong>Company: </strong>
            {email.company}
          </Typography>
        </Box>
        <IconButton sx={{ marginY: "auto", marginRight: "10px" }} onClick={onDelete}>
          <DeleteIcon color="warning" />
        </IconButton>
      </Box>

      <Divider />
    </Box>
  );
}

export default EmailTab;
