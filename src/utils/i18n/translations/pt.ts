export const pt = {
  auth: {
    signIn: {
      title: "Entrar",
      noRegister: "Ainda não tem cadastro ?",
      goRegister: "Quero me cadastrar",
      forms: {
        email: "E-mail",
        password: "Senha",
      },
      errors: {
        email: {
          required: "O e-mail é obrigatório",
          valid: "Deve ser e-mail válido",
        },
        password: {
          required: "A senha é obrigatória",
        },
      },
    },
    signUp: {
      title: "Cadastro",
      haveAccount: "Ja tem conta?",
      goSignIn: "Fazer login",
      forms: {
        name: "Nome",
        email: "E-mail",
        password: "Senha",
        repeatPassword: "Repetir senha",
        signUp: "Me cadastrar",
      },
      errors: {
        name: {
          required: "O nome é obrigatório",
        },
        email: {
          required: "O e-mail é obrigatório",
          valid: "Deve ser e-mail válido",
        },
        password: {
          required: "A senha é obrigatória",
        },
        confirmPassword: {
          required: "A senha é obrigatória",
          equal: "A senhas devem ser iguais",
        },
      },
    },
  },
  dataGrid: {
    rowsPerPage: "Linhas por pagina",
  },
  authenticated: {
    layout: {
      items: {
        home: "Início",
        transactions: "Transações",
      },
    },
    pages: {
      home: {
        title: "Carteira digital",
        routes: "Início",
        wallet: {
          title: "Saldo atual",
          tip: "Aposte com responsabilidade. Boa sorte nas suas apostas!",
        },
        bet: {
          title: "Apostar",
          placeholder: "Valor de aposta",
          success: "Você ganhou a aposta! 🤩",
          lose: "Parece que você perdeu essa aposta 😭",
          errors: {
            required: "O valor é obrigatório",
            valid: "O valor deve ser um número válido",
            min: "O valor mínimo é R$ 1,00",
            max: "Saldo insuficiente",
          },
        },
        hitory: {
          title: "Apostas",
          table: {
            value: "Valor apostado",
            status: "status",
            gain: "Valor recebido",
            date: "Data",
          },
          deleted: "Aposta cancelada com sucesso",
          status: {
            all: "Todos",
            win: "Ganhas",
            lost: "Perdidas",
            canceled: "Canceladas",
          },
        },
      },
      transactions: {
        title: "Transações financeiras",
        routes: "Transações",
        type: {
          all: "todos",
          cancel: "Canceladas",
          win: "Ganhos",
          bet: "Apostas",
        },
        table: {
          title: "Transações financeiras em sua carteira",
          value: "Valor",
          status: "Status",
          date: "Data",
        },
      },
    },
  },
};

// Cria um tipo que transforma um objeto em chaves separadas por pontos
type DotNotation<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? `${Prefix}${K}` | DotNotation<T[K], `${Prefix}${K}.`>
        : never;
    }[keyof T]
  : "";

// Exporta o tipo com base no objeto `pt`
export type TranslationKeys = DotNotation<typeof pt>;
