const {getCollection} = require('../dbFunctions/connectToDB')

async function postExam(exam){
    // console.log("exam ",exam);
    const exams = await getCollection('exam');
    // console.log("exams ",exams);
    await exams.insertOne(exam);
    }

async function deleteExamFromDb(id){
    id.examId = Number(id.examId)
    const exam = await getCollection('exam');
    await exam.deleteOne(id)
    console.log("DELETED");
}

module.exports={
    postExam,
    deleteExamFromDb
}