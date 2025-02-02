import { Resend } from "resend";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const resendClient = new Resend(process.env.RESEND_API_KEY);

const sendEmail = (email, subject, template) => {
  return resendClient.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: subject,
    html: template,
  });
};

export default sendEmail;
