import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function CancellationRefundPolicy() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
      <Container maxWidth="md">
        <Box sx={{ marginBottom: "20px" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: "29px", marginBottom: "20px", lineHeight: 1 }}
          >
            Cancellation and Refund Policy
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", lineHeight: 1.5, marginBottom: "20px" }}
          >
            The application for allotment is provisional and will only be
            confirmed upon mutual acceptance by both parties and the signing of
            a sale agreement within 21 days from the booking date, accompanied
            by the necessary payments towards the agreement. In the event of
            failure to comply, Urbanise reserves the right to cancel the
            transaction at its discretion.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", lineHeight: 1.5, marginBottom: "20px" }}
          >
            If the buyer decides to cancel or the developer is forced to cancel
            due to default payments from the buyer’s side before entering into
            an agreement, a cancellation fee will apply as detailed below:
          </Typography>
          <List
            sx={{
              marginLeft: "20px",
              listStyleType: "decimal",
              paddingLeft: "20px",
            }}
          >
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={<strong>Before Agreement: Rs. 50,000/-</strong>}
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <strong>
                    After Agreement: Full booking amount (capped at 10% of the
                    apartment’s cost)
                  </strong>
                }
              />
            </ListItem>
          </List>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", lineHeight: 1.5, marginTop: "20px" }}
          >
            Additionally, the cancellation amount will also include any
            government levies and taxes (GST) paid by the company, as well as
            stamp duty charges for the agreements.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", lineHeight: 1.5, marginTop: "20px" }}
          >
            Following cancellation as per the above terms, any remaining amount
            (if Any) will be refunded to the applicant within 90 days, without
            accruing any interest. The applicant consents to the specified
            conditions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
