const nodemailer = require("nodemailer");

const { EMAIL, MAILING_ID, MAILING_SECRET } = process.env;

exports.sendEmailVerification = (email, name, url) => {
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: "ldyaimgqdrrwokkc",
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Vikings_Clone Verification",
    html: `<div style="max-width:600px;height:100vh;height:auto;margin:0 auto;font-family:Verdana,Geneva,Tahoma,sans-serif"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px"><div style="line-height:6px"><h2 style="font-size:35px">Facebook.io</h2><p style="font-size:16px;color:gray">Welcome Onboard!</p></div><div><img style="width:50px;height:50px" src="https://i.ibb.co/61c7mR8/facebook.png" alt="LogoImage"></div></div><div style="max-width:100%;padding:20px 0;border:8px solid #00f;text-align:center"><div><p style="font-size:18px;font-weight:700">Hi! ${name}.</p><p style="font-size:16px;font-weight:600;line-height:25px">You have successfully created a Vikinger_clone account.<br>Please click on the link below to varify your email<br>address and complete your registration.</p></div><div style="margin-top:50px"><div><a href="${url}" target="_blank" style="padding:13px 30px;background-color:#3939fc;color:#fff;font-size:20px;border:none;border-radius:5px;cursor:pointer;text-decoration:none">Verify your email</a></div><div style="line-height:5px;margin-top:30px"><p style="font-size:14px;color:gray">or copy and paste this link into your browser:</p><a style="margin-top:20px;padding-top:20px;" href="${url}" target="_blank">Click to view copy</a></div></div><div style="margin-top:40px"><p style="font-size:14px;color:gray">Didn't create a Facebook_clone account?<br>It's likely someone just typed in your email<br>address by accident. Feel free to ignore this email.</p></div></div><div style="display:flex;justify-content:space-between;align-items:center"><div style="line-height:4px;margin-top:20px"><h2 style="font-size:14px"><span style="border:2px solid #000;font-size:14px;border-radius:50%;padding:4px;display:inline-block;text-align:center">c</span>2022 Facebook_clone.io</h2><p style="font-size:14px;color:gray;text-decoration:underline">Facebook_clone / Terms & Privace</p></div><div style="display:flex;color:gray;justify-content:center;align-items:center;gap:4px"><p>Follow us on</p><a style="text-decoration:none;color:gray" href="#">Twitter</a><span>&</span><a style="text-decoration:none;color:gray" href="#">Instagram</a></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
