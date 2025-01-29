import { object, string, number, ref } from "yup";

let userSchema = object(
{
  fullname: string().min(3, "The name has to be at least 3 characters").required("Name is required") ,
  phone: number().positive().required(),
  email: string().email("Invalid email format").required("email is required"),
  confirmEmail: string().oneOf([ref("email"), null], "Emails do not match").required("Confirm email is required")
}
);

const validateForm = async(dataForm) => 
{
  try 
  {
    await userSchema.validate(dataForm);
    return { status: "success", message: "Valid form" }
  } 
  catch (error) 
  {
    return { status: "error", message: error.message }
  }
}

export default validateForm;