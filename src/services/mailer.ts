import nodemailer from "nodemailer";
const {
  EMAIL_HOST,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_USE_TLS,
  EMAIL_PORT,
} = process.env;

export function sendMail({
  to,
  subject,
  text,
  html,
}: MailProps): Promise<boolean> {
  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT),
    secure: EMAIL_USE_TLS === "1",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  return transporter
    .sendMail({
      from: '"Your Company Name" <email@yourcompany.com>',
      to: to.join(", "),
      subject,
      text,
      html,
    })
    .then(() => true)
    .catch()
    .then(() => false);
}