function PrivacyPolicy() {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Box sx={{ marginBottom: "20px" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            This privacy policy employs the approach in which Alliance Budget
            Housing Private Limited. along with its subsidiaries, partners,
            affiliates, agents collect, use, disclose, maintain and disclose the
            information acquired from its users at the Alliance Budget Housing
            Private Limited.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Personal Identification Information
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            We at Alliance Budget Housing Private Limited. Ltd at times collects
            information from our patrons who visit our site. This is
            accomplished in a number of ways such as filling out a form,
            subscribing to newsletters and other activities related to our
            project’s services and features. Customers entering our website are
            requested to record their valid email address, name, and phone
            number. However, this is not a mandatory process and a customer may
            still proceed to use the website without revealing any personal
            information.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Nonpersonal Identification Information
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            Regarding non-personal identification, we record a user’s
            information whenever they interact with our site. This information
            includes technical details such as a type of the computer and
            browser name. It also includes details on the type of connection to
            our site with respect to the operating system and internet service
            providers used.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Cookies used in web browsers
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            Our website uses “cookies” to augment the User Experience. These
            cookies are placed on a user’s hard drive by the web browsers to
            keep a record of their visit and track basic non-personal
            identification information. Users may also choose to disable cookies
            from their web browsers. Also, there is a possibility to enable an
            alert message from the browsers whenever cookies are being sent.
            However, disabling the cookies might cause improper working of
            certain parts of the site.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Purpose of Collecting Information
          </Typography>
          <List
            sx={{
              marginLeft: "20px",
              listStyleType: "disc",
              paddingLeft: "20px",
            }}
          >
            <ListItem sx={{ display: "list-item" }}>
              To send emails regarding updates about the projects.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              To facilitate efficient customer care services with the
              information provided by the users by responding to their requests
              and needs.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              To help improve our site’s user experience by acknowledging how
              our users make use of resources available on our websites.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              To enhance the overall working of our website with the suggestions
              and feedback from our users.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              To send across information on the topics that they have agreed to
              receive about the realty sector.
            </ListItem>
          </List>

          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginTop: "16px", marginBottom: "16px" }}
          >
            Any user who chooses to be a part of our mailing list shall receive
            updates on the company and information about our services
            frequently. Users can also unsubscribe from this mailing list and
            stop receiving any updates about the company at any time by
            contacting our site.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Safeguarding our user’s information
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            We employ appropriate data collection techniques, safe storage, and
            processing practices to ensure security protection measures. We
            prevent any unauthorized access and disclosure of our user’s
            personal information and data stored on our website.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            The transfer of sensitive and private information between our site
            and the users happens over a secured SSL communication channel. This
            is protected and encrypted with digital signatures.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Sharing of user’s information
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            We also do not share, sell, rent or trade personal information about
            users to others. But we may share collective generic information not
            linked to any personal identification profiles. This is solely for
            the purposes listed above.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Changes to the privacy policy
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            Any changes regarding the privacy policy of Alliance Budget Housing
            Private Limited. Ltd will be reflected on this page on an immediate
            basis. Users are requested to check this page for any updates and
            changes to the privacy policy. It is the right of every user to have
            a check on how their personal information is protected by our site.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Acceptance of the policy
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            By using our site, users imply their acceptance of the privacy
            policy that may be modified with time. Those users who do not agree
            to our privacy policies are requested not to access our website.
            This is applicable for the information collected at our call centers
            as well.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", marginBottom: "16px" }}
          >
            For further queries and feedback on our privacy policy, policies of
            our websites, and dealings, please contact us at Alliance Budget
            Housing Private Limited.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function PaymentTerms() {
  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Payment Information
      </Typography>
      <Typography>
        All payments by the buyer should be made by way of the Online
        Payment/Account Payee Demand Draft/Local Cheque favoring
        <strong>
          {" "}
          "ALLIANCE BUDGET HOUSING THE WORLD OF JOY PROJECT COLLECTION ACCOUNT:
          120023952330."
        </strong>
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Additional Charges
      </Typography>
      <Typography>
        Apart from the cost of the plot, other government levied charges such as
        registration, Patta, Assessment, GST, or any other applicable levy are
        charged based on prevailing actuals.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Transfer Fee
      </Typography>
      <Typography>
        If a transfer is requested, an additional charge of a transfer fee of 2%
        on the agreement value/basic cost is applicable.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Dimensions and Details
      </Typography>
      <Typography>
        Dimensions and details provided on the website and other reference
        literature are approximate and are subject to alteration without notice
        due to statutory requirements. The exact dimensions shall be as per the
        agreements to be executed.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Delivery Date
      </Typography>
      <Typography>
        The delivery date indicated is subject to the “Force Majeure” clause. No
        responsibility is accepted for any delay beyond the control of the
        developer.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Legal Awareness
      </Typography>
      <Typography>
        The buyer is expected to be fully aware of the laws, notifications, and
        rules applicable to this proposed integrated project and shall execute
        the agreement in full concordance with it.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Liability Policy
      </Typography>
      <Typography>
        This website is governed by Indian Law. Your utilization of this website
        carries inherent risk on your part. Under no circumstances shall
        Alliance Budget Housing Private Limited be held accountable for any
        losses or damages, whether direct or indirect, that arise from or are
        associated with your utilization of this website or your inability to do
        so. This encompasses all types of losses and damages, including but not
        limited to, general, special, incidental, consequential, exemplary, or
        any other, including loss of data, revenue, or profits. This statement
        represents a comprehensive limitation of liability applicable to all
        forms of losses and damages, regardless of their nature, whether direct
        or indirect.
      </Typography>
    </Box>
  );
}
const policies = [
  {
    title: "TERMS & CONDITIONS",
    content: <PaymentTerms />,
  },
  {
    title: "PRIVACY POLICY",
    content: <PrivacyPolicy />,
  },
  {
    title: "CANCELLATION & REFUND POLICY",
    content: <CancellationRefundPolicy />,
  },
];

export default function Policys() {
  const [open, setOpen] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState({});

  const handleClickOpen = (policy) => {
    setCurrentPolicy(policy);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", lg: "center" },
        alignItems: "center",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      {policies.map((policy, index) => (
        <Button
          key={index}
          onClick={() => handleClickOpen(policy)}
          sx={{ m: 1, textTransform: "none", color: "#fff" }}
        >
          {policy.title}
        </Button>
      ))}

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          height: "70vh",
          top: "15%",
        }}
      >
        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "1rem",
          }}
        >
          <DialogTitle>{currentPolicy.title}</DialogTitle>
          <CloseIcon onClick={handleClose} sx={{ color: "#000" }} />
        </Grid>
        <DialogContent dividers>{currentPolicy.content}</DialogContent>
        <DialogActions sx={{ height: "2rem" }} />
      </Dialog>
    </Box>
  );
}
