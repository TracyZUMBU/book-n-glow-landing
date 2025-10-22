interface WaitlistData {
  firstName: string;
  email: string;
  activity: string;
}

export const submitToWaitlist = async (data: WaitlistData) => {
  try {
    // En développement, utiliser le serveur Express sur le port 3001
    const apiUrl = import.meta.env.DEV
      ? "http://localhost:3001/api/waitlist"
      : "/api/waitlist";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur:", error);
    throw error;
  }
};
