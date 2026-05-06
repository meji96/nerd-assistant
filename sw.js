/**
 * Configuración principal de la aplicación Nerd Assistant
 * Archivo generado a partir del esquema JSON.
 */
const appConfig = {
  app: {
    name: "Nerd Assistant - Universidad Galileo",
    version: "1.0.0",
    theme: {
      colors: {
        galileo_dark: "#0b1120",
        galileo_card: "#1e293b",
        galileo_blue: "#003b70",
        galileo_accent: "#F37021",
        galileo_lightblue: "#00a4e4"
      },
      background_image: "image_a30cee.jpg"
    }
  },
  user: {
    full_name: "Jorge Morales",
    role: "Estudiante Activo",
    avatar_provider: "https://ui-avatars.com/api/",
    signature: "Morales"
  },
  header: {
    institution: "Universidad Galileo",
    logo_url: "https://www.galileo.edu/wp-content/themes/galileo-theme/img/logo-galileo.png",
    logo_fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Universidad_Galileo_logo.svg/512px-Universidad_Galileo_logo.svg.png"
  },
  bento_grid_items: [
    {
      id: "link_ug",
      type: "primary_link",
      title: "Ir a UG",
      description: "Página principal de la universidad",
      url: "https://www.galileo.edu/",
      icon: "fa-globe",
      target: "_blank"
    },
    {
      id: "link_personal_web",
      type: "secondary_link",
      title: "Ir a mi sitio Web",
      description: null,
      url: "https://jorgemejicanos.wixsite.com/mi-sitio-personal",
      icon: "fa-laptop",
      target: "_blank"
    },
    {
      id: "link_video",
      type: "secondary_link",
      title: "Ir a Mi Video",
      description: null,
      url: "https://www.youtube.com/watch?v=BaaUbPSaZFo",
      icon: "fa-video",
      target: "_blank"
    },
    {
      id: "widget_tts",
      type: "interactive_widget",
      title: "Nerd Assistant",
      subtitle: "Texto a Voz",
      icon: "fa-robot",
      placeholder_text: "Escribe algo aquí...",
      default_speech: "Hola, soy tu Nerd Assistant. Por favor escribe algo para que pueda leerlo."
    }
  ],
  widgets: {
    dynamic_date: {
      enabled: true,
      message: "Revisa tus actividades pendientes de hoy."
    }
  }
};

// Exportamos la configuración para que pueda ser importada en otros módulos
export default appConfig;