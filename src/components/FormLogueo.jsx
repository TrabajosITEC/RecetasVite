import { Formik, Form } from 'formik';
import { useContext} from "react"
import { ModeContext } from "../contexts/MainContext";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Message } from 'primereact/message';
import * as Yup from 'yup';

export default function FormLogueo() {
    const { setUserActive} = useContext(ModeContext);
    // const [valueUserName, setValueUserName] = useState('');

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
          .min(2, 'El nombre !')
          .max(50, 'Demasiado largo!')
          .required('Debe ingresar un nombre de usuario'),
        passWord: Yup.string()
          .min(2, 'Demasiado corto!')
          .max(50, 'Demasiado largo!')
          .required('Requerido'),
        // email: Yup.string().email('Correo electrónico inválido').required('Requerido'),
      });

    return(
        <div>
        
        <Formik
          initialValues={{
            userName: '',
            passWord: '',
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            if (values.userName !== "joaquin"){
                alert("El usuario no es joaquin!")
            } else {
                alert("el usuario es joaquin")
                setUserActive(values.userName)
            }
            console.log(values);
          }}
        >
          {({  values, errors, touched, handleChange, handleBlur }) => (
            <Form>
                <div className="card">
                <div className="flex flex-wrap align-items-center mb-5 gap-2">
                    <FloatLabel>
                    <InputText
                        id="userName"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.userName && touched.userName ? 'p-invalid' : ''}
                    />
                    <label htmlFor="userName">Nombre de Usuario</label>
                    </FloatLabel>
                    {errors.userName && touched.userName ? 
                    <Message severity="error" text={errors.userName} /> : ""    
                    }
                </div>

                <div className="flex flex-wrap align-items-center mb-5 gap-2">
                    <FloatLabel>
                        <InputText
                            id="passWord"
                            name="passWord"
                            type="password"
                            value={values.passWord}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.passWord && touched.passWord ? 'p-invalid' : ''}
                        />
                        <label htmlFor="passWord">Contraseña</label>
                    </FloatLabel>
                    {errors.passWord && touched.passWord ?<Message severity="error" text={errors.passWord} /> : ""}
                </div>
                </div>

              {/* <div>
                <label htmlFor="email">Correo Electrónico</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>
     */}
              <button type="submit">Enviar</button>
            </Form>
          )}
        </Formik>
      </div>
    )
};
