import Form from "./style";



const FormMain = ({children,onSubmit}) => {

  return (
    
      <Form onSubmit={onSubmit}>
        {children}
      </Form>
     
    
  );
};

export default FormMain;
