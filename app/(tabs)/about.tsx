import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Tab() {
  return (
    <View style={styles.container}>
      {/* Avatar y nombre */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: "https://i.postimg.cc/kGFdqLYm/rr.gif" }} style={styles.avatar} />
        <Text style={styles.username}>@Rfromerol1</Text>
      </View>

      {/* Sobre mí */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.centeredText]}>Sobre mí</Text>
        <Text style={[styles.sectionText, styles.centeredText]}>
          Soy un desarrollador de software con experiencia en el desarrollo de aplicaciones web y móviles.
        </Text>
      </View>

      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.skillsContainer}>
          {["React", "React Native", "Node.js", "JavaScript", "TypeScript", "MongoDB", "SQL"].map((skill, index) => (
            <Text key={index} style={styles.skillBadge}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      {/* Redes Sociales */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contacto</Text>
        <View style={styles.socialContainer}>
          <SocialButton name="logo-github" color="black" text="GitHub" url="https://github.com/rfromerol1" />
          <SocialButton name="logo-linkedin" color="blue" text="LinkedIn" url="https://www.linkedin.com/in/roger-romero-1a3719275/" />
          <SocialButton name="logo-twitter" color="#1DA1F2" text="Twitter" url="https://twitter.com/" />
          <SocialButton name="logo-instagram" color="#E4405F" text="Instagram" url="https://instagram.com/" />
          <SocialButton name="logo-facebook" color="#1877F2" text="Facebook" url="https://facebook.com/" />
          <SocialButton name="logo-youtube" color="red" text="YouTube" url="https://youtube.com/" />
          <SocialButton name="logo-whatsapp" color="green" text="WhatsApp" url="https://api.whatsapp.com/send?phone=593999898401&text=Hola" />
        </View>
      </View>
    </View>
  );
}

// Componente para los botones de redes sociales
const SocialButton = ({ name, color, text, url }: { name: any; color: string; text: string; url: string }) => (
  <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL(url)}>
    <Ionicons name={name} size={24} color={color} />
    <Text style={[styles.socialText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#DDE7C7",///color de fondor
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionText: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  skillBadge: {
    backgroundColor: "#0077B5",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
  },
  socialContainer: {
    marginTop: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  socialText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  centeredText: {
    textAlign: "center", //  Centra el texto
    width: "90%", //  Evita que el texto se extienda demasiado
  },
});

