import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PrivacyDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>Privacy Policy</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Kyros Privacy Policy</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `Protecting your private information is our priority. This Statement of Privacy applies to Pathway, and Pathway LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Pathway LLC include www.mypathway.us and Pathway. The Pathway application is a sobriety management platform. application. By using the Pathway application, you consent to the data practices described in this statement.

                Collection of your Personal Information
                In order to better provide you with products and services offered, Pathway may collect personally identifiable information, such as your:
                
                – First and Last Name
                
                – E-mail Address
                
                – general location
                
                If you purchase Pathway’s products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.
                
                Pathway may also collect anonymous demographic information, which is not unique to you, such as your:
                
                – Age
                
                – Gender
                
                – Race
                
                – Religion
                
                – Political Affiliation
                
                We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
                
                Use of your Personal Information 
                Pathway collects and uses your personal information to operate and deliver the services you have requested.
                
                Pathway may also use your personally identifiable information to inform you of other products or services available from Pathway and its affiliates.
                
                Sharing Information with Third Parties
                Pathway does not sell, rent or lease its customer lists to third parties.
                
                Pathway may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Pathway, and they are required to maintain the confidentiality of your information.
                
                Pathway may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Pathway or the site; (b) protect and defend the rights or property of Pathway; and/or (c) act under exigent circumstances to protect the personal safety of users of Pathway, or the public.
                
                Right to Deletion
                Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
                
                Delete your personal information from our records; and
                Direct any service providers to delete your personal information from their records.
                Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
                
                Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;
                Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;
                Debug to identify and repair errors that impair existing intended functionality;
                Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;
                Comply with the California Electronic Communications Privacy Act;
                Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;
                Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;
                Comply with an existing legal obligation; or
                Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.
                Children Under Thirteen
                Pathway does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this application.
                
                E-mail Communications
                From time to time, Pathway may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication.
                
                If you would like to stop receiving marketing or promotional communications via email from Pathway, you may opt out of such communications by clicking the unsubscribe button or changing the notifications settings in your account page..
                
                External Data Storage Sites
                We may store your data on servers provided by third party hosting vendors with whom we have contracted.
                
                Changes to this Statement
                Pathway reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our application, and/or by updating any privacy information. Your continued use of the application and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
                
                Contact Information
                Pathway welcomes your questions or comments regarding this Statement of Privacy. If you believe that Pathway has not adhered to this Statement, please contact Pathway at:
                
                Pathway LLC
                
                Email Address: hello@mypathway.us
                
                Telephone number: (612) 568-6554
                
                Effective as of March 01, 2021`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}