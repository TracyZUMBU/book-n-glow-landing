import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://127.0.0.1:5173",
    ],
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());

// Log middleware pour débugger
app.use((req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.url} - Origin: ${
      req.headers.origin
    }`
  );
  next();
});

// API route pour la waitlist
app.post("/api/waitlist", async (req, res) => {
  try {
    const { firstName, email, activity } = req.body;

    // Validation
    if (!firstName || !email || !activity) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont requis",
      });
    }

    // Email de notification pour l'équipe
    const teamEmail = await resend.emails.send({
      from: "Book N' Glow <noreply@book-n-glow.com>",
      to: [process.env.CONTACT_EMAIL],
      subject: `Nouvelle inscription à la waitlist - ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e91e63;">Nouvelle inscription à la waitlist Book N' Glow</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Informations du prestataire :</h3>
            <p><strong>Prénom :</strong> ${firstName}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Activité :</strong> ${activity}</p>
          </div>
          
          <p style="color: #666;">
            Cette personne souhaite rejoindre la liste d'attente de Book N' Glow.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px;">
              Email envoyé automatiquement depuis le site Book N' Glow
            </p>
          </div>
        </div>
      `,
    });

    // Email de confirmation pour l'utilisateur
    const confirmationEmail = await resend.emails.send({
      from: "Book N' Glow <noreply@book-n-glow.com>",
      to: [email],
      subject: "Bienvenue dans la communauté Book N' Glow ! ✨",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #e91e63; margin-bottom: 10px;">Book N' Glow</h1>
            <p style="color: #666; font-size: 18px;">Votre page de réservation, aussi belle que votre feed</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #e91e63, #9c27b0); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
            <h2 style="margin: 0 0 10px 0;">Bienvenue ${firstName} ! ✨</h2>
            <p style="margin: 0; opacity: 0.9;">Merci de rejoindre notre liste d'attente</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Que va-t-il se passer maintenant ?</h3>
            <ul style="color: #666; line-height: 1.6;">
              <li>Vous serez parmi les <strong>premières</strong> à accéder à Book N' Glow</li>
              <li>Nous vous tiendrons informé(e) de l'avancement du projet</li>
              <li>Vous recevrez des <strong>conseils exclusifs</strong> pour développer votre activité</li>
              <li>Accès prioritaire aux <strong>tarifs de lancement</strong></li>
            </ul>
          </div>
          
          <div style="background: #fff3e0; border-left: 4px solid #ff9800; padding: 20px; margin: 20px 0;">
            <h4 style="color: #e65100; margin-top: 0;">En attendant, suivez-nous :</h4>
            <p style="color: #666; margin-bottom: 0;">
              Restez connecté(e) avec nous sur Instagram pour des conseils beauté et des previews exclusives !
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666; font-size: 14px;">
              Merci de faire confiance à Book N' Glow pour révolutionner vos réservations ! 💅✨
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #999; font-size: 12px;">
              Book N' Glow - Votre page de réservation, aussi belle que votre feed<br>
              Si vous ne souhaitez plus recevoir nos emails, vous pouvez vous désinscrire à tout moment.
            </p>
          </div>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Inscription réussie",
      teamEmailId: teamEmail.data?.id,
      confirmationEmailId: confirmationEmail.data?.id,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi des emails:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi des emails",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 API endpoint: http://localhost:${PORT}/api/waitlist`);
});
