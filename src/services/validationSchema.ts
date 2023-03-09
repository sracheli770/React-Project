import * as yup from "yup";

export const validationSchemaDetails = yup.object().shape({
    firstName: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    lastName: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    city: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    street: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    houseNumber: yup.string().required("זהו שדה חובה"),
    notes: yup.string(),
    creditCardNumber: yup.string().min(16, "הזן מספר אשראי תקין").max(19, "מס' הספרות רב מדי").required("זהו שדה חובה"),
    validity: yup.string().length(5, "הזן תאריך תקין").required("זהו שדה חובה"),
    cvv: yup.string().length(3, "הזן 3 ספרות שבגב הכרטיס").required("זהו שדה חובה")
});
