class Extractdata {
    constructor(body) {
        this.orderedData = body
    }
    static CompanySignUp = (body) => {
        const data = {
            position: body.position,
            company_name: body.businessName,
            company_logo: body.businessLogo,
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
}
export default Extractdata