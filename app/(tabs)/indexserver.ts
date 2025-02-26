/*import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

const app = express();
const port = 3001;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

let jsonData: any = null; // Guardará la data del archivo XLSX

// Endpoint para recibir la data del archivo
app.post("/upload-data", (req, res) => {
  jsonData = req.body.data;
  res.json({ message: "Datos recibidos correctamente" });
});

// Endpoint para hacer preguntas sobre la data
app.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!jsonData) {
    return res.status(400).json({ error: "No hay datos cargados" });
  }

  const prompt = `
  Actúa como un asistente de análisis de datos. Aquí tienes un conjunto de datos en JSON:
  ${JSON.stringify(jsonData, null, 2)}

  Ahora, responde a la siguiente pregunta basada en estos datos:
  "${question}"
  `;

  try {
    const response = await openai.completions.create({
      model: "gpt-4o",
      prompt,
      max_tokens: 500,
    });

    res.json({ answer: response.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la pregunta" });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

*/
