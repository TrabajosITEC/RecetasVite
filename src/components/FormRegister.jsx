import { Formik, Form } from 'formik'
import { useContext, useState } from "react"
import { ModeContext } from "../contexts/MainContext"
import { InputText } from "primereact/inputtext"
import { FloatLabel } from "primereact/floatlabel"
import { Message } from 'primereact/message'
import { Button } from 'primereact/button'
import * as Yup from 'yup'

export default function FormRegister() {
    const { setUserActive } = useContext(ModeContext)
    // const [valueUserName, setValueUserName] = useState('');

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .required('Debe ingresar un nombre de usuario')
            .test(
                'len',
                'El nombre de usuario debe tener entre 3 y 15 caracteres (sin contar espacios)',
                function (value) {
                    if (!value) return false;
                    const trimmedValue = value.replace(/\s+/g, '');
                    return trimmedValue.length >= 3 && trimmedValue.length <= 15;
                }
            ),
        passWord: Yup.string()
            .matches(
                /^(?=.*[A-Z])(?=.*\d).{1,8}$/,
                'La contraseña debe tener al menos una mayúscula, al menos un número y como máximo 8 caracteres'
            )
            .required('La contraseña es obligatoria'),
        email: Yup.string().email('Correo electrónico inválido').required('Requerido'),
    });

    const [loading, setLoading] = useState(false);

    return (
      <div className="flex justify-content-center align-items-center min-h-screen">
        <div className='surface-card p-4 shadow-2 border-round w-30rem'>         
            <h1 className="flex align-items-center justify-content-center ">Formulario de Registro</h1>
            <Formik
                initialValues={{
                    userName: '',
                    passWord: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setLoading(true);

                    setTimeout(() => {
                        setLoading(false);
                        setSubmitting(false);
                        if (values.userName !== "joaquin") {
                            alert("El usuario no es joaquin!");
                        } else {
                            alert("el usuario es joaquin");
                            setUserActive(values.userName);
                        }
                    }, 2000);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit }) => (
                    <Form>
                        <div className="card">
                            <div className="flex flex-column align-items-center mb-5 gap-2">
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

                            <div className="flex flex-column align-items-center mb-5 gap-2">
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
                                {errors.passWord && touched.passWord ?
                                    <Message severity="error" text={errors.passWord} /> : ""
                                }
                            </div>

                            <div className="flex flex-column align-items-center mb-5 gap-2">
                                <FloatLabel>
                                    <InputText
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? 'p-invalid' : ''}
                                    />
                                    <label htmlFor="email">Correo Electronico</label>
                                </FloatLabel>
                                {errors.email && touched.email ?
                                    <Message severity="error" text={errors.email} /> : ""
                                }
                            </div>
                            <div className='flex flex-column align-items-center mb-5 gap-2'>
                              <Button
                                  type='submit'
                                  label="Registrarse"
                                  icon="pi pi-check"
                                  loading={loading || isSubmitting}
                                  onClick={handleSubmit} />
                            </div>    
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        </div>
    );
}

