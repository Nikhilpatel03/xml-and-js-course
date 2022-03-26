const students = require('../data.json');


const getAllData = async ({ rollno, firstname, lastname, nickname, marks }) => {
    try {
        let result = Array.from(students);

        if (rollno) {
            result = result.filter((item) => item.rollno === rollno);
        }

        if (firstname) {
            result = result.filter((item) => item.firstname === firstname);
        }

        if (lastname) {
            result = result.filter((item) => item.lastname === lastname);
        }

        if (nickname) {
            result = result.filter((item) => item.nickname === nickname);
        }
        
        if (marks) {
            result = result.filter((item) => item.marks === marks);
        }

        return { code: 200, data: JSON.stringify(result) };
    } catch (error) {
        return { code: 500, data: { message: error.message } };
    }
}


const getStudentById = async (studentRollNo) => {
    
    const student = students.find(({ rollno }) => rollno === Number(studentRollNo));
    if (student) {
        return { code: 200, data: JSON.stringify(student) }
    } else {
        return {
            code: 404,
            data: JSON.stringify({ message: `No student found for roll no ${studentRollNo}` }),
        }
    }
}

module.exports = {
    getAllData,
    getStudentById,
};