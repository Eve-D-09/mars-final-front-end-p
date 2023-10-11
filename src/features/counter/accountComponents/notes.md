
----- LOGIN ----

1. Login.jsx

const [ input, setInput ] = useState({
    email: "",
    password: ""
})
const [ errors, setErrors ] = useState(null);

2.  const results = await validate(input, "login");
3.  setErrors(results);

-----------------------------------------------------
errorsMod is in index.js validation folder
4. const errorsMod = {};
errors.details.forEach((error) => {
   errorsMod[error.context.key] = error.message;
});
setErrors(errorsMod);
------------------------------------------------------

Add value to email and password
5. <input value={input.email} />
<input value={input.password} />

6. where to set p tags {errors && errors.email} and {errors && errors.password} ? 

