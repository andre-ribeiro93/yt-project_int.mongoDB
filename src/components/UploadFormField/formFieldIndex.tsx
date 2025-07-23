import { WarningCircle } from "phosphor-react";
import { FormFieldContainer, InputContainer, TextContent, ErrorBox } from "./formFieldStyles";
import { forwardRef } from "react";

interface FormFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  error?: string | null;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(({
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  onKeyDown,
}, ref) => {

  return (
    <FormFieldContainer>
      <InputContainer isError={!!error}> {/* double exclamation to convert the string in boolean and control the style. */}
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
      </InputContainer>

      <TextContent>
        {error && (
          <ErrorBox>
            <WarningCircle size={16} weight="fill" />
            {error}
          </ErrorBox>
        )}
      </TextContent>
    </FormFieldContainer>
  )
});

FormField.displayName = 'FormField';

export default FormField;

