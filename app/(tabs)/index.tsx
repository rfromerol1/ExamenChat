import React, { useState } from "react";
import { View, Text, Button, FlatList, ScrollView, TextInput } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

export default function TabChat() {
  const [data, setData] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleFilePicker = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      if (res.assets && res.assets.length > 0) {
        const fileUri = res.assets[0].uri;
        setFileName(res.assets[0].name);

        const fileContent = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const binaryStr = atob(fileContent);
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setData(jsonData);

        // Enviar data al backend
        await fetch("http://localhost:3001/upload-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: jsonData }),
        });
      }
    } catch (err) {
      console.error("Error seleccionando el archivo:", err);
    }
  };

  const handleAskQuestion = async () => {
    const response = await fetch("http://localhost:3001/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const result = await response.json();
    setAnswer(result.answer);
  };

  return (
    <View className="flex-1 p-4">
      <Button title="Seleccionar Archivo XLSX" onPress={handleFilePicker} />

      {fileName && <Text className="mt-2 font-bold">Archivo: {fileName}</Text>}

      {data.length > 0 && (
        <ScrollView className="mt-4 border p-2">
          <Text className="font-bold text-lg">Vista Previa de Datos</Text>
          <FlatList
            data={data.slice(0, 5)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="border-b p-2">
                {Object.entries(item).map(([key, value]) => (
                  <Text key={key}>
                    <Text className="font-bold">{key}: </Text>
                    {String(value)}
                  </Text>
                ))}
              </View>
            )}
          />
        </ScrollView>
      )}

      {/* Input para preguntas */}
      <TextInput
        className="border p-2 mt-4"
        placeholder="Haz una pregunta sobre los datos..."
        value={question}
        onChangeText={setQuestion}
      />
      <Button title="Preguntar" onPress={handleAskQuestion} />

      {answer && (
        <View className="mt-4 p-2 border">
          <Text className="font-bold">Respuesta:</Text>
          <Text>{answer}</Text>
        </View>
      )}
    </View>
  );
}
