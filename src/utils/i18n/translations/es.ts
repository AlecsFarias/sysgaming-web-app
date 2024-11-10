export const es = {
  auth: {
    signIn: {
      title: "Iniciar Sesión",
      noRegister: "¿Aún no tienes una cuenta?",
      goRegister: "Quiero registrarme",
      forms: {
        email: "Correo electrónico",
        password: "Contraseña",
      },
      errors: {
        email: {
          required: "El correo electrónico es obligatorio",
          valid: "Debe ser un correo válido",
        },
        password: {
          required: "La contraseña es obligatoria",
        },
      },
    },
    signUp: {
      title: "Registro",
      haveAccount: "¿Ya tienes una cuenta?",
      goSignIn: "Iniciar sesión",
      forms: {
        name: "Nombre",
        email: "Correo electrónico",
        password: "Contraseña",
        repeatPassword: "Repetir contraseña",
        signUp: "Registrarse",
      },
      errors: {
        name: {
          required: "El nombre es obligatorio",
        },
        email: {
          required: "El correo electrónico es obligatorio",
          valid: "Debe ser un correo válido",
        },
        password: {
          required: "La contraseña es obligatoria",
        },
        confirmPassword: {
          required: "La contraseña es obligatoria",
          equal: "Las contraseñas deben coincidir",
        },
      },
    },
  },
  dataGrid: {
    rowsPerPage: "Filas por página",
  },
  authenticated: {
    layout: {
      items: {
        home: "Inicio",
        transactions: "Transacciones",
      },
    },
    pages: {
      home: {
        title: "Billetera Digital",
        routes: "Inicio",
        wallet: {
          title: "Saldo Actual",
          tip: "Apuesta con responsabilidad. ¡Buena suerte con tus apuestas!",
        },
        bet: {
          title: "Apostar",
          placeholder: "Monto de la apuesta",
          success: "¡Ganaste la apuesta! 🤩",
          lose: "Parece que perdiste esta apuesta 😭",
          errors: {
            required: "El monto es obligatorio",
            valid: "El monto debe ser un número válido",
            min: "El monto mínimo es $1.00",
            max: "Saldo insuficiente",
          },
        },
        history: {
          title: "Apuestas",
          table: {
            value: "Monto Apostado",
            status: "Estado",
            gain: "Monto Ganado",
            date: "Fecha",
          },
          deleted: "Apuesta cancelada con éxito",
          status: {
            all: "Todos",
            win: "Ganadas",
            lost: "Perdidas",
            canceled: "Canceladas",
          },
        },
      },
      transactions: {
        title: "Transacciones Financieras",
        routes: "Transacciones",
        type: {
          all: "Todos",
          cancel: "Canceladas",
          win: "Ganancias",
          bet: "Apuestas",
        },
        table: {
          title: "Transacciones Financieras en tu Billetera",
          value: "Monto",
          status: "Estado",
          date: "Fecha",
        },
      },
    },
  },
};
