import { Box, Divider, Typography } from "@mui/material";
import Email from "@mui/icons-material/Email";

function EmailBody({ email }) {
  const emailBody = (
    <Box>
      <Typography variant="h4" component="h2">
        From: {email !== undefined ? email.firstName + " " + email.lastName : ""}
      </Typography>
      <Divider />
      <Typography variant="h5" component="h3" marginTop={3}>
        Email: {email !== undefined ? email.email : ""}
      </Typography>
      <Divider />
      <Typography variant="h5" component="h3" marginTop={3}>
        Company: {email !== undefined ? email.company : ""}
      </Typography>
      <Divider />
      <Typography variant="body1" component="p" py={3}>
        {email !== undefined ? email.message : ""}
      </Typography>
      <Divider />
    </Box>
  );

  const blank = (
    <Box
      sx={{
        marginY: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Email color="primary" sx={{ fontSize: 200 }} />
    </Box>
  );
  return email === undefined ? blank : emailBody;
}

export default EmailBody;
