import { InfoOutlined } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as JoyInput,
  InputProps as JoyInputProps,
} from "@mui/joy";
import { Control, Controller } from "react-hook-form";

type InputProps = {
  control?: Control<any> | undefined;
  name?: string;
  label?: string;
  error?: string;
} & Omit<JoyInputProps, "error">;

export const Input: React.FC<InputProps> = ({
  control,
  name,
  label,
  error,
  ...rest
}) => {
  if (!control) {
    <JoyInput {...rest} name={name} />;
  }

  return (
    <Controller
      control={control}
      name={name!}
      render={({ field }) => (
        <FormControl error={!!error}>
          {label ? <FormLabel>{label}</FormLabel> : null}
          <JoyInput {...rest} {...field} />

          {error ? (
            <FormHelperText color="error">
              <InfoOutlined />
              {error}
            </FormHelperText>
          ) : null}
        </FormControl>
      )}
    />
  );
};
