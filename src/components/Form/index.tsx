import { ReactNode } from "react";
import Form from "./style";

interface IForm {
  children:ReactNode
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

const FormMain = ({children,onSubmit}:IForm) => {

  return (
    
      <Form onSubmit={onSubmit}>
        {children}
      </Form>
     
    
  );
};

export default FormMain;
