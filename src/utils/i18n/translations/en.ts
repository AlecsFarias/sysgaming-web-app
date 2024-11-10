export const en = {
  auth: {
    signIn: {
      title: "Sign In",
      noRegister: "Don't have an account yet?",
      goRegister: "Sign up",
      forms: {
        email: "Email",
        password: "Password",
      },
      errors: {
        email: {
          required: "Email is required",
          valid: "Must be a valid email",
        },
        password: {
          required: "Password is required",
        },
      },
    },
    signUp: {
      title: "Sign Up",
      haveAccount: "Already have an account?",
      goSignIn: "Log in",
      forms: {
        name: "Name",
        email: "Email",
        password: "Password",
        repeatPassword: "Repeat Password",
        signUp: "Sign Up",
      },
      errors: {
        name: {
          required: "Name is required",
        },
        email: {
          required: "Email is required",
          valid: "Must be a valid email",
        },
        password: {
          required: "Password is required",
        },
        confirmPassword: {
          required: "Password is required",
          equal: "Passwords must match",
        },
      },
    },
  },
  dataGrid: {
    rowsPerPage: "Rows per page",
  },
  authenticated: {
    layout: {
      items: {
        home: "Home",
        transactions: "Transactions",
      },
    },
    pages: {
      home: {
        title: "Digital Wallet",
        routes: "Home",
        wallet: {
          title: "Current Balance",
          tip: "Bet responsibly. Good luck with your bets!",
        },
        bet: {
          title: "Place Bet",
          placeholder: "Bet Amount",
          success: "You won the bet! 🤩",
          lose: "Looks like you lost this bet 😭",
          errors: {
            required: "Amount is required",
            valid: "Amount must be a valid number",
            min: "Minimum amount is $1.00",
            max: "Insufficient balance",
          },
        },
        history: {
          title: "Bets",
          table: {
            value: "Bet Amount",
            status: "Status",
            gain: "Amount Won",
            date: "Date",
          },
          deleted: "Bet successfully canceled",
          status: {
            all: "All",
            win: "Won",
            lost: "Lost",
            canceled: "Canceled",
          },
        },
      },
      transactions: {
        title: "Financial Transactions",
        routes: "Transactions",
        type: {
          all: "All",
          cancel: "Canceled",
          win: "Winnings",
          bet: "Bets",
        },
        table: {
          title: "Financial Transactions in Your Wallet",
          value: "Amount",
          status: "Status",
          date: "Date",
        },
      },
    },
  },
};
