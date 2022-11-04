class Extractdata {
    constructor(body) {
        this.orderedData = body
    }
    static EmployerSignUp = (body) => {
        const data = {
            first_name: body.firstName,
            last_name: body.lastName,
            password: body.password,
            repeat_password: body.repeatPassword,
            position: body.position,
            company_name: body.businessName,
            company_logo: body.file,
            business_webpage: body.businessWebpage,
            business_mobile_number: body.mobileNumber,
            business_address: body.address,
            country: body.country,
            city: body.city,
            contact_person_name: body.employerName,
            contact_person_number: body.employerNumber,
            contact_person_email: body.employerEmail
        }
        return new Extractdata(data)
    }
    static SeekerSignUp = (body) => {
        const data = {
            first_name: body.firstName,
            last_name: body.lastName,
            email: body.email,
            password: body.password,
            repeat_password: body.repeatPassword,
            position: body.position,
        }
        return new Extractdata(data)
    }
    static JobPost = (body) => {
        const data = {
            job_title: body.job_title,
            job_description: body.job_description,
            last_name: body.job_location,
            start_salary: body.start_salary,
            end_salary: body.end_salary,
            start_time: body.start_time,
            end_time: body.end_time,
            gender: body.gender,
            valid_upto: body.valid_upto,
            is_active: body.is_active,

        }
        return new Extractdata(data)
    }
}
export default Extractdata
