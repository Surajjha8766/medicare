
const signUp = require("../model/signUp");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET;
const otpMap = require('../../utils/otpStore');
const nodemailer = require('nodemailer');


// -----------------User Sign Up----------------------------
const userSignup = async (req, res) => {
  try {
    const { name, email, password, specialization, contact, userType, userStatus, paymentStatus } = req.body;

    //Validate kara
    if (!name || !email || !password || !contact || !userType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //fir check kra ki email phle se register hai ya nhi
    const existingUser = await signUp.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists. Please use another email"
      });
    }

    //password ko hash kiya
    const hashedpassword = await bcrypt.hash(password, 10);

    //Naya user Banaya
    const newUser = new signUp({
      name,
      email,
      password: hashedpassword,
      specialization,
      contact: Number(contact),
      userType,
      userStatus,
      paymentStatus,
    });

    const saveUser = await newUser.save();

   //JWT Token generate kiya
    const token = jwt.sign(
      { _id: saveUser._id, email: saveUser.email, userType: saveUser.userType },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    //cookie set ki
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
      // Send welcome email
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        }
      });
  
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Medicare Plus!',
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://www.flaticon.com/free-icon/mail_7286142?term=email&page=1&position=25&origin=search&related_id=7286142" alt="Medicare Plus Logo" style="max-width: 200px;" />
          </div>
          <h2 style="color: #2E86C1;">Welcome to Medicare Plus, ${name}!</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for creating an account with us. You're now part of our healthcare community where you can:
          </p>
          <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li>Book appointments with top doctors</li>
            <li>Access your medical records</li>
            <li>Receive personalized health recommendations</li>
          </ul>
          <p style="font-size: 16px; line-height: 1.6;">
            If you have any questions, feel free to contact our support team at support@medicareplus.com.
          </p>
          <div style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
            <p style="font-size: 14px; margin: 0;">
              <strong>Account Details:</strong><br>
              Name: ${name}<br>
              Email: ${email}<br>
              Account Type: ${userType}
            </p>
          </div>
          <p style="font-size: 14px; color: #999; margin-top: 30px;">
            If you didn't create this account, please contact us immediately at security@medicareplus.com.
          </p>
        </div>
        `
      };
  
      // Send email (don't wait for response)
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending welcome email:', error);
        } else {
          console.log('Welcome email sent:', info.response);
        }
      });
    return res.status(200).json({
      success: true,
      message: "SignUp successful",
      token,
      user: {
        _id: saveUser._id,
        name: saveUser.name,
        email: saveUser.email,
        userType: saveUser.userType
      }
    });
  } catch (error) {
    console.error("Failed to register user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to register user",
      error: error.message
    });
  }
};

// -----------------User Sign In----------------------------
const userSignin = async (req, res) => {
  try {
  
    const { email, password } = req.body;
 
    //Input ko validate kiya
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    //user exist hai ya nhi wo dekha
    const user = await signUp.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "This email is not registered. Please sign up first." });
    }

    //password ko compare kiya
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    //Token generate kiya
    const token = jwt.sign(
      { _id: user._id, email: user.email, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );


       //cookie set ki
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
          secure: process.env.NODE_ENV === "production",
          maxAge: 7 * 24 * 60 * 60 * 1000
        });

      // Send Notification email user login
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        }
      });
  
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Medicare Plus!',
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://example.com/logo.png" alt="Medicare Plus Logo" style="max-width: 200px;" />
          </div>
          <h2 style="color: #2E86C1;">Account Login Notification</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            Hello Dear,
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            We noticed a login to your Medicare Plus account associated with this email: <strong>${email}</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            If this was you, no further action is needed. However, <strong>if you did not initiate this login</strong>, please report it immediately by contacting our support team at <a href="mailto:support@medicareplus.com">support@medicareplus.com</a>.
          </p>
          <div style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">

          </div>
          <p style="font-size: 14px; color: #999; margin-top: 30px;">
            If you believe your account has been compromised, please take steps to secure it by changing your password immediately.
          </p>
        </div>
        `
        
      };
  
      // Send email (don't wait for response)
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending welcome email:', error);
        } else {
          console.log('Login email sent:', info.response);
        }
      });
      return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType
      }
    });
  } catch (error) {
    console.error("Failed to login:", error);
    res.status(500).json({
      success: false,
      message: "Failed to login",
      error: error.message
    });
  }
};

//------------------Send OTP -------------------------------
const sendOtp = async (req,res) => {

  const { email } = req.body;

  // validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpMap.set(email, otp);

  // Send email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Medicare Plus',
    // text: `Your OTP is: ${otp}`
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <div style="text-align: center;">
        <img src="https://www.flaticon.com/free-animated-icon/dove_11933488?term=email&page=1&position=18&origin=search&related_id=11933488" alt="Medicare Plus Logo" style="max-width: 200px; margin-bottom: 20px;" />
      </div>
      <h2 style="color: #2E86C1;">Hello,</h2>
      <p style="font-size: 16px;">Thank you for choosing <strong>Medicare Plus</strong>.</p>
      <p style="font-size: 16px;">Your One-Time Password (OTP) is:</p>
      <p style="font-size: 24px; font-weight: bold; color: #e74c3c;">${otp}</p>
      <p style="font-size: 14px; color: #555;">This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
      <br/>
      <p style="font-size: 14px; color: #999;">If you didn’t request this OTP, please ignore this message.</p>
      <p style="font-size: 14px; color: #999;">Regards, <br/><strong>Medicare Plus Team</strong></p>
    </div>
  `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Failed to send OTP", error: err.message });
  }
};

//------------------Verif OTP-------------------------------
const verifyOtp = async (req,res) => {
  const { email, otp } = req.body;
  const storedOtp = otpMap.get(email);

  if (!storedOtp) {
    return res.status(400).json({ message: 'OTP not sent to this email yet' });
  }

  if (storedOtp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  otpMap.delete(email);
  return res.status(200).json({ message: 'Email verified' });

};

//------------------User By Id------------------------------
const getUser = async (req,res) => {
 try{
  const { id } = req.params;
  console.log("USER ID", id)
  const data = await signUp.findById(id);

  if(!data){
    return res.status(404).json({
      success: true,
      message: "User Not Found"
    });
  }
  res.status(200).json({
    success: true, 
    message: "User Fetch Successfully", 
    data: data
  });
 }catch(error){
  res.status(500).json({
    success: false,
    message: "Failed to fetch",
    error: error
  })
 }
};

//------------------Login Admin----------------------------
const  Adminlogin = async (req,res) => {
  try{
    const { email, password } = req.body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(
      {
      email: process.env.ADMIN_EMAIL, 
      role: 'admin'
    }, process.env.JWT_SECRET, {expiresIn: '1h'} );

      return res.status(200).json({success: true, message: "Login Successfull", token, user: {
        email,
        role: 'admin',
        name: "Admin User"
      }});
    } 
    
    else{
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch(error){
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

//------------------Logout Admin----------------------------
const Adminlogout = (req,res) => {
  return res.status(200).json({success: true, message: "Logged Out Successfully"})
}

module.exports = {
  userSignup,
  userSignin,
  getUser,
  sendOtp,
  verifyOtp,
  Adminlogin,
  Adminlogout,

};