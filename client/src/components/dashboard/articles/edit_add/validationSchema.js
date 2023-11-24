import * as Yup from 'yup';

export const formValues = {
    title:'',
    content:'',
    excerpt:'',
    status:'draft'
}


export const validation = () => (
    Yup.object({
        title:Yup.string()
        .required('Sorry the title is required'),
         content:Yup.string()
        .required('Sorry the content is required')
        .min(50,' please write some more'),
        excerpt:Yup.string()
        .required('Sorry the excerpt is required')
        .max(500,'Sorry its 500 max'),
        
        status:Yup.string()
        .required('Sorry the status is required'),
    })
)

