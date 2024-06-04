export type TMonth = | "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"

export type TSemesterName = "Autumn" | "Summer" | "Fall"
export type TSemesterCode = "01" | "02" | "03"


export type TAcademicSemester = {
   
    name: TSemesterName,
    code: TSemesterCode,
    year: string,
    startMonth: TMonth,
    endMonth: TMonth
}

export type TAcademicSemesterNameCodeMapper = {
    [key: string]: string
}